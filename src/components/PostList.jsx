import React from 'react';
import PostItems from './PostItems';

export default function PostList({ post, title, removePost }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>

      {post.map((post, ind) => (
        <PostItems removePost={removePost} key={post.id} post={post} ind={ind + 1} />
      ))}
    </div>
  );
}
