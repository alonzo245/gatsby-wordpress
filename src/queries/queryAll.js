'use strict'

module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                    acf{
                        facebook
                      }
                }
            }
        }
        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
                    format
                    title
                    date
                }
            }
        }
    }
`