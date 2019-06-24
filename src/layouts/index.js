import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SiteWrapper from '../components/SiteWrapper/SiteWrapper'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import './index.css'

import MainMenu from '../components/Menu/MainMenu'

const TemplateWrapper = ({ children, data }) => (
  <div>
    {/* <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    /> */}
    <Header />
    <SiteWrapper>
      {console.log(data)}
      {/* {console.log('mmmm',data.allWordpressWpApiMenusMenusItems.edges[0].node.items.slice(0,3))} */}
      <MainMenu menu={data} />
      {children()}
    </SiteWrapper>
    
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    allWordpressWpApiMenusMenusItems{
      edges{
          node{
              id
              name
              items{
                  title
                  url
                  object_slug
              }
          }
      }
  }
  }
`