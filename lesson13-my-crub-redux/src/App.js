import React from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/index";

function App(props) {
  const isDisplayForm = useSelector((state) => {
    return state.isDisplayForm;
  });
  const itemEditing = useSelector((state) => {
    return state.itemEditing;
  });

  const dispatch = useDispatch();

  const onToogleForm = () => {
    if (itemEditing && itemEditing.id !== "") {
      dispatch(actions.openForm());
    } else {
      dispatch(actions.toggleForm());
    }
    dispatch(actions.editTask({
      id: "",
      name: "",
      status: false,
    }));
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản lí công việc</h1> <hr />
      </div>
      <div className="row">
        <div
          className={
            isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
          }
        >
          <TaskForm />
        </div>
        <div
          className={
            isDisplayForm
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={onToogleForm}
          >
            <FontAwesomeIcon icon={faPlus} />
            {" Thêm Công Việc"}
          </button>

          <TaskControl />

          <TaskList />
        </div>
      </div>
    </div>
  );
}


export default (App);
