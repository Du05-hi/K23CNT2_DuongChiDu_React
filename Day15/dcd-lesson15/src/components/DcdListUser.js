import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 import { useNavigate } from 'react-router-dom'
 
 export default function DcdListUser() {
     // state
     const [dcdListUser, setDcdListUser] = useState([])
     const dcdApi = "https://67e0d0ac58cc6bf78522fde4.mockapi.io/dcd-k23cnt2-2310900022/dcd_users"
 
     useEffect(()=>{
         axios.get(dcdApi)
         .then(dcd_response => {
             // Xử lý dữ liệu trả về từ API
             console.log(dcd_response.data); // Dữ liệu từ API
             setDcdListUser(dcd_response.data)
         })
         .catch(error => {
             // Xử lý lỗi
             console.error('Có lỗi xảy ra:', error);
         });
     },[])
    
     
 
     const dcdHandleDelete = async (dcdId)=>{
         if(window.confirm('Bạn có muốn xóa không?')){
             await axios.delete(dcdApi+"/"+dcdId);
 
             let dcdListUserDelete = dcdListUser.filter(x=>x.id !=dcdId);
             setDcdListUser(dcdListUserDelete);
         }
     }
     const navigate = useNavigate();
     const dcdHandleUpdate = (dcdId) =>{
         navigate(`/dcd-edit-user/${dcdId}`);
     }
   return (
     <div>
         <h2>Danh sách user</h2>
         <table className='table table-bordered'>
             <thead>
                 <tr>
                     <th>User Id</th>
                     <th>FullName</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Active</th>
                     <th>Action</th>
                 </tr>
             </thead>
             <tbody>
                 {/* // hiển thị danh sách user */}
                 {
                     dcdListUser.map((dcdUserItem,index)=>{
                         return (
                             <tr>
                                 <td>{dcdUserItem.id}</td>
                                 <td>{dcdUserItem.dcd_name}</td>
                                 <td>{dcdUserItem.dcd_email}</td>
                                 <td>{dcdUserItem.dcd_phone}</td>
                                 <td>
                                     {dcdUserItem.dcd_active?
                                     <span className='badge text-bg-success'>Hoạt động</span>
                                     :<span className='badge text-bg-danger'>Tạm khóa</span>}
                                 </td>
                                 <td>
                                     <button onClick={()=>dcdHandleUpdate(dcdUserItem.id)}>Edit</button>
                                     <button onClick={(ev)=> dcdHandleDelete(dcdUserItem.id)}>Delete</button>
                                 </td>
                             </tr>
                         )
                     })
                 }
             </tbody>
         </table>
     </div>
   )
 }