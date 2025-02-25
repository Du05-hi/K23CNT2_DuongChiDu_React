import React, { Component } from 'react';

class DcdEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            dcdGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    dcdHandleChange = (event)=>{
        this.setState({
            dcdGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    dcdHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.dcdGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='dcdGioiTinh'  id='dcdNam' className='mx-2'
                            value="Nam" checked={this.state.dcdGioiTinh === 'Nam'} onChange={this.dcdHandleChange}/> 
                            <label htmlFor='dcdNam'>Nam</label>  
                        <input type='radio' name='dcdGioiTinh'  id='dcdNu' className='mx-2'
                            value="Nữ" checked={this.state.dcdGioiTinh === 'Nữ'} onChange={this.dcdHandleChange}/> 
                            <label htmlFor='dcdNu'>Nữ</label>  
                        <input type='radio' name='dcdGioiTinh' id='dcdKhac' className='mx-2'
                            value="Khác" checked={this.state.dcdGioiTinh === 'Khác'} onChange={this.dcdHandleChange}/> 
                            <label htmlFor='dcdKhac'>Khác</label>
                    </div>
                    <button onClick={this.dcdHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DcdEventForm3;