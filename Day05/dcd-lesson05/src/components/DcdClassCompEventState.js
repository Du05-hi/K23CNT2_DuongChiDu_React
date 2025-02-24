import React, { Component } from 'react'

export default class DcdClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state ={
            dcdFullName:"Duong Chi Du",
            dcdAge:20,
        }
    }

    // ham xu li su kien
    dcdEventHandleClick1 = () => {
        // lay du lieu trong state
        alert("FullName:" + this.state.dcdFullName + "\n Age:" + this.state.dcdAge);
    }
  render() {
    return (
      <div className='alert alert-danger'>
            <button className='btn btn-primary' onClick={this.dcdEventHandleClick1}>Button 1 - Du Lieu Trong State</button>
      </div>
    )
  }
}
