import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/index";

function TaskControlSort(props) {
  const sort = useSelector((state) => {
    return state.sort;
  });

  const dispatch = useDispatch();

  const onClick = (sortBy, sortValue) => {
    dispatch(actions.sortTask({ by: sortBy, value: sortValue }));
  };

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {"Sắp xếp "}
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li onClick={() => onClick("name", 1)}>
            <a
              role="button"
              className={sort.by === "name" && sort.value === 1 ? "sort" : ""}
            >
              <span className="fa fa-alpha-asc pr-5">Tên A - Z</span>
            </a>
          </li>
          <li onClick={() => onClick("name", -1)}>
            <a
              role="button"
              className={sort.by === "name" && sort.value === -1 ? "sort" : ""}
            >
              <span className="fa fa-alpha-asc pr-5">Tên Z - A</span>
            </a>
          </li>
          <li role="separator" className="divider"></li>
          <li onClick={() => onClick("status", 1)}>
            <a
              role="button"
              className={sort.by === "status" && sort.value === 1 ? "sort" : ""}
            >
              Trạng thái kích hoạt
            </a>
          </li>
          <li onClick={() => onClick("status", -1)}>
            <a
              role="button"
              className={
                sort.by === "status" && sort.value === -1 ? "sort" : ""
              }
            >
              Trạng thái ẩn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TaskControlSort;
