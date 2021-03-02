// requirements
const path = require("path");

module.exports = {
  // relative path to script.js
  entry: "./assets/js/script.js",
  // output bundled code in main.bundle.js
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  // do not run in production mode yet
  mode: "development",
};
