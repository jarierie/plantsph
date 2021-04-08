// Add the initial item State in here.

const initialState = {
  data: [],
};

// Filtering the data base on the plantType.

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getState":
      return {
        data: state.data.filter(state.data.plantType === action.payload),
      };
  }
};
export default rootReducer;
