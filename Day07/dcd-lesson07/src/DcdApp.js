import React, { Component } from 'react'
import DcdLoginControl from './components/DcdLoginControl'
import DcdRenderList from './components/DcdRenderList'
import DcdRenderListStudent from './components/DcdRenderListStudent'
import DcdRenderListIphone from './components/DcdRenderListIphone'

export default class DdcdApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
          <h1 className='text-center'>Duong Chi Du - Render condition, List key</h1>
          <hr/>
          <DcdLoginControl/>
          <DcdRenderList/>
          <DcdRenderListStudent/>
          <DcdRenderListIphone/>
      </div>
    )
  }
}
