import React from 'react'

export default function DcdFuncComp1(props) {
  return (
    <div>
            <h2>props is object</h2>
            <p><b>info:</b></p>
            <p>fullname:{props.renderInfo.fullName}</p>
            <p>age:{props.renderInfo.age}</p>
            <p>phone:{props.renderInfo.phone}</p>
    </div>
  )
}
