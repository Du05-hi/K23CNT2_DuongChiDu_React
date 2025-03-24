import React from 'react'
 import { BrowserRouter as DcdRouter, Route, Routes } from 'react-router-dom'
 import DcdNavBar from './components/DcdNavBar'
 import DcdHome from './components/DcdHome'
 import DcdEditUser from './components/DcdEditUser'
 import DcdCreateUser from './components/DcdCreateUser'
 import DcdListUser from './components/DcdListUser';
 export default function DcdApp() {
   return (
     <div className='container border my-3 p-3'>
       <h1 className='alert alert-danger text-center'>K23CNT2 - Duong Chi Du - 2310900022</h1>
       <hr/>
       <DcdRouter>
           <DcdNavBar />
           <hr/>
           <Routes>
               <Route path='/' element={<DcdHome/>} />
               <Route path='/dcd-list-user' element={<DcdListUser/>} />
               <Route path='/dcd-create-user' element={<DcdCreateUser/>} />
               <Route path='/dcd-edit-user/:id' element={<DcdEditUser/>} />
           </Routes>
       </DcdRouter>
     </div>
   )
 }