import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import axios from "axios";
 export default function DcdCreateUser() {
     const dcdUser = {
         id:0,
         'dcd_name':'',
         'dcd_email':'',
         'dcd_phone':'',
         'dcd_active':true
     }
 
     const [dcd_user, setDcd_User] = useState(dcdUser);
     const dcdApi = "https://67e0d0ac58cc6bf78522fde4.mockapi.io/dcd-k23cnt2-2310900022/dcd_users"
     const navigate = useNavigate();
 
     const dcdHandlSubmit = (ev)=>{
         ev.preventDefault();
         console.log(dcd_user);
         axios
             .post(dcdApi, dcd_user)
             .then(() => {
                 navigate('/dcd-list-user')
             })
             .catch((error) => console.log('Lỗi khi thêm user.'));
 
     }
   return (
     <div>
       <h2>Thêm mới user</h2>
       <form>
         <div className="mb-3 row">
           <label htmlFor="dcd_name" className="col-sm-2 col-form-label">FullName</label>
           <div className="col-sm-10">
             <input type="text" className="form-control" id="dcd_name"
                 name="dcd_name"
                 value={dcd_user.dcd_name} 
                 onChange={(ev)=>setDcd_User({...dcd_user,dcd_name:ev.target.value})} 
                 />
           </div>
         </div>
 
         <div className="mb-3 row">
           <label htmlFor="dcd_email" className="col-sm-2 col-form-label">Email</label>
           <div className="col-sm-10">
             <input type="text" className="form-control" id="dcd_email" 
              name="dcd_email"
              value={dcd_user.dcd_email} 
              onChange={(ev)=>setDcd_User({...dcd_user,dcd_email:ev.target.value})} 
 
              />
           </div>
         </div>
 
         <div className="mb-3 row">
           <label htmlFor="dcd_phone" className="col-sm-2 col-form-label">Phone</label>
           <div className="col-sm-10">
             <input type="text" className="form-control" id="dcd_phone" 
              name="dcd_phone"
              value={dcd_user.dcd_phone} 
              onChange={(ev)=>setDcd_User({...dcd_user,dcd_phone:ev.target.value})} 
              />
           </div>
         </div>
 
         <div className="mb-3 row">
           <label htmlFor="dcd_active" className="col-sm-2 col-form-label">Active</label>
           <div className="col-sm-10">
             <input type="radio" id="dcd_active_true"  className="mx-3"   
                 onChange={(ev)=>setDcd_User({...dcd_user,dcd_active:ev.target.value})}
                 value={true}
                 name="dcd_active"  /> 
             <label htmlFor="dcd_active_true">Hoạt động</label>
             <input type="radio" id="dcd_active_false"  className="mx-3"
                 onChange={(ev)=>setDcd_User({...dcd_user,dcd_active:ev.target.value})}
                 value={false} 
                 name="dcd_active" /> 
             <label htmlFor="dcd_active_false">Tạm khóa</label>
           </div>
         </div>
 
         <div className="mb-3 row">
             <label htmlFor="" className="col-sm-2 col-form-label"></label>
             <div className="col-sm-10">
                 <button className="btn btn-primary mx-2 px-3" name="btnDcdCreate" 
                     onClick={dcdHandlSubmit}
                     >Create</button>
                 <button className="btn btn-secondary mx-2 px-3" name="dcdTvcBack">Back</button>
             </div>
         </div>
       </form>
     </div>
   );
 }