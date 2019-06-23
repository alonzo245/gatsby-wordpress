import React, {Component} from "react"

class PageTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage

        console.log(currentPage)

        return (
            <div>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.guid}}/>
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

                <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
                <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
                <p>facebook = {currentPage.acf.facebook && currentPage.acf.facebook}</p> 
            </div>
        )
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