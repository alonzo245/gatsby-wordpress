'use strict'

module.exports = `
    {
        allWordpressPage(sort: {fields: [date], order: ASC}) {
            edges {
              node {
                id
                slug
                status
                template
                link
                date
                title
                content
                parent {
                  id
                  children {
                    id
                  }
                }
                acf {
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