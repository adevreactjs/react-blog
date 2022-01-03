import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

export default function PostForm({create}) {
  const [post, setPost] = React.useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
        ...post,
        id: Date.now()
    }

    create(newPost);
    setPost({ title: '', body: ''});
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post name"></MyInput>
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"></MyInput>
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
}
