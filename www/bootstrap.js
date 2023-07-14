// A dependency graph that contains any wasm must all be imported
// asynchronously. This `bootstrap.js` file does the single async import, so
// that no one else needs to worry about it again.
import("./indexText.js")
  .catch(e => console.error("Error importing `indexText.js`:", e));
