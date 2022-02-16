import { useEffect, useState } from 'react';
import { PostService } from './API/post.service';

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
import { usePosts } from './hooks/usePosts';

import { IPost } from './interfaces/post.interface';


function App(): JSX.Element {
  const [isPostsLoading, setIsPostLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [filter, setFilter] = useState<IFilter>({ sortOption: "", searchQuery: "" });

  const searchedAndSortedPosts = usePosts(posts, filter.sortOption, filter.searchQuery);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts(): Promise<void> {
    setIsPostLoading(true);

    const posts = await PostService.getAll();

    setPosts(posts);
    setIsPostLoading(false);
  }

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
      <h1 style={{ textAlign: "center", marginTop: 0 }}>Post List</h1>

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
        isPostsLoading ?
          <h2>Loading...</h2>
          :
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


    </div >
  );
}

export default App;
