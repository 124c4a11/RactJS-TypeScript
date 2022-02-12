import { useState } from 'react';

import './App.css';
import { List } from './components/List/List';
import { Post } from './components/Post/Post';
import { IPost } from './interfaces/post.interface';

function App(): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: 'title', description: 'description', },
    { id: 2, title: 'title', description: 'description', },
    { id: 3, title: 'title', description: 'description', },
    { id: 4, title: 'title', description: 'description', },
  ]);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Список постов</h1>
      <List
        items={posts}
        renderItem={(item: IPost) => (
          <Post
            key={item.id}
            post={item}
            className="list__item"
            as="li"
          />
        )}
      />
    </div>
  );
}

export default App;
