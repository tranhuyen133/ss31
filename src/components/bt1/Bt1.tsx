import React, { Component } from 'react'
interface Props{
    userName:string
}
export default class Bt1 extends Component<{},Props> {
    constructor(prop:Props) {
        super(prop);
        this.state = {
            userName: "Thiều"
        }
    }
  render() {
    return (
        <div>Bt1:
            <p>Chào { this.state.userName}</p>
      </div>
    )
  }
}
