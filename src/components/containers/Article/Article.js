import React, { Component, Fragment } from 'react';
// import axios from '../../axios';
import './Article.scss';
import Content from '../../Content/Content';
import SuggestedArticles from '../../SuggestedArticles/SuggestedArticles';
// import mockArticle from '../../mock/article';
// import suggestedArticle from '../../mock/suggestedArticle';
import Share from '../../Share/Share';

class Article extends Component {

  render() {

    return <div>
      <Content article={this.props.article} />
      {!this.props.isAppMode && <Share article={this.props.article} />}
      {/* <SuggestedArticles articles={this.state.suggestedArticles} appMode={this.props.isAppMode}></SuggestedArticles> */}
    </div>
  }
}

export default Article;