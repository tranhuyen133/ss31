import React, { Component } from 'react';

interface State {
  time: string;
}

export default class Bt9 extends Component<{}, State> {
  timeID: ReturnType<typeof setInterval> | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    if (this.timeID) {
      clearInterval(this.timeID);
    }
  }

  updateTime() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div>
        Bt9:
        <br />
        <p>Thời gian hiện tại: {this.state.time}</p>
      </div>
    );
  }
}
