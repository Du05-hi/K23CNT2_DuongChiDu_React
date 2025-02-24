import React from 'react'

export default function DcdFuncCompEventProps(props) {
    // ham xu li su kien
    const dcdHandleButtonClick1 = ()=>{
        alert("Du lieu tu props:"+props.dcdRenderName);
        console.log("xin chao:",props.dcdRenderName);
    }
    const dcdHandleButtonClick2 = (param)=>{
        // lay du lieu tu props
        alert("Du lieu tu props (Button 2 Click):"+props.dcdRenderName);
        // lay du lieu tu tham so
        console.log('========================');
        console.log("hi:",param);
        console.log('========================');
        
    }
    
  return (
    <div className="alert alert-info">
            <button className='btn btn-primary mx-1'
            onClick={dcdHandleButtonClick1}>Button1</button>

            <button className='btn btn-success mx-1'
            onClick={()=>dcdHandleButtonClick2("Button2")}>Button2</button>
    </div>
  )
}
