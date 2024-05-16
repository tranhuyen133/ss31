import React, { Component } from 'react'
interface State{
    name: string
}
export default class Bt3 extends Component<any ,State> {
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
  render() {
    return (
        <div>Bt3:
            <p>company: { this.state.name}</p>
            <button onClick={this.click}>change state</button>
      </div>
    )
  }
}
