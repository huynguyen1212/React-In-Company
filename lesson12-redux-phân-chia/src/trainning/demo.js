import { values } from "lodash";
import { createStore } from "redux";
import { status, sort } from "./actions/index";
import myReducer from "./reducers/index";

const store = createStore(myReducer);
console.log("Default : ", store.getState());

// thực hiện thay đổi trạng thái
// var action = {
//   type: "TOOGLE_STATUS",
// };
store.dispatch(status());
console.log("TOOGLE_STATUS : ", store.getState());

// thực hiện sort theo name từ Z -> A
// var sortAction = {
//   type: "SORT",
//   sort: {
//     by: "name",
//     value: -1,
//   },
// };
store.dispatch(
  sort({
    by: "name",
    value: -1,
  })
);
console.log("SORT : ", store.getState());
