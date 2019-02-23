module.exports = {
  siteMetadata: {
    title: "WordPress + Gatsby",
    footerContent: "WordCamp Praha 2019",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "wp.demo",
        hostingWPCOM: false,
        protocol: "http",
        useACF: false,
        auth: {},
        verboseOutput: false,
        includedRoutes: ["**/posts"]
      }
    }
  ]
};
