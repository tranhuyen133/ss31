import React, { Component } from 'react'
interface State{
  value:string
}
export default class Bt6 extends Component<{}, State> {
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
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<State>, nextContext: any): boolean {
        return  false
    }
  render() {
    return (
        <div>Bt6:
            <h2>Messager: "{this.state.value}"</h2>
            <button onClick={this.click}>change props</button>
      </div>
    )
  }
}
