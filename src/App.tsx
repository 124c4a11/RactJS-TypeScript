import { useState } from 'react';

import './App.css';
import {
  PostForm,
  Select,
  List,
  Post
} from './components';

import { IPost } from './interfaces/post.interface';


type SortOptionType = 'title' | 'description'


function App(): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: 'bbb', description: 'aaa', },
    { id: 2, title: 'aaa', description: 'bbb', },
  ]);

  const [sortOption, setSortOption] = useState<SortOptionType | ''>('');

  const createPost = (newPost: IPost): void => {
    setPosts([...posts, newPost]);
  };

  const removePost = (id: number): void => {
    const filteredPosts = posts.filter((item) => item.id !== id);

    setPosts(filteredPosts);
  };

  const sortPosts = (sortOption: SortOptionType): void => {
    setSortOption(sortOption);

    setPosts([...posts].sort((a, b) => a[sortOption].localeCompare(b[sortOption])));
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: 0 }}>Post List</h1>
      <PostForm create={createPost} />

      <hr style={{ margin: '15px 0' }} />

      <Select<SortOptionType>
        value={sortOption}
        defaultOption="Sort"
        options={[
          { value: 'title', body: "By title" },
          { value: 'description', body: 'By description' }
        ]}
        onChangeOption={sortPosts}
      />

      <hr style={{ margin: '15px 0' }} />

      {
        posts.length ?
          <List
            items={posts}
            renderItem={(item: IPost, ndx, className) => (
              <Post
                ndx={ndx}
                key={item.id}
                post={item}
                className={className}
                remove={removePost}
                as="li"
              />
            )}
          />
          :
          <h2 style={{ textAlign: 'center' }}>Post List is empty</h2>
      }
    </div>
  );
}

export default App;
