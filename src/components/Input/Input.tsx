import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

import styles from './Input.module.scss';

export interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder?: string;
}

export const Input = forwardRef((
  props: IInput,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <input className={styles["input"]} ref={ref} {...props} />
));
