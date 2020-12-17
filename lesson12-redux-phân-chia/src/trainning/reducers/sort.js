var initilState = {
  by: "name",
  value: 1,
};

var myReducer = (state = initilState, action) => {
  if (action.type === "SORT") {
    var { by, value } = action.sort;
    return {
      by,
      value,
    };
    // state.sort = {
    //   by: action.sort.by,
    //   value: action.sort.value,
    // };
  }
  return state;

  //đã trả về một state thì k trả về một state nào nữa
};

export default myReducer;
