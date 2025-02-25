import React, { Component } from "react";

class DcdEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            dcdSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    dcdHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.dcdSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            dcdSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    dcdHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.dcdSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.dcdSelectCheckBox.includes("Apple")}
              onChange={this.dcdHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.dcdSelectCheckBox.includes("Banana")}
              onChange={this.dcdHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.dcdSelectCheckBox.includes("Orange")}
              onChange={this.dcdHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.dcdHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default DcdEventForm4;