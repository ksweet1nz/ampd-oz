require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `AMPD Lab`,
    description: `Research work being undertaken at the with master students in architecture.`,
    author: `Kevin Sweet`,
    titleTemplate: `%s | AMPD Lab`,
    url: `https://www.ampd.center`,
    image: `mainBcg.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Montserrat`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Projects`,
            mapping: { image: `fileNode` },
          },
        ],
      },
    },
  ],
}
