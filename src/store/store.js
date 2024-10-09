import { createStore } from "redux";

let initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
      case "CHANGE_COUNT":
        return {count: state.count + action.payload.num}
  }
  return state;
};

const store = createStore(countReducer);

export default store;
