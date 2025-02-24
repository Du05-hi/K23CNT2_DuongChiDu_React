import React, { Component } from 'react'

export default class DcdClassCompEventProps extends Component {

    // ham xu li su kien
    dcdEventHandleClick1 = () =>{
        alert("Hiii........." + this.props.dcdRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-danger'>
            <button className='btn btn-primary' onClick={this.dcdEventHandleClick1}>Button 1</button>
      </div>
    )
  }
}
