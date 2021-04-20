module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    description: `This is simple repetition Gatsby project`,
    author: `Wojciech Jarosz`,
    person: { name: "John", age: 32 },
    simpleData: ["item1", "item2"],
    personalProfile: "https://www.facebook.com/IchBinSchmetterlinge",
    complexData: [
      { surname: "Jakis", age: 44 },
      { surname: "Taki", age: 20 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
