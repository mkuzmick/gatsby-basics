const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mk/Development/gatsby-basics/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mk/Development/gatsby-basics/src/pages/index.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/mk/Development/gatsby-basics/src/pages/about.js")))
}

