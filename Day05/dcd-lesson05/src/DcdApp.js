import React, { Component } from 'react'
import DcdFuncCompEvent1 from './components/DcdFuncCompEvent1';
import DcdClassCompEvent1 from './components/DcdClassCompEvent1';
import DcdFuncCompEventProps from './components/DcdFuncCompEventProps';
import DcdClassCompEventProps from './components/DcdClassCompEventProps';
import DcdClassCompEventState from './components/DcdClassCompEventState';
import DcdClassCompEventPostData from './components/DcdClassCompEventPostData';

class DcdApp extends Component {
  constructor(props){
    super(props);
    this.state ={
      dcdNoiDung:"Chua Co Gi Ca Dau Nhe",
    }
  }
  // ham xu lin su kien khi component con chuyen su lieu len
  dcdHandleDataToApp =(content) =>{
      alert(content);
      this.setState({dcdNoiDung:content});
  }
  render() {
    return (
      <div className='container border mt-3'>
          <h1 className='text-center alert alert-info my-2'>K23CNT2 - Duong Chi Du - Event and Form </h1>
          <hr/>
          <div>
            <h2>Function Component - Event</h2>
          <DcdFuncCompEvent1/>
          </div>
          <hr/>
          <div>
            <h2>Class Component - Event</h2>
            <DcdClassCompEvent1/>
          </div>
          <hr/>
          <div>
            <h2>Function Component - Event ; props</h2>
              <DcdFuncCompEventProps dcdRenderName="duong chi du"/>
          </div>
          <hr/>
          <div>
            <h2>Class Component - Event ; props</h2>
            <DcdClassCompEventProps dcdRenderTitle = "Welcome to Du Du"/>
          </div>
          <hr/>
          <div>
            <h2>Class Component - Event ; state</h2>
            <DcdClassCompEventState/>
          </div>
          <div>
            <h1>{this.state.dcdNoiDung}</h1>
            <h2>Class Component - Event ; Post Data to App</h2>
            <DcdClassCompEventPostData onDcdDataToApp={this.dcdHandleDataToApp}/>
          </div>
      </div>
    )
  }
}
export default DcdApp;
