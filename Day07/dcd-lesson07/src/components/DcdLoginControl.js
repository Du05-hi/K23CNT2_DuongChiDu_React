import React, { Component } from 'react'
import DcdLoginComp from './DcdLoginComp';
import DcdLogoutComp from './DcdLogoutComp';

export default class DcdLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // ham xu li su kien login
    DcdHandleLogin = (Event) => {
        Event.preventDefault();
        this.setState({
             isLoggedIn:true,
        })
    }
  render() {
    let {isLoggedIn}=this.state
    let dcdElement = isLoggedIn?<DcdLoginComp/> : <DcdLogoutComp/>
    return (
      <div className='alert alert-danger'>
            {dcdElement}

            {
                isLoggedIn?
                    <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button>
                    :<button onClick={this.DcdHandleLogin}>Login</button>
            }
      </div>
    )
  }
}
