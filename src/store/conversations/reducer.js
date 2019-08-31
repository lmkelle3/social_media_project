import * as types from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONVOS_SUCCESS:
      return action.payload;
    case types.GET_CONVOS_FAILED:
      return action.payload;
    default:
      return state;
  }
};
