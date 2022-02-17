import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import styles from './Navbar.module.scss';


export interface INavbar extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { }


export function Navbar(props: INavbar): JSX.Element {
  return (
    <ul className={styles['nav']} {...props}>
      <li className={styles['nav__item']}>
        <Link to="/posts" className={styles['nav__link']}>Posts</Link>
      </li>
      <li className={styles['nav__item']}>
        <Link to="/about" className={styles['nav__link']}>About</Link>
      </li>
    </ul>
  );
}
