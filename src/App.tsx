import { useState } from 'react';

import './App.css';
import { List } from './components/List/List';
import { Post } from './components/Post/Post';
import { PostForm } from './components/PostForm/PostForm';
import { IPost } from './interfaces/post.interface';

function App(): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: 'title', description: 'description', },
    { id: 2, title: 'title', description: 'description', },
  ]);

  const createPost = (newPost: IPost): void => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: 0 }}>Список постов</h1>

      <PostForm create={createPost} />

      <List
        items={posts}
        renderItem={(item: IPost, ndx, className) => (
          <Post
            ndx={ndx}
            key={item.id}
            post={item}
            className={className}
            as="li"
          />
        )}
      />
    </div>
  );
}

export default App;
