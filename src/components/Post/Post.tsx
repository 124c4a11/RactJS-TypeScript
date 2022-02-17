import cn from 'classnames';
import { ComponentProps, ElementType } from 'react';

import styles from './Post.module.scss';
import { IPost } from '../../interfaces/post.interface';
import { Button } from '..';
import { useNavigate } from 'react-router-dom';

type PostOwnProps<T extends ElementType> = {
  post: IPost;
  ndx?: number;
  remove: (id: number) => void;
  as?: T;
}

type PostProps<T extends ElementType> = PostOwnProps<T>
  & Omit<ComponentProps<T>, keyof PostOwnProps<T>>;

export function Post<T extends ElementType = 'div'>({
  post,
  as,
  className,
  ndx,
  remove,
  ...props
}: PostProps<T>): JSX.Element {
  const Component = as || 'div';
  const navigate = useNavigate();

  return (
    <Component className={cn(className, styles['post'])} {...props}>
      <div>
        <h2 className={styles['post__title']}>{`${ndx}. ${post.title}`}</h2>
        <p>{post.body}</p>
      </div>
      <div>
        <Button
          className={styles['post__btn']}
          onClick={() => navigate(`/posts/${post.id}`)}
        >More...</Button>
        <Button
          color="ghost"
          className={styles['post__btn']}
          onClick={() => remove(post.id)}
        >Delete</Button>
      </div>
    </Component>
  );
}
