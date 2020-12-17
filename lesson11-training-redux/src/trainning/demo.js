import { values } from "lodash";
import { createStore } from "redux";

var initilState = {
  status: false,
  sort: {
    by: "name",
    value: 1,
  },
};

var myReducer = (state = initilState, action) => {
  if (action.type === "TOOGLE_STATUS") {
    state.status = !state.status;
    return state;
  }
  if (action.type === "SORT") {
    var { by, value } = action.sort;
    var { status } = state;
    return {
      status: status,
      sort: {
        by: by,
        value: value,
      },
    };
    // state.sort = {
    //   by: action.sort.by,
    //   value: action.sort.value,
    // };
  }
  return state;

  //đã trả về một state thì k trả về một state nào nữa
};

const store = createStore(myReducer);
console.log("Default : ", store.getState());

// thực hiện thay đổi trạng thái
var action = {
  type: "TOOGLE_STATUS",
};
store.dispatch(action);
console.log("TOOGLE_STATUS : ", store.getState());

// thực hiện sort theo name từ Z -> A
var sortAction = {
  type: "SORT",
  sort: {
    by: "name",
    value: -1,
  },
};
store.dispatch(sortAction);
console.log("SORT : ", store.getState());
