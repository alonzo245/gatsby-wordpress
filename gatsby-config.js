const path  = require('path');
const autoprefixer  = require('autoprefixer');

module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        title: 'Wordpress Gatsby',
        subtitle: `Fetch Data From Local WP Install`,
    },
    plugins: [
        // 
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
        // 'gatsby-plugin-i18n',
        
    ],
};
