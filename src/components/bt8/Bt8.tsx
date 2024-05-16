import React, { Component } from 'react';

interface State {
  value1: string;
}

export default class Bt8 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value1: '',
    };
  }

  inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({ value1: value });
  };

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (this.state.value1 !== prevState.value1) {
      document.title = this.state.value1;
    }
  }

  render() {
    return (
      <div>
            Bt8:
            <br />
        <input onChange={this.inputText} type="text" />
      </div>
    );
  }
}
