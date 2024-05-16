import React, { Component } from 'react';

interface State {
  count: number;
}

export default class Counter extends Component<{}, State> {
  timerID: ReturnType<typeof setInterval> | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.increaseCount(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  increaseCount = () => {
    this.setState((prevState) => ({
      count: (prevState.count + 1) % 11,
    }));
  };

  render() {
    return (
      <div>
        Bt10:
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
