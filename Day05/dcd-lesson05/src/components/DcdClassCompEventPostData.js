import React, { Component } from 'react'

export default class DcdClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }

    // ham xu li su kien
    dcdEventHandleClick = () =>{
        // chuyen du lieu len app thonng qua props
        this.props.onDcdDataToApp("Du lieu tu Component con - DcdClassCompEventPostData");
    }
  render() {
    return (
      <div className='alert alert-success'>
            <button className='btn btn-primary'
            onClick={this.dcdEventHandleClick}>
                Button 1 - Chuyen Du Lieu Len App</button>
      </div>
    )
  }
}
