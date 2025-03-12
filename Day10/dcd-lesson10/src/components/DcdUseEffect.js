import React, { useEffect, useState } from 'react'
 
 export default function DcdUseEffect() {
     // state
     const [dcdCount, setDcdCount] = useState(0);
 
     // useEffect sử dụng 1 tham số: Được thực hiện mỗi khi render / re-render
     useEffect(()=>{
         console.log("Đây là useEffect một tham số");
     });
 
     // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng rỗng => Được gọi duy nhất một lần khi render
     useEffect(()=>{
         console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng []");
     },[]);
 
 
     // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng các đối số phụ thuộc
     //  => Được gọi mỗi khi đối số thay đổi
     // khởi tạo state là một mảng 
     const dcdArr = [10,12,20,22];
     const [dcdArray, setDcdArray] = useState(dcdArr);
     useEffect(()=>{
         console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng đối số phụ thuộc [dcdArray]");
     },[dcdArray]);
 
     useEffect(()=>{
         console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng [dcdCount]");
     },[dcdCount]);
     // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
     const dcdHandleAddList=()=>{
         setDcdArray([
             ...dcdArray,
             parseInt(Math.random()*100),
         ])
     }
   return (
     <div className='alert alert-info'>
         <h2>Demo useEffect</h2>
         <h3>Count: {dcdCount}</h3>
         <button onClick={()=>setDcdCount(dcdCount+1)}>Click here</button>
 
         <div>
             <h3>Array: {dcdArray.toString()}</h3>
             <button onClick={dcdHandleAddList}>Thêm </button>
         </div>
     </div>
   )
 }