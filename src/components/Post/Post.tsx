import cn from 'classnames';
import { ComponentProps, ElementType } from 'react';
import { IPost } from '../../interfaces/post.interface';
import './Post.css'

type PostOwnProps<T extends ElementType> = {
  post: IPost;
  as?: T
}

type PostProps<T extends ElementType> = PostOwnProps<T>
  & Omit<ComponentProps<T>, keyof PostOwnProps<T>>;

export function Post<T extends ElementType = 'div'>({ post, as, className, ...props }: PostProps<T>): JSX.Element {

  const Component = as || 'div';

  return (
    <Component className={cn(className, 'post')} {...props}>
      <div>
        <h2 className="post__title">{`${post.id}. ${post.title}`}</h2>
        <p>{post.description}</p>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </Component>
  );
}