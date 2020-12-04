import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

function TaskItem(props) {
  const onUpdateStatus = () => {
    props.onUpdateStatus(props.task.id);
  };

  const onDelete = () => {
    props.onDelete(props.task.id);
  };

  const onUpdate = () => {
    props.onUpdate(props.task.id);
  };
  var task = props.task;
  var index = props.index;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.name}</td>
      <td className="text-center">
        <span
          className={task.status ? "label label-danger" : "label label-success"}
          onClick={onUpdateStatus}
        >
          {task.status ? "Kích hoạt" : "Ẩn"}
        </span>
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning" onClick={onUpdate}>
          <FontAwesomeIcon icon={faPencilAlt} />
          {" Sửa"}
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} />
          {" Xóa"}
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
