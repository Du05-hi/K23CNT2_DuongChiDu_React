import React, { Component } from 'react';

class DcdEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            dcdName:'Du',
            dcdAge:20,
            dcdGender:'Female',
            dcdCourse:'JSS'
        }
    }

    // Hàm xử lý sự kiện change
    dcdHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    dcdHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.dcdName + "\n" + this.state.dcdAge);

        // Chuyển dữ liệu trên form lên App component (DcdApp);
        this.props.onDcdHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='dcdName'>Student Name:</label>
                        <input type='text' name='dcdName' id='dcdName' 
                            value={this.state.dcdName}
                            onChange={this.dcdHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='dcdAge'>Student Age:</label>
                        <input type='text' name='dcdAge' id='dcdAge' 
                            value={this.state.dcdAge}
                            onChange={this.dcdHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='dcdGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='dcdGender' id='dcdMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.dcdGender === 'Male'}
                                onChange={this.dcdHandleChange} />
                            <label htmlFor='dcdMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='dcdGender' id='dcdFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.dcdGender === 'Female'}
                                onChange={this.dcdHandleChange} />
                            <label htmlFor='dcdFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='dcdGender' id='dcdNone' className='mx-2'
                                value={'None'}
                                checked={this.state.dcdGender === 'None'}
                                onChange={this.dcdHandleChange} />
                            <label htmlFor='dcdNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='dcdCourse'>
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
                    </div>
                    <button onClick={this.dcdHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DcdEventForm5;