import React, { Component } from 'react';

class DcdEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            dcdCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    dcdHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            dcdCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    dcdHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.dcdCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='dcdCourse' id='dcdCourse' 
                            value={this.state.dcdCourse}
                            onChange={this.dcdHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.dcdHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default DcdEventForm2;