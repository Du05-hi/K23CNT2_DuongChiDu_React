import React, { Component } from "react";
import  DcdStudent from "./DcdStudent";

class DcdStudentList extends Component {
    constructor(props){
        super(props);
     
    }
        // Hàm xử lý sự kiện xêm
    dcdHandleView = (dcdStudent)=>{
        // Chuyển dữ liệu lên TvcApp
        this.props.onDcdHandleView(dcdStudent);
    }


  render() {
    // lấy dữ liệu trong props từ DcdApp chuyển xuống
    let {renderDcdStudents} = this.props;
    console.log("List:",renderDcdStudents);
    
    // chuyển dữ liệu vào DcdStudent để hiển thị
    let dcdElementStudent = renderDcdStudents.map((dcdItem,index)=>{
        return <DcdStudent key={index} renderDcdStudent={dcdItem} onDcdHandleView={this.dcdHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {dcdElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DcdStudentList;