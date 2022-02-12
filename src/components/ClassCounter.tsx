import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICounter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export interface ICounterState { readonly count: number }

export class ClassCounter extends React.Component<ICounter, ICounterState> {
  constructor(props: ICounter) {
    super(props);
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>increment</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>decrement</button>
      </div >
    );
  }
}
