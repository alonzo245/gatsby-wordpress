const path  = require('path');
const autoprefixer  = require('autoprefixer');

module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        title: 'Wordpress Gatsby',
        subtitle: `Fetch Data From Local WP Install`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-postcss-sass`,
            options: {
                precision: "8",
                includePaths: [
                    path.resolve(__dirname, "./node_modules"),
                    path.resolve(__dirname, "./node_modules/bootstrap-sass/assets/stylesheets"),
                    path.resolve(__dirname, "./node_modules/layout-grid/sass"),
                    path.resolve(__dirname, "./node_modules/slick-carousel/slick"),
                ],
                postCssPlugins: [
                    autoprefixer({
                        browsers: ["last 2 versions"],
                    }),
                ],
            },
        },
        // 'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "localhost/wordpress-articles",
                protocol: "http",
                hostingWPCOM: false,
                useACF: true,
                verboseOutput: true
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        
    ],
};
