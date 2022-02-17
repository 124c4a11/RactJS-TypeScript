import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { IComment } from '../../interfaces/comment.interface';
import styles from './CommentList.module.scss';


interface ICommentList extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  comments: IComment[];
}


export function CommentList({ comments,
  className,
  ...props
}: ICommentList): JSX.Element {
  return (
    <ul
      className={cn(styles['list'], className)}
      {...props}
    >
      {
        comments.map(({ id, email, body }) => (
          <li key={id} className={styles['list__item']}>
            <h3>{email}</h3>
            <p>{body}</p>
          </li>
        ))
      }
    </ul>
  );
}
