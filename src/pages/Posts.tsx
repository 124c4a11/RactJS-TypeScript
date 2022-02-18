import { useEffect, useRef, useState } from 'react';
import { PostService } from '../API/post.service';

import {
  PostForm,
  List,
  Post,
  IFilter,
  PostFilter,
  Modal,
  Button,
  Pagination,
} from '../components';
import { useFetching, usePagination, usePosts } from '../hooks';
import { useObserver } from '../hooks/useObserver';

import { IPost } from '../interfaces/post.interface';
import { getPageCount } from '../utils/pages';


export function Posts(): JSX.Element {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [filter, setFilter] = useState<IFilter>({ sortOption: "", searchQuery: "" });
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const lastElement = useRef<HTMLDivElement>(null);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const { data, headers } = await PostService.getAll(limit, page);

    setPosts([...posts, ...data]);

    const totalCount = Number(headers['x-total-count']);

    setTotalPages(getPageCount(totalCount, limit));
  });

  const searchedAndSortedPosts = usePosts(posts, filter.sortOption, filter.searchQuery);

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const pagesArr = usePagination(totalPages);

  const createPost = (newPost: IPost): void => {
    setPosts([...posts, newPost]);
    setIsModalVisible(false);
  };

  const removePost = (id: number): void => {
    const filteredPosts = posts.filter((item) => item.id !== id);

    setPosts(filteredPosts);
  };

  const changePage = (pageNumber: number): void => {
    setPage(pageNumber);
  }

  return (
    <>
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
        postError &&
        <h2>{`Error: ${postError}`}</h2>
      }

      {
        isPostsLoading &&
        <h2>Loading...</h2>
      }

      {
        searchedAndSortedPosts.length
          ?
          <List
            items={searchedAndSortedPosts}
            renderItem={(item: IPost, ndx, className) => (
              <Post
                ndx={item.id}
                key={item.id}
                post={item}
                className={className}
                remove={removePost}
                as="li"
              />
            )}
          />
          :
          <h2 style={{ textAlign: "center" }}>Post List is empty</h2>
      }

      {
        pagesArr.length &&
        <Pagination
          currentPage={page}
          pages={pagesArr}
          changePage={changePage}
        />
      }

      <div ref={lastElement} style={{ height: "20px", backgroundColor: "red" }}></div>
    </ >
  );
}
