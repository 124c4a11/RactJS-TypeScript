import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import './List.css';

interface IListProps<T> extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  items: T[];
  renderItem: (item: T) => ReactElement;
}

export function List<T>({ items, renderItem, ...props }: IListProps<T>): JSX.Element {
  return (
    <ul className='post-list' {...props}>
      {items.map(renderItem)}
    </ul>
  );
}
