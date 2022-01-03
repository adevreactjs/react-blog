import React from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import { MyModal } from './components/UI/MyModal/MyModal';

function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: 'BJavaScript 1', body: 'DDiscription' },
    { id: 2, title: 'AJavaScript 2', body: 'BDiscription' },
    { id: 3, title: 'CJavaScript 3', body: 'ADiscription' },
    { id: 4, title: 'DJavaScript 4', body: 'CDiscription' },
    { id: 5, title: 'EJavaScript 5', body: 'EDiscription' },
  ]);

  const [filter, setFilter] = React.useState({ sort: '', query: '' });
  const [modal, setModal] = React.useState(false)

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedPost = React.useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter, posts]);

  const sortedAndSearchPost = React.useMemo(() => {
    return sortedPost.filter((post) => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPost]);

  return (
    <div className="App">
      <MyButton style={{marginTop: '15px', marginBottom: '15px'}} onClick={() => setModal(true)}>Создать пользователя</MyButton>
      <MyModal visible={modal} setVisible ={setModal}>
        <PostForm create={createNewPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />

      {sortedAndSearchPost.length !== 0 ? (
        <PostList removePost={removePost} post={sortedAndSearchPost} title={'Post list'} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
