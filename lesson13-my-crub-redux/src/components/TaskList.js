import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/index";

function TaskList(props) {
  const tasks = useSelector((state) => {
    return state.tasks;
  });
  const filterTable = useSelector((state) => {
    return state.filterTable;
  });
  const keyword = useSelector((state) => {
    return state.search;
  });
  const sort = useSelector((state) => {
    return state.sort;
  });

  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState(-1);
  const [taskss, setTaskss] = useState(tasks);
  
  const dispatch = useDispatch();

  const onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var filter = {
      name: name === "filterName" ? value : filterName,
      status: name === "filterStatus" ? value : filterStatus,
    };
    dispatch(actions.filterTask(filter));
    if (name == "filterName") {
      setFilterName(value);
    }
    if (name == "filterStatus") {
      setFilterStatus(value);
    }
  };

  useEffect(() => {
    let temps;
    if (filterTable) {
      temps = tasks.filter((task) => {
        if (filterTable.status === -1) {
          return task;
        } else {
          return task.status === (filterTable.status === 1 ? true : false);
        }
      });
      if (filterTable.name) {
        temps = temps.filter((task) => {
          return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
        });
      }
    }
    
    if (keyword) {
      temps = temps.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    if (sort.by === "name") {
      temps = temps.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      });
    } else {
      temps = temps.sort((a, b) => {
        if (a.status > b.status) return -sort.value;
        else if (a.status < b.status) return sort.value;
        else return 0;
      });
    }

    setTaskss(temps)
  }, [filterTable, keyword, sort, tasks,])

  var elmTask = taskss?.map((task, index) => {
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

export default (TaskList);
