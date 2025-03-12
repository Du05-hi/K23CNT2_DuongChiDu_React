import React from 'react'
 import DcdThemeToggle from './components/DcdThemeToggle'
 import DcdTodoList from './components/DcdTodoList'
 import { ThemeProvider } from "./context/DcdThemeContext";
 
 export default function DcdApp() {
   return (
     <div className='container border mt-3'>
       <h1>Mini Project: Quản Lý Công Việc (To-Do List) với Hooks trong ReactJS</h1>
       <p>Dự án này giúp bạn thực hành sử dụng 
         <code>useState, useEffect, useReducer, useRef, và useContext </code>
         để tạo một ứng dụng quản lý công việc (To-Do List) đơn giản.</p>
         <hr/>
 
         <ThemeProvider>
           <div className="App">
             <h1>Quản Lý Công Việc</h1>
               <DcdThemeToggle />
               <DcdTodoList />
           </div>
         </ThemeProvider>
     </div>
   )
 }