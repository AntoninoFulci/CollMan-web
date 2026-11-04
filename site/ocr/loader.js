// CollMan local OCR: one reusable worker per session, no queued photographs.
(() => {
  const base = new URL('.', document.currentScript.src);
  let activeSession = null;
  class Session {
    constructor() { this.worker = null; this.pending = null; this.closed = false; }
    recognize(bytes) {
      if (this.closed) return Promise.reject(new Error('OCR session disposed'));
      if (this.pending || (activeSession && activeSession !== this)) {
        return Promise.reject(new Error('OCR is busy'));
      }
      if (!bytes.length || bytes.length > 20 * 1024 * 1024) {
        return Promise.reject(new Error('Invalid OCR image size'));
      }
      activeSession = this;
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => this.stop(new Error('Local OCR timed out')), 60000);
        this.pending = { resolve, reject, timer };
        try {
          if (!this.worker) {
            this.worker = new Worker(new URL('session-worker.js', base));
            this.worker.onmessage = ({ data }) => {
              if (!this.pending) return;
              if (data.error) { this.stop(new Error(data.error)); return; }
              const pending = this.pending;
              this.pending = null;
              clearTimeout(pending.timer);
              pending.resolve(data.text);
            };
            this.worker.onerror = () => this.stop(new Error('Local OCR worker failed'));
            this.worker.onmessageerror = () => this.stop(new Error('Invalid OCR worker response'));
          }
          // Copy prevents detaching the caller's crop, which remains available for retry.
          const copy = new Uint8Array(bytes);
          this.worker.postMessage(copy, [copy.buffer]);
        } catch (error) { this.stop(error); }
      });
    }
    stop(error) {
      // Terminating the owner also terminates its child Tesseract worker, even
      // during initialization before createWorker has returned a handle.
      this.worker?.terminate();
      this.worker = null;
      if (activeSession === this) activeSession = null;
      if (this.pending) {
        const pending = this.pending;
        this.pending = null;
        clearTimeout(pending.timer);
        pending.reject(error);
      }
    }
    dispose() { this.closed = true; this.stop(new Error('OCR session disposed')); }
  }
  globalThis.CollManOcr = { create: () => new Session() };
})();
