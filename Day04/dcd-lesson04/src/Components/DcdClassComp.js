import React, { Component } from 'react'

class DcdClassComp extends Component {
    constructor (props){
        super(props);
        //khoi tao state
        this.state={
            fullName:"du du",
            age:20,
            phone:"0365184434"
        }
    }
    // ham xu li su kien
     changeInfo = (ev) =>{
        // cap nhat state
        this.setState({
            fullName:"duong chi du"
        });
    }
  render() {
    return (
      <div className='alert alert-success'>
           <h2>trinh bay du lieu tu state</h2>
            <p>info state (fullName): {this.state.fullName}</p>
            <p>info state (age): {this.state.age}</p>
            <p>info state (phone): {this.state.phone}</p>

            <hr/>
            <button className='btn btn-primary' onClick={this.changeInfo}>Change InFo</button>
            <hr/>
            <h3>lay du lieu tu props</h3>
            <p>Name: {this.props.renderName}</p>
            <p>FullName: {this.props.renderUsers?this.props.renderUsers.fullName:''}</p>
            <p>Age: {this.props.renderUsers?this.props.renderUsers.age:''}</p>
            <p>Phone: {this.props.renderUsers?this.props.renderUsers.phone:''}</p>
      </div>
    )
  }
}
export default DcdClassComp;