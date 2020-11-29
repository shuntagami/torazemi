import React, {useState} from 'react';
import LIkeButton from './LIkeButton'

const Article = (props) => {
  const [isPublished, togglePublished] = useState(false);

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)} />
      <LIkeButton  />
    </div>
  )
};

export default Article
