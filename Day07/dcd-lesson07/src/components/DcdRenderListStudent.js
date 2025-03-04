import React, { Component } from 'react'

export default class DcdRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dcdStudent:[
                {dcdId:"NTU01",dcdName:"Duong Chi Du",dcdAge:20, dcdClass:"K23CNT2"},
                {dcdId:"NTU01",dcdName:"Duong Chi A",dcdAge:21, dcdClass:"K23CNT2"},
                {dcdId:"NTU01",dcdName:"Duong Chi B",dcdAge:22, dcdClass:"K23CNT2"},
                {dcdId:"NTU01",dcdName:"Duong Chi C",dcdAge:23, dcdClass:"K23CNT2"},
                {dcdId:"NTU01",dcdName:"Duong Chi D",dcdAge:24, dcdClass:"K23CNT2"},
            ],
        }
    }
  render() {
    let dcdElement = this.state.dcdStudent.map((dcdItem,index) =>{
    return (
        <tr>
        <td>{index+1}</td>
        <td>{dcdItem.dcdId}</td>
        <td>{dcdItem.dcdName}</td>
        <td>{dcdItem.dcdAge}</td>
        <td>{dcdItem.dcdClass}</td>
        <td>
            <button>Sua</button>
            <button>Xoa</button>
        </td>
    </tr>
    )
    })
    return(
      <div className='alert alert-info'>
        <h2>Danh Sach Sinh Vien</h2>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>dcdId</th>
                    <th>dcdName</th>
                    <th>dcdAge</th>
                    <th>dcdClass</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {dcdElement}
            </tbody>
        </table>
      </div>
    )
  }
}
