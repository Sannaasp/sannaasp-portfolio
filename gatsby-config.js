/**
 * @type {import('gatsby').GatsbyConfig}
 */

const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `sannaasp-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "vappue7bp3pu",
        accessToken: "GQ-T7R74AJx_ULP-15lww0rXESaazHR7XjS1dfXliy4",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify",
  ],
};
