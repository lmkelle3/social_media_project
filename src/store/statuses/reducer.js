import * as types from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STATUSES_SUCCESS:
      return action.payload;
    case types.GET_STATUSES_FAILED:
      return action.payload;
    case types.POST_STATUS_SUCCESS:
      return [...state, action.payload];
    case types.POST_STATUS_FAILED:
      return action.payload;
    case types.DELETE_STATUS_SUCCESS:
      let deletedStatus = state.map(status =>
        status.id === action.payload.id ? action.payload : status
      );
      return action.payload;
    case types.DELETE_STATUS_FAILED:
      return action.payload;
    default:
      return state;
  }
};
