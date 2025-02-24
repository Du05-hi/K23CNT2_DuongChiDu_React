import React from 'react'

export default function DcdFuncCompEvent1() {
    // ham xu li su kien
    const DcdEventButton1Click = ()=>{
        alert("button 1 - Clicked ");
    }

    const DcdEventButton2Click = ()=>{
        alert("button 2 - Clicked ");
    }
    const DcdEventButton3Click = (name)=>{
        alert("Name:" + name)
    }
  return (
    <div className="alert alert-info">
        {/* <button className='btn btn-primary' onClick={DcdEventButton1Click}>
            Button 1</button> */}
        <button className='btn btn-primary mx-1' onClick={DcdEventButton2Click}>
            Button 2</button>
        {/* <button className='btn btn-success' onClick={DcdEventButton3Click("duong chi du")}>
            Button 3</button> */}
        <button className='btn btn-success mx-1' onClick={()=>DcdEventButton3Click("duong  du")}>
            Button 4</button>
    </div>
  )
}
