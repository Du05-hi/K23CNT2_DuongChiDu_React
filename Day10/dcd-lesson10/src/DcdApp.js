import React from 'react'
 import DcdUseState from './components/DcdUseState'
 import DcdUseEffect from './components/DcdUseEffect'
 
 export default function DcdApp() {
   return (
     <div className='container border my-2'>
         <h1>Demo React hook</h1>
         <DcdUseState />
         <DcdUseEffect />
     </div>
   )
 }