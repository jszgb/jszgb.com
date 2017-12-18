module.exports = {
  siteMetadata: {
    title: `JavaScript Zagreb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    }
  ],
    
}
