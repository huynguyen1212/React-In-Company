var initilState = false;

var myReducer = (state = initilState, action) => {
  if (action.type === "TOGGLE_STATUS") {
    state = !state;
    return state;
  }
  return state;

  //đã trả về một state thì k trả về một state nào nữa
};

export default myReducer;
