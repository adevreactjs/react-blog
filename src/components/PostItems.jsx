import React from 'react';
import '../styles/App.css'
import MyButton from './UI/button/MyButton';

export default function PostItems({post, ind, removePost}) {

    return (
    <div className="post">
      <div className="post__content">
        <strong>{ind}. {post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => removePost(post)}>Delete</MyButton>
      </div>
    </div>
  );
}
