import { useMemo, useState } from 'react';

import './App.css';
import {
  PostForm,
  List,
  Post,
  IFilter,
  PostFilter,
  Modal,
  Button,
} from './components';

import { IPost } from './interfaces/post.interface';


function App(): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: 'bbb', description: 'aaa', },
    { id: 2, title: 'aaa', description: 'bbb', },
  ]);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [filter, setFilter] = useState<IFilter>({ sortOption: "", searchQuery: "" });

  const sortedPosts = useMemo(() => {
    console.log('getSortedPosts');
    const sortOption = filter.sortOption

    if (!sortOption) return posts;

    return [...posts].sort((a, b) => a[sortOption].localeCompare(b[sortOption]));
  }, [posts, filter.sortOption]);

  const searchedAndSortedPosts = useMemo(() => {
    if (!filter.searchQuery) return sortedPosts;

    return sortedPosts.filter((item) => item.title.toLowerCase().includes(filter.searchQuery));
  }, [sortedPosts, filter.searchQuery]);

  const createPost = (newPost: IPost): void => {
    setPosts([...posts, newPost]);
    setIsModalVisible(false);
  };

  const removePost = (id: number): void => {
    const filteredPosts = posts.filter((item) => item.id !== id);

    setPosts(filteredPosts);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: 0 }}>Post List</h1>

      <Button
        onClick={() => setIsModalVisible(true)}
      >Create Post</Button>

      <Modal
        visible={isModalVisible}
        setIsVisible={setIsModalVisible}
      >
        <PostForm create={createPost} />
      </Modal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <hr style={{ margin: '15px 0' }} />

      {
        searchedAndSortedPosts.length ?
          <List
            items={searchedAndSortedPosts}
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
