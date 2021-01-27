import React, { useState } from "react";
import TaskItem from "./TaskItem";
import * as actions from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

function TaskList(props) {
  const tasks = useSelector((state) => {
    return state.tasks;
  });
  const filterTable = useSelector((state) => {
    return state.filterTable;
  });
  const keyword = useSelector((state) => {
    return state.keyword;
  });
  const sort = useSelector((state) => {
    return state.sort;
  });

  const dispatch = useDispatch();

  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState(-1);

  const onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var filter = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus,
    };
    dispatch(actions.filterTask(filter));
    if (name == "filterName") {
      setFilterName(value);
    }
    if (name == "filterStatus") {
      setFilterStatus(value);
    }
  };

  if (filterTable.name) {
    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
    });
  }
  tasks = tasks.filter((task) => {
    if (filterTable.status === -1) {
      return task;
    } else {
      return task.status === (filterTable.status === 1 ? true : false);
    }
  });

  if (keyword) {
    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(keyword) !== -1;
    });
  }

  if (sort.by === "name") {
    tasks.sort((a, b) => {
      if (a.name > b.name) return sort.value;
      else if (a.name < b.name) return -sort.value;
      else return 0;
    });
  } else {
    tasks.sort((a, b) => {
      if (a.status > b.status) return -sort.value;
      else if (a.status < b.status) return sort.value;
      else return 0;
    });
  }

  var elmTask = tasks.map((task, index) => {
    return <TaskItem key={task.id} index={index} task={task} />;
  });
  return (
    <div className="row mt-15">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="filterName"
                  value={filterName}
                  onChange={onChange}
                />
              </td>
              <td>
                <select
                  className="form-control"
                  name="filterStatus"
                  value={filterStatus}
                  onChange={onChange}
                >
                  <option value={-1}>Tất Cả</option>
                  <option value={0}>Ẩn</option>
                  <option value={1}>Kích hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elmTask}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskList;
