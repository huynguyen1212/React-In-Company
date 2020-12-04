import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { filter, findIndex } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const generateID = () => {
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4();
};

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [tasksEditing, setTasksEditing] = useState(null);
  const [filter, setFilter] = useState({ name: "", status: -1 });
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortValue, setSortValue] = useState(1);

  useEffect(() => {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(tasks);
    }
  }, []);

  const onToogleForm = () => {
    if (isDisplayForm && tasksEditing) {
      setIsDisplayForm(true);
      setTasksEditing(null);
    } else {
      setIsDisplayForm(!isDisplayForm);
      setTasksEditing(null);
    }
  };

  const onCloseForm = () => {
    setIsDisplayForm(false);
  };

  const onShowForm = () => {
    setIsDisplayForm(true);
  };

  const onSubmit = (data) => {
    let temps = [...tasks];
    if (data.id === "") {
      data.id = generateID();
      temps.push(data);
    } else {
      var index = findIndex(data.id);
      temps[index] = data;
    }
    setTasks(temps);
    setTasksEditing(null);
    localStorage.setItem("tasks", JSON.stringify(temps));
  };

  const onUpdateStatus = (id) => {
    let temps = [...tasks];
    var index = findIndex(id);
    if (index !== -1) {
      temps[index].status = !temps[index].status;
      setTasks(temps);
      localStorage.setItem("tasks", JSON.stringify(temps));
    }
  };

  const findIndex = (id) => {
    let temps = [...tasks];
    var result = -1;
    temps.forEach((temp, index) => {
      if (temp.id === id) {
        result = index;
      }
    });
    return result;
  };

  const onDelete = (id) => {
    let temps = [...tasks];
    var index = findIndex(id);
    if (index !== -1) {
      temps.splice(index, 1);
      setTasks(temps);
      localStorage.setItem("tasks", JSON.stringify(temps));
    }
    onCloseForm();
  };

  const onUpdate = (id) => {
    let temps = [...tasks];
    var index = findIndex(id);
    var tasksEditing = temps[index];
    setTasksEditing(tasksEditing);
    onShowForm();
  };

  const onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    setFilter({ name: filterName.toLowerCase(), status: filterStatus });
  };

  const onSearch = (keyword) => {
    setKeyword(keyword);
  };

  const onSort = (sortBy, sortValue) => {
    setSortBy(sortBy);
    setSortValue(sortValue);
  };
  let temps;
  if (filter) {
    temps = tasks.filter((task) => {
      if (filter.status === -1) {
        return task;
      } else {
        return task.status === (filter.status === 1 ? true : false);
      }
    });
    if (filter.name) {
      temps = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filter.name) !== -1;
      });
    }
  }
  if (keyword) {
    temps = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(keyword) !== -1;
    });
  }
  if (sortBy === "name") {
    tasks.sort((a, b) => {
      if (a.name > b.name) return sortValue;
      else if (a.name < b.name) return -sortValue;
      else return 0;
    });
  } else {
    tasks.sort((a, b) => {
      if (a.status > b.status) return -sortValue;
      else if (a.status < b.status) return sortValue;
      else return 0;
    });
  }
  var elmTaskForm = isDisplayForm ? (
    <TaskForm
      onCloseForm={onCloseForm}
      onSubmit={onSubmit}
      task={tasksEditing}
    />
  ) : (
    ""
  );

  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản lí công việc</h1> <hr />
      </div>
      <div className="row">
        <div
          className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
        >
          {elmTaskForm}
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

          <TaskControl
            onSearch={onSearch}
            onSort={onSort}
            sortBy={sortBy}
            sortValue={sortValue}
          />

          <TaskList
            tasks={temps}
            onUpdateStatus={onUpdateStatus}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onFilter={onFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
