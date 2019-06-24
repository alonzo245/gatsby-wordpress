import React, { Component } from 'react';
// import './SuggestedArticles.scss';


class SuggestedArticles extends Component {

    toDateTime(secs) {
        let t = new Date(1970, 0, 1);
        return t.setSeconds(secs);
    }


    render() {
        if (!this.props.suggestedArticles) return null;

        return (
            <section className="suggestedArticles">
                <h2>כתבות שיעניינו אותך</h2>
                <ul>
                    {console.log('this.props.suggestedArticles',this.props.suggestedArticles)}
                    {this.props.suggestedArticles &&
                        this.props.suggestedArticles.map((article, i) => {
                            return <a href={this.props.appMode ? article.node.link : article.node.link} key={i}>
                                <li>
                                    <article>
                                        {/* <div className="suggestedArticleImage" style={{ backgroundImage: `url("https${article.summaryImage}?alt=media")` }} /> */}
                                        <h3>{article.node.title}</h3>
                                        {/* <span>{this.toDateTime(article.created.seconds)}</span> */}
                                        <summary className="ellipsis">
                                            {/* {article.summary} */}
                                            <p>לכתבה המלאה...</p>
                                        </summary>

                                    </article>
                                </li>
                            </a>
                        })}
                </ul>
            </section>
        )
    }
}

export default SuggestedArticles;