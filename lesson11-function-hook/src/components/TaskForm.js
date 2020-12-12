import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";

function TaskForm(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (props && props.task) {
      setId(props.task.id);
      setName(props.task.name);
      setStatus(props.task.status);
    } else if (!props.task) {
      setId("");
      setName("");
      setStatus(false);
    }
  }, [props]);

  const onCloseForm = () => {
    props.onCloseForm();
  };
  let history = useHistory();

  const onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    console.log(name, value);
    if (name === "status") {
      value = target.value === "true" ? true : false;
      setStatus(value);
    }
    if (name === "name") {
      setName(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ id: id, name: name, status: status });
    history.push("/");
    onCloseForm();
    onClear();
  };

  const onClear = () => {
    setName("");
    setStatus(false);
    history.push("/");
  };

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          {id ? "Cập nhập công việc " : "Thêm Công Việc "}
          <FontAwesomeIcon icon={faWindowClose} onClick={onCloseForm} />
        </h3>
      </div>
      <div className="panel-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Tên : </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <label>Trạng thái : </label>
          <select
            name="status"
            className="form-control"
            value={status}
            onChange={onChange}
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
            <button type="button" className="btn btn-danger" onClick={onClear}>
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
