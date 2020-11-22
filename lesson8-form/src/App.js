import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(event) {
    this.setState({
      username: event.target.value,
    });
  }
  onHandleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username : </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtName"
                      onChange={this.onHandleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Lưu lại
                  </button>
                  &nbsp;
                  <button type="reset" className="btn btn-primary">
                    Xóa trắng
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
