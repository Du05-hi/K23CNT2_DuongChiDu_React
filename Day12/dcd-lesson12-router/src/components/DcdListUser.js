import React from 'react'
 
 export default function DcdListUser({renderDcdUsers}) {
 
     const dcdElements = renderDcdUsers.map((dcdItem, index)=>{
         return (
             <>
                 <tr key={index}> 
                     <td>{index+1}</td>
                     <td>{dcdItem.id}</td>
                     <td>{dcdItem.dcdFullName}</td>
                     <td>{dcdItem.dcdUserName}</td>
                     <td>{dcdItem.dcdPass}</td>
                 </tr>
             </>)
     })
   return (
     <div>
         <h2>Danh sách tài khoản</h2>
         <table className='table table-bordered'>
             <thead>
                 <tr>
                     <th>#</th>
                     <th>ID</th>
                     <th>FullName</th>
                     <th>UserName</th>
                     <th>Password</th>
                 </tr>
             </thead>
             <tbody>
                 {dcdElements}
             </tbody>
         </table>
     </div>
   )
 }