import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IPost } from '../../interfaces/post.interface';
import { Post } from '../Post/Post';
import './PostList.css';

interface IPostListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  posts: IPost[]
}

export function PostList({ posts, ...props }: IPostListProps): JSX.Element {
  return (
    <ul className='post-list'>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          className="post-list__item"
          as="li"
        />
      ))}
    </ul>
  );
}
