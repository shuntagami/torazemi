import React from 'react';
import LIkeButton from './LIkeButton'

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />
      <LIkeButton count={props.count} />
    </div>
  )
};

export default Article
