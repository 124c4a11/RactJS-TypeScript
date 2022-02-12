import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

export interface ICounter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export function Counter(props: ICounter): JSX.Element {
  let [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(++count)}>increment</button>
      <button onClick={() => setCount(--count)}>decrement</button>
    </div>
  );
};
