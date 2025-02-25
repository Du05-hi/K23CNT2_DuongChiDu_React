import React, { Component } from 'react'
import DcdEventForm1 from './components/DcdEventForm1'
import DcdEventForm2 from './components/DcdEventForm2'
import DcdEventForm3 from './components/DcdEventForm3'
import DcdEventForm4 from './components/DcdEventForm4'
import DcdEventForm5 from './components/DcdEventForm5'

export default class DcdApp extends Component {

   // Hàm xử lý nhận dữ liệu từ form student
   dcdHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border  my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <DcdEventForm1/>
          <DcdEventForm2/>
          <DcdEventForm3/>
          <DcdEventForm4/>
          <DcdEventForm5 onDcdHandleSubmit={this.dcdHandleSubmitForm}/>

      </div>
    )
  }
}
