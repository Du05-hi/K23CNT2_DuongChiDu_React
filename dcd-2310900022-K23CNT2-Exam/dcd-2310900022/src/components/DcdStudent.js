import React, { Component } from "react";

class DcdStudent extends Component {
    constructor(props){
        super(props);   
    }

    // Hàm xử lý chức năng xem
    dcdHandleView = (dcdStudent)=>{
        // Chuyển lên DcdStudentList
        this.props.onDcdHandleView(dcdStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ DcdStudentList
    let {renderDcdStudent, key} = this.props;
    console.log("Student:",renderDcdStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderDcdStudent.dcdID}</td>
          <td>{renderDcdStudent.dcdFullName}</td>
          <td>{renderDcdStudent.dcdUserName}</td>
          <td>{renderDcdStudent.dcdPassWord}</td>
          <td>
          <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.dcdHandleView(renderDcdStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}


export default DcdStudent;