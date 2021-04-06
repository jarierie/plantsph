const initialState = {
  count: 0,
};

const itemStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getItemState":
      return {
        count: state.count + 1,
      };
    case "decreaseState":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default itemStateReducer;
