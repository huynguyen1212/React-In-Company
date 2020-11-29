import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

class TaskItem extends Component {
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status ? "label label-danger" : "label label-success"
            }
          >
            {task.status ? "Kích hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <FontAwesomeIcon icon={faPencilAlt} />
            {" Sửa"}
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            <FontAwesomeIcon icon={faTrash} />
            {" Xóa"}
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
