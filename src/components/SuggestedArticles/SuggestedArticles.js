import React, { Component } from 'react';
import './SuggestedArticles.scss';


class SuggestedArticles extends Component {

    toDateTime(secs) {
        let t = new Date(1970, 0, 1);
        return t.setSeconds(secs);
    }


    render() {
        if (!this.props.articles) return null;

        return (
            <section className="suggestedArticles">
                <h2>כתבות שיעניינו אותך</h2>
                <ul>
                    {this.props.articles &&
                        this.props.articles.map((article, i) => {
                            return <a href={this.props.appMode ? article.shortUrlAppMode : article.shortUrl} key={i}>
                                <li>
                                    <article>
                                        <div className="suggestedArticleImage" style={{ backgroundImage: `url("https${article.summaryImage}?alt=media")` }} />
                                        <h3>{article.summaryTitie}</h3>
                                        {/* <span>{this.toDateTime(article.created.seconds)}</span> */}
                                        <summary className="ellipsis">
                                            {article.summary}
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