import React, { Component } from "react";
import DcdControl from "./components/DcdControl";
import DcdStudentList from "./components/DcdStudentList";
import DcdForm from "./components/DcdForm";

class DcdApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      dcdStudents:[
        {dcdId:"SV001",dcdStudentName:"Duong Chi Du",dcdAge:20,dcdGender:"Nam",dcdBirthday:"30/07/2005",dcdBirthPlace:"VP", dcdAddress:"6B Ngõ 83B Tân Triều Thanh Trì Hà NNội"},
        {dcdId:"SV002",dcdStudentName:"Le Nhu Quynh",dcdAge:19,dcdGender:"Nữ",dcdBirthday:"11/12/2006",dcdBirthPlace:"TB", dcdAddress:"Lương Ngọc Quyến"},
        {dcdId:"SV003",dcdStudentName:"Tần Thủy Hoàng",dcdAge:24,dcdGender:"Nam",dcdBirthday:"25/05/2002",dcdBirthPlace:"DN", dcdAddress:"Trung Quốc"},
        {dcdId:"SV004",dcdStudentName:"Hoàng Thuỳ Linh",dcdAge:23,dcdGender:"Nữ",dcdBirthday:"25/05/2001",dcdBirthPlace:"QN", dcdAddress:"Hồ chí minh"},
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
          Duong Chi Du - K23CNT2 - Mini Project1
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

            <div className="col-5 grid-margin">
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