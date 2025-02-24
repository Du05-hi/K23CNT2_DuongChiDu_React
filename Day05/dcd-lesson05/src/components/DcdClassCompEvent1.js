import React, { Component } from 'react'

export default class DcdClassCompEvent1 extends Component {
    // ham xu li su kien
    dcdEventHandleClick1 = () =>{
        alert("Button 1 clicked");
    }

    dcdEventHandleClick2 = (name) =>{
        alert("Button 2 clicked; name="+name);
    }

  render() {
    return (
      <div className="alert alert-danger">
        <button className='btn btn-primary mx-1' onClick={this.dcdEventHandleClick1}>Button1</button>
        <button className='btn btn-success mx-1'
         onClick={()=>this.dcdEventHandleClick2("du duong")}>Button2</button>
      </div>
    );
  }
}
