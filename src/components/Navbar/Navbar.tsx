import { DetailedHTMLProps, HTMLAttributes, useContext } from "react";

import styles from './Navbar.module.scss';
import { Link } from "react-router-dom";
import { Button } from "..";
import { AuthContext } from "../../context";


export interface INavbar extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { }


export function Navbar(props: INavbar): JSX.Element {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <ul className={styles['nav']} {...props}>
      <li className={styles['nav__item']}>
        <Link to="/posts" className={styles['nav__link']}>Posts</Link>
      </li>
      <li className={styles['nav__item']}>
        <Link to="/about" className={styles['nav__link']}>About</Link>
      </li>
      {
        isAuth &&
        <li className={styles['nav__item']}>
          <Button onClick={logout}>Logout</Button>
        </li>
      }
    </ul>
  );
}
