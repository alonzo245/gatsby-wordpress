import React from 'react';
import './Content.css';

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}


const Content = (props) => {
  return (
    <section>
      <div className="articleHeader">
        <div className="pepperHalper">
          <img src="/assets/images/pepperHelper.png" />
          <h1>{props.article.title}</h1>
        </div>
      </div>

      <article className="content">
        <br />
        {console.log(props)}
        <br />
        {/* <img className="articleImage" src={`https${props.article.content}?alt=media`} alt="" key={i} /> */}
        <strong>{props.article.title}</strong>
        <p dangerouslySetInnerHTML={{ __html: props.article.content }} />

      </article>
    </section>
  )
}

export default Content;