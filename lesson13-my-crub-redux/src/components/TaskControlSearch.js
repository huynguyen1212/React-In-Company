import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import * as actions from "../actions/index";

function TaskControlSearch(props) {
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    var target = event.target;
    // var name = target.name;
    var value = target.value;
    setKeyword(value);
  };

  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(actions.searchTask(keyword));
  };

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="input-group">
        <input
          type="text"
          name="keyword"
          className="form-control"
          placeholder="Nhập từ khóa"
          value={keyword}
          onChange={onChange}
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-primary" onClick={onSearch}>
            <FontAwesomeIcon icon={faSearch} /> Tìm
          </button>
        </span>
      </div>
    </div>
  );
}

export default TaskControlSearch;
