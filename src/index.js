const path = require("path")

module.exports = {
  name: "vuepress-latest-articles",
  plugins: ["last-updated"],
  enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],
}
