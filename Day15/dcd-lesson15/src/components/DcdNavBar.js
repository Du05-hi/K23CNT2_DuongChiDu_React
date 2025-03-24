import React from 'react'
 import {Link} from 'react-router-dom'
 import DcdHome from './DcdHome'
 
 export default function DcdNavBar() {
   return (
     <nav>
         <Link to='/' >Home</Link> |
         <Link to='/dcd-list-user' >List User</Link> |
         <Link to='/dcd-create-user' >Create User</Link>
     </nav>
   )
 }