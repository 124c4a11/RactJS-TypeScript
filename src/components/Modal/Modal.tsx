import cn from "classnames";
import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction
} from "react";

import styles from './Modal.module.scss';


export interface IModal extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  visible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}


export function Modal({
  children,
  visible,
  setIsVisible,
  ...props
}: IModal): JSX.Element {
  return (
    <div
      className={cn(
        styles['modal'],
        {
          [styles['modal_visible']]: visible === true
        }
      )}
      onClick={() => setIsVisible(false)}
      {...props}
    >
      <div
        className={styles["modal__content"]}
        onClick={(e) => e.stopPropagation()}
      >{children}</div>
    </div>
  );
}
