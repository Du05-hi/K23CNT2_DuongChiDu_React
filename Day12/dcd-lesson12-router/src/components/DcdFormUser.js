import React, { useState } from 'react'
 
 export default function DcdFormUser({onDcdAddNew}) {
 
     const [id, setDcdId] = useState('')
     const [dcdFullName, setDcdFullName] = useState('')
     const [dcdUserName, setDcdUserName] = useState('')
     const [dcdPass, setDcdPass] = useState('')
 
    
 
     const dcdHandleSubmit = (event) =>{
         event.preventDefault();
         console.log(id,dcdFullName,dcdUserName, dcdPass)
         
         onDcdAddNew({id,dcdFullName,dcdUserName, dcdPass})
     }
   return (
     <div>
         <form>
             <p>Mã sinh viên:
                 <input type='text' name='id' value={id} onChange={(ev)=>setDcdId(ev.target.value)} /> </p>
             <p>Họ và tên:
                 <input type='text' name='dcdFullName' value={dcdFullName} onChange={(ev)=>setDcdFullName(ev.target.value)}/> </p>
             <p>Tài khoản:
                 <input type='text' name='dcdUserName' value={dcdUserName} onChange={(ev)=>setDcdUserName(ev.target.value)}/> </p>
             <p>Mật khẩu:
                 <input type='password' name='dcdPass' value={dcdPass} onChange={(ev)=>setDcdPass(ev.target.value)} /> </p>
 
             <p>
                 <button name='dcdSave' onClick={dcdHandleSubmit}>Save</button>
             </p>
         </form>
     </div>
   )
 }