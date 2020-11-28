import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Học React</td>
        <td className="text-center">
          <span className="label label-danger">Kích hoạt</span>
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
