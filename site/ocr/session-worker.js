// Owner worker guarantees immediate cancellation throughout Tesseract startup.
importScripts('tesseract.min.js');
const base = new URL('.', self.location.href);
let engine;
self.onmessage = async ({ data }) => {
  try {
    engine ??= await Tesseract.createWorker(['eng', 'ita'], 1, {
      workerPath: new URL('worker.min.js', base).href,
      corePath: base.href,
      langPath: base.href,
      workerBlobURL: false,
      gzip: true,
      cacheMethod: 'none',
      errorHandler: (error) => self.postMessage({ error: String(error) }),
    });
    const result = await engine.recognize(data);
    self.postMessage({ text: result.data.text });
  } catch (error) {
    self.postMessage({ error: String(error) });
  }
};
