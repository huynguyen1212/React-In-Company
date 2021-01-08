import React, { Component } from "react";
import TaskControlSearch from "../components/TaskControlSearch";
import TaskControlSort from "../components/TaskControlSort";

class TaskControl extends Component {
  render() {
    return (
      <div className="row mt-15">
        <TaskControlSearch />
        <TaskControlSort />
      </div>
    );
  }
}

export default TaskControl;
