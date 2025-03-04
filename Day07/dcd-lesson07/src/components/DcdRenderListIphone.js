import React, { Component } from 'react'

export default class DcdRenderListIphone extends Component {
    constructor(props){
        super(props);
        this.state = {
            dcdIphone:[
                {dcdproductId:"P001",dcdproductName:"Iphone 11",dcdQuantity:15, dcdPrice:1000},
                {dcdproductId:"P002",dcdproductName:"Iphone 12",dcdQuantity:20,dcdPrice:1250},
                {dcdproductId:"P003",dcdproductName:"Iphone 13",dcdQuantity:10,dcdPrice:1500},
                {dcdproductId:"P004",dcdproductName:"Iphone 14",dcdQuantity:15,dcdPrice:2000},
            ],
        }
    }
  render() {
    let dcdElement = this.state.dcdIphone.map((dcdItem,index) =>{
    return (
        <tr>
        <td>{index+1}</td>
        <td>{dcdItem.dcdproductId}</td>
        <td>{dcdItem.dcdproductName}</td>
        <td>{dcdItem.dcdQuantity}</td>
        <td>{dcdItem.dcdPrice}</td>
        <td>
            <button>Sua</button>
            <button>Xoa</button>
        </td>
    </tr>
    )
    })
    return(
      <div className='alert alert-info'>
        <h2>Danh Sach Dien Thoai</h2>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>dcdproductId</th>
                    <th>dcdproductName</th>
                    <th>dcdQuantity</th>
                    <th>dcdPrice</th>
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
