import React from 'react'

export default function DcdFuncComp(props) {
  return (
    <div>
      <h2>demo: function component props</h2>
      <p>lay du lieu tu props de hien thi</p>
      <p>name: {props.name}</p>
      <p>address: {props.address}</p>
      <p>company: {props.company}</p>
      <p>note: {props.note}</p>
    </div>
  )
}