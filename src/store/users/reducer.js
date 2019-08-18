import * as types from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return action.payload;
    case types.GET_USERS_FAILED:
      return action.payload;
    default:
      return state;
  }
};
