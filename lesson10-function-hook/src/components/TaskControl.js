import React from "react";
import TaskControlSearch from "../components/TaskControlSearch";
import TaskControlSort from "../components/TaskControlSort";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function TaskControl(props) {
  return (
    <div className="row mt-15">
      <TaskControlSearch onSearch={props.onSearch} />
      <TaskControlSort
        onSort={props.onSort}
        sortBy={props.sortBy}
        sortValue={props.sortValue}
      />
    </div>
  );
}

export default TaskControl;
