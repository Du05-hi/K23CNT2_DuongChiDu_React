import React, { Component } from "react";

class DcdForm extends Component {
  render() {
    let {renderDcdStudent} = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
         
      
            Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">ID</label>
              <div className="col-sm-9">
                <input type="text" className="form-control"  value={renderDcdStudent.dcdID}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">FullName</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={renderDcdStudent.dcdFullName}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">UserName</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={renderDcdStudent.dcdUserName}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">PassWord</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={renderDcdStudent.dcdPassWord}/>
              </div>
            </div>
            
           
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DcdForm;