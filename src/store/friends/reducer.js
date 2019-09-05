import * as types from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FRIENDS_SUCCESS:
      return action.payload;
    case types.GET_FRIENDS_FAILED:
      return action.payload;
    default:
      return state;
  }
};
