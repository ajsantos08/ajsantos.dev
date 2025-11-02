import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.ajsantos.dev`,
    title: "ajsantos.dev",
    description: "Arthur Santos",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ajsantos.dev`,
        short_name: `ajsantos.dev`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon/favicon-96x96.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/favicon/web-app-manifest-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/web-app-manifest-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}

export default config
