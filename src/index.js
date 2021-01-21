const path = require("path")

module.exports = {
  name: "vuepress-plugin-latest-articles",
  plugins: ["last-updated"],
  enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],
}
