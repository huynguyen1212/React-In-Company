import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }

  componentWillMount() {
    if (this.props.itemEditing && this.props.itemEditing.id !== null) {
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status,
      });
    } else {
      this.onClear();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status,
      });
    } else {
      this.onClear();
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSave = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onCloseForm();
    this.onClear();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };

  render() {
    if (!this.props.isDisplayForm) return null;
    var { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id ? "Cập nhập công việc " : "Thêm Công Việc "}
            <FontAwesomeIcon icon={faWindowClose} onClick={this.onCloseForm} />
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>Tên : </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trạng thái : </label>
            <select
              name="status"
              className="form-control"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value="true">Kích hoạt</option>
              <option value="false">Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Lưu lại
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Hủy bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
