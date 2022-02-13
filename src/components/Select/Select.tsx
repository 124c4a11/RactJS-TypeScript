import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

import styles from './Select.module.scss';


export interface IOption {
  value: string;
  body: string;
}


export interface ISelect<T> extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  value: string;
  defaultOption: string;
  options: IOption[];
  onChangeOption: (sortOption: T) => void;
}


export function Select<T extends string>({
  value,
  defaultOption,
  options,
  onChangeOption,
  ...props
}: ISelect<T>): JSX.Element {
  return (
    <select
      value={value}
      onChange={(e) => onChangeOption(e.target.value as T)}
      className={styles['select']}
      {...props}
    >
      <option value="" disabled>{defaultOption}</option>
      {
        options.map(({ value, body }) => (
          <option key={value} value={value}>{body}</option>
        ))
      }
    </select>
  );
}
