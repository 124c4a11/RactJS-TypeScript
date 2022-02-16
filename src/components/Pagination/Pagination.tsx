import { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from './Pagination.module.scss';
import { Button } from "..";


export interface IPagination extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  currentPage: number;
  pages: number[];
  changePage: (pageNumber: number) => void;
}


export function Pagination({ pages,
  changePage,
  currentPage,
  ...props
}: IPagination): JSX.Element {
  return (
    <ul className={styles['pagination']} {...props}>
      {
        pages.map((number) => (
          <li key={number} className={styles['pagination__item']}>
            <Button
              color={currentPage === number ? "primary" : "ghost"}
              onClick={() => changePage(number)}
            >{number}</Button>
          </li>
        ))
      }
    </ul>
  );
}
