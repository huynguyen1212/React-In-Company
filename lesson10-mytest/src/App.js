import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { filter, findIndex } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4()
    );
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lí công việc</h1> <hr />
        </div>

        <div className="row">
          <TaskForm />

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
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
}

export default App;
