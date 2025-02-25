import React, { Component } from 'react';

class DcdEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            dcdStudentName:'Chi Du',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (dcdStudentName) thay đổi
    dcdHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            dcdStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    dcdHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.dcdStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.dcdHandleSubmit}>
                    <label htmlFor='dcdStudentName'>
                        <input type='text' name='dcdStudentName' id='dcdStudentName' 
                            value={this.state.dcdStudentName}
                            onChange={this.dcdHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default DcdEventForm1;