# Local OCR assets

CollMan never uploads captured images for OCR. The browser starts a dedicated
owner worker lazily and reuses its Tesseract worker. Disposing a session or the
60-second request deadline terminates the owner and child worker, rejects the
pending request, and releases image memory. Only one session may own a worker at
a time; callers process album cells sequentially. Empty/oversized encoded input
is rejected; the shared image processor enforces decoded pixel limits.

All runtime, worker, core and language URLs resolve under this directory relative
to the application's base URL (including subpath deployments). No CDN or remote
OCR service is used. Deploy this directory with the web application; it adds
about 12 MiB. Browser caches may retain runtime assets, but OCR photos are never
written to storage. First use requires these static assets to be available.

Vendored, unmodified upstream files:

| Files | Pinned source | License |
| --- | --- | --- |
| `tesseract.min.js`, `worker.min.js` | npm `tesseract.js@6.0.1`, `dist/` | Apache-2.0 (`LICENSE-tesseract.js`) |
| `tesseract-core-{lstm,simd-lstm}.wasm.js` | npm `tesseract.js-core@6.0.0` | Apache-2.0 (`LICENSE-tesseract.js-core`) |
| `eng.traineddata.gz` | npm `@tesseract.js-data/eng@1.0.0`, `4.0.0_best_int/` | Tesseract data Apache-2.0 (`LICENSE-traineddata`) |
| `ita.traineddata.gz` | npm `@tesseract.js-data/ita@1.0.0`, `4.0.0_best_int/` | Tesseract data Apache-2.0 (`LICENSE-traineddata`) |

The core JavaScript files embed their WASM binaries; standalone `.wasm` files
are unnecessary. Both SIMD and baseline LSTM cores are included for browser
compatibility. The language packages contain integer LSTM models derived from
[tesseract-ocr/tessdata](https://github.com/tesseract-ocr/tessdata); package
metadata uses MIT for its packaging, while the actual training data uses
Tesseract's Apache-2.0 license (also confirmed by the naptha/tessdata repository license).

Archive provenance:

- https://registry.npmjs.org/tesseract.js/-/tesseract.js-6.0.1.tgz
- https://registry.npmjs.org/tesseract.js-core/-/tesseract.js-core-6.0.0.tgz
- https://registry.npmjs.org/@tesseract.js-data/eng/-/eng-1.0.0.tgz
- https://registry.npmjs.org/@tesseract.js-data/ita/-/ita-1.0.0.tgz

`SHA256SUMS` records the exact vendored runtime and model bytes. The first-party
`loader.js` and `session-worker.js` implement lifecycle and same-origin loading.

Native platforms use Apple Vision (accurate English/Italian, no language
correction that could corrupt card codes) and Windows.Media.Ocr (one pass per
installed English/Italian language, distinct locale variants deduplicated).
Windows needs an installed English or Italian OCR language pack; failure is
reported to the review UI for retry/manual selection. Windows cancellation drops
late results and avoids starting concurrent native jobs; an in-progress OS OCR
call finishes in its background thread. Apple cancellation calls Vision.cancel.

Validation:

- `flutter test test/features/scanning/scan_ocr_native_test.dart` exercises the
  channel contract, concurrency, cancellation and encoded input bounds.
- On macOS, `xcrun swift test/features/scanning/scan_ocr_vision_smoke.swift` runs
  real Vision on generated bilingual text with an exact passcode assertion.
- For the browser smoke, serve `web/` on localhost port 18878 and start a dedicated
  headless Chrome with remote debugging on port 9227, then run
  `node test/features/scanning/scan_ocr_browser_smoke.mjs`. It asserts actual
  bilingual OCR/passcode recognition, worker reuse and startup cancellation.
- Windows compilation and installed-language recognition require a Windows host.
