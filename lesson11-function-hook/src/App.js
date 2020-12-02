import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { filter, findIndex } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [tasksEditing, setTasksEditing] = useState(null);
  const [filter, setFilter] = useState({ name: "", status: -1 });
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortValue, setSortValue] = useState(1);

  // useEffect(() => {
  //   if (localStorage && localStorage.getItem("tasks")) {
  //     var tasks = JSON.parse(localStorage.getItem("tasks"));
  //     this.setState({
  //       tasks: tasks,
  //     });
  //   }
  // }, []);

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  function generateID() {
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

  function onToogleForm() {
    if (isDisplayForm && tasksEditing) {
      setIsDisplayForm(true);
      setTasksEditing(null);
    } else {
      setIsDisplayForm(!isDisplayForm);
      setTasksEditing(null);
    }
  }

  function onCloseForm() {
    setIsDisplayForm(false);
  }

  function onShowForm() {
    setIsDisplayForm(true);
  }

  function onSubmit() {
    var tasks = { tasks };
    console.log(tasks);
  }

  return <div></div>;
}

export default App;
