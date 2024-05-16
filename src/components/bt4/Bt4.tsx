import React, { Component } from 'react'
interface State{
    name: string
}
export default class Bt4 extends Component<any ,State> {
    constructor(props:State) {
        super(props);
        this.state = {
            name: "Rikkei Academy"
        }
    }
    click = () => {
        this.setState({
            name: "RikkeiSoft"
        })

    }
    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<State>, nextContext: any): boolean {
        return false
    }
  render() {
    return (
        <div>Bt4:
            <p>company: { this.state.name}</p>
            <button onClick={this.click}>change state</button>
      </div>
    )
  }
}
