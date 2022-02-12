import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import styles from './Button.module.scss';

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, className, ...props }: IButton) {
  return (
    <button
      className={cn(styles['btn'], className)}
      {...props}
    >{children}</button>
  );
}
