import React, { useState } from 'react'
 import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
 import DcdNavNar from './components/DcdNavNar'
 import DcdHome from './components/DcdHome'
 import DcdAbout from './components/DcdAbout'
 import DcdContact from './components/DcdContact'
 import DcdListUser from './components/DcdListUser'
 import DcdFormUser from './components/DcdFormUser'
 export default function TvcApp() {
 
   const listUsers  = [
     {id:"SV001", dcdFullName:"Duong Chi Du", dcdUserName:"dududududu", tvcPass:"123456a@"},
     {id:"SV002", dcdFullName:"Duong Du Du", dcdUserName:"dududu", dcdPass:"123456a@"},
     {id:"SV003", dcdFullName:"Duong Chi A", dcdUserName:"dududu", dcdPass:"123456a@"},
   ]
 
   const[dcdUsers, setDcdUsers] = useState(listUsers)
 
   // Hàm xử lý sự kiện thêm mới
   const dcdHandleAdd = (dcdParam)=>{
     console.log("dcdHandleAdd:", dcdParam);
     
     setDcdUsers(prev =>{ 
       return [
         ...prev,
         dcdParam
       ]
     })
   }
   return (
     <div className='container border my-3'>
         <h1>React Router Dom - Demo - [Duong Chi Du - K23CNT2]</h1>
         <hr/>
         <Router>
             <DcdNavNar />
             <Routes>
                 <Route path='/' element = {<DcdHome />} />
                 <Route path='/about' element = {<DcdAbout />} />
                 <Route path='/contact' element = {<DcdContact />} />
                 <Route path='/list-user' element = {<DcdListUser  renderDcdUsers={dcdUsers}/>} />
                 <Route path='/create-user' element = {<DcdFormUser  onDcdAddNew={dcdHandleAdd}/>} />
             </Routes>
         </Router>
     </div>
   )
 }