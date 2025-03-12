import React, { useState } from 'react'
 
 export default function DcdUseState() {
     // khởi tạo state 
     const [dcdCount, setDcdCount] = useState(0);
 
     // khởi tạo state là một mảng 
     const dcdArr = [10,12,20,22];
     const [dcdArray, setDcdArray] = useState(dcdArr);
 
     // khởi tạo state với mảng object
     const dcdStudents = [
         {dcdId:"SV001",dcdName:"Chi Du", dcdAge:20},
         {dcdId:"SV002",dcdName:"Le Nhu Quynh", dcdAge:19},
     ];
     const [dcdStudentList, setDcdStudentList] = useState(dcdStudents);
 
     // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
     const dcdHandleAddList=()=>{
         setDcdArray([
             ...dcdArray,
             parseInt(Math.random()*100),
         ])
     }
 
     // Hàm xử lý sự kiện thêm mới sinh viên
     const dcdHandleAddNewStudent = ()=>{
         let dcdStudent = {
             dcdId:"SV003",
             dcdName:"Nguyễn Quang B",
             dcdAge:22
         };
         // Thêm vào state dcdStudentList
         setDcdStudentList([
             ...dcdStudentList,
             dcdStudent
         ])
 
         console.log("List: ", dcdStudentList);
         
     }
   return (
     <div className='alert alert-danger '>
         <h2>useState Demo</h2>
         <div>
             <h3>Count: {dcdCount}</h3>
             <button onClick={()=>setDcdCount(dcdCount+1)}>Tăng + </button>
             <button onClick={()=>setDcdCount(dcdCount-1)}>Giảm - </button>
         </div>
         <div>
             <h3>Array: {dcdArray.toString()}</h3>
             <button onClick={dcdHandleAddList}>Thêm phần từ</button>
         </div>
         <div>
             <h3>Danh sách sinh viên</h3>
             <table className='table table-bordered'>
                 <thead>
                     <tr>
                         <th>ID</th>
                         <th>Nam</th>
                         <th>Age</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         dcdStudentList.map((dcdStudent,index)=>{
                             return <>
                                 <tr>
                                     <td>{dcdStudent.dcdId}</td>
                                     <td>{dcdStudent.dcdName}</td>
                                     <td>{dcdStudent.dcdAge}</td>
                                 </tr>
                             </>
                         })
                     }
                 </tbody>
                 <tfoot>
                     <button onClick={dcdHandleAddNewStudent}>Thêm mới sinh viên</button>
                 </tfoot>
             </table>
         </div>
     </div>
   )
}