import React, {Component} from "react"
import Article from '../components/containers/Article/Article'

class PageTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage

        console.log('aaaa')
        console.log(this.props.pathContext.suggestedArticles)
        // console.log(this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items.slice(0,3))

        return <Article article={currentPage} suggestedArticles={this.props.pathContext.suggestedArticles} /> 
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            guid
            date(formatString: "MMMM DD, YYYY")
            acf{
                facebook
              }
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }

        
    }
`