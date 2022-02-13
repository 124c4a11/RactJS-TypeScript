import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';
import './List.css';

interface IListProps<T> extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  items: T[];
  renderItem: (item: T, ndx: number, className?: string) => ReactElement;
}

export function List<T>({ items, renderItem, ...props }: IListProps<T>): JSX.Element {
  return (
    <ul className='list' {...props}>
      {items.map((item, ndx) => renderItem(item, ndx + 1, 'list__item'))}
    </ul>
  );
}
