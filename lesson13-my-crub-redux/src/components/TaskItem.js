import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

function TaskItem(props) {
  const dispatch = useDispatch();

  const onUpdateStatus = () => {
    dispatch(actions.updateStatus(task.id));
  };

  const onDelete = () => {
    dispatch(actions.deleteTask(task.id));
    dispatch(actions.closeForm());
  };

  const onUpdate = () => {
    dispatch(actions.openForm());
    dispatch(actions.editTask(task));
  };

  var { task, index } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.name}</td>
      <td className="text-center">
        <span
          className={
            task.status ? "label label-danger" : "label label-success"
          }
          onClick={onUpdateStatus}
        >
          {task.status ? "Kích hoạt" : "Ẩn"}
        </span>
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-warning"
          onClick={onUpdate}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
          {" Sửa"}
        </button>
          &nbsp;
          <button
          type="button"
          className="btn btn-danger"
          onClick={onDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
          {" Xóa"}
        </button>
      </td>
    </tr>
  );
}

export default (TaskItem);
