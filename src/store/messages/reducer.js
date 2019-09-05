import * as types from "./constants";

const initialState = {
  all: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MESSAGES_SUCCESS:
      return { ...state, all: action.payload };
    case types.FETCH_MESSAGES_FAILED:
      return action.payload;
    default:
      return state;
  }
};
