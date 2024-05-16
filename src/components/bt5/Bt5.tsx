import React, { Component } from 'react'
interface State{
  value:string
}
export default class Bt5 extends Component<{}, State> {
  constructor(props:{}) {
    super(props);
    this.state = {
      value:"open the form"
    }
  }
  click = () => {
    this.setState({
      value:"close the form"
    })
  }
  render() {
    return (
      <div>Bt5:
        <h2>Stutus: "{this.state.value}"</h2>
        <button onClick={this.click}>change props</button>
      </div>
    )
  }
}
