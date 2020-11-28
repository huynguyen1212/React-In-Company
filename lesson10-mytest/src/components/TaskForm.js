import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

class TaskForm extends Component {
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              {"Thêm Công Việc "}
              <FontAwesomeIcon
                icon={faWindowClose}
                onClick={this.onCloseForm}
              />
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label>Tên : </label>
                <input type="text" className="form-control" name="name" />
              </div>
              <label>Trạng thái : </label>
              <select name="status" className="form-control">
                <option value="true">Kích hoạt</option>
                <option value="false">Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Lưu lại
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger">
                  Hủy bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskForm;
