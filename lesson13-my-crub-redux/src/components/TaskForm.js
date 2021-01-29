import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/index";
import { useForm } from "react-hook-form";

function TaskForm(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);

  const isDisplayForm = useSelector((state) => {
    return state.isDisplayForm;
  });
  const itemEditing = useSelector((state) => {
    return state.itemEditing;
  });

  const dispatch = useDispatch();


  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (itemEditing) {
      setId(itemEditing.id);
      setName(itemEditing.name);
      setStatus(itemEditing.status);
    } else if (!itemEditing) {
      setId("");
      setName("");
      setStatus(false);
    }
  }, [props]);

  const onCloseForm = () => {
    dispatch(actions.closeForm());
  };


  const onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
      setStatus(value);
    }
    if (name === "name") {
      setName(value);
    }
  };

  const onSave = (data) => {
    dispatch(actions.saveTask({ id: id, name: data.name, status: status }));
    onCloseForm();
    onClear();
  };

  const onClear = () => {
    setName("");
    setStatus(false);
  };

  if (!isDisplayForm) return null;
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          {id ? "Cập nhập công việc " : "Thêm Công Việc "}
          <FontAwesomeIcon icon={faWindowClose} onClick={onCloseForm} />
        </h3>
      </div>
      <div className="panel-body">
        <form onSubmit={handleSubmit(onSave)}>
          <div className="form-group">
            <label>Tên : </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={onChange}
              ref={register({
                required: true,
              })}
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
              <button
              type="button"
              className="btn btn-danger"
              onClick={onClear}
            >
              Hủy bỏ
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default (TaskForm);
