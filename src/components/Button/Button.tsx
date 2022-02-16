import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import styles from './Button.module.scss';


export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  color?: 'primary' | 'ghost'
}


export function Button({ children, className, color = 'primary', ...props }: IButton) {
  return (
    <button
      className={cn(
        styles['btn'],
        className,
        {
          [styles['btn_primary']]: color === 'primary',
          [styles['btn_ghost']]: color === 'ghost'
        }
      )}
      {...props}
    >{children}</button>
  );
}
