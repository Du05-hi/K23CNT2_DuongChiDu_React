import React, { Component } from "react";
import DcdControl from "./components/DcdControl";
import DcdStudentList from "./components/DcdStudentList";
import DcdForm from "./components/DcdForm";

class DcdApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      dcdStudents:[
        {dcdID:"SV001",dcdFullName:"Duong Chi Du",dcdUserName:"Du",dcdPassWord:"300705"},
        {dcdID:"SV002",dcdFullName:"Le Nhu Quynh",dcdUserName:"Quynh",dcdPassWord:"11111"},
        {dcdID:"SV003",dcdFullName:"Hoàng Thuỳ Linh",dcdUserName:"Linh",dcdPassWord:"12345"},
      ],
      dcdStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  dcdHandleView = (dcdStudent)=>{
    this.setState({
      dcdStudent:dcdStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.dcdStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Duong Chi Du - K23CNT2 - 2310900022 - Exam
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <DcdControl  />
                {/* danh sách sinh vien  */}
                <DcdStudentList  renderDcdStudents={this.state.dcdStudents} onDcdHandleView={this.dcdHandleView}/>
              </div>
            </div>

            <div className="col-3 grid-margin">
              {/* form  */}
              <DcdForm  renderDcdStudent = {this.state.dcdStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default DcdApp;