import React from 'react'

export default function DcdRenderList() {
    const dcdList = ["Duong Chi Du", "ReactJS","Fit-NTU"];

    const dcdElement = dcdList.map(item=>{
        return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
      <h2>Danh Sach</h2>
      <ul>
      {
        dcdList.map(item=>{
            return <li>{item}</li>
        })
      }
      </ul>
      <hr/>
      {dcdElement}
    </div>
  )
}
