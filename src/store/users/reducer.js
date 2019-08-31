import * as types from "./constants";

const initialState = {
  all: [],

  loggedInUser: {
    name: "Darcy Booker",
    company: "Manglo",
    email: "darcybooker@manglo.com",
    phone: "+1 (903) 561-2872",
    address: "205 Pioneer Street, Highland, New Mexico, 78918",
    photo_url: "http://placehold.it/32x32",
    password: "hello",
    id: 16
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };
    case types.GET_USERS_FAILED:
      return action.payload;
    default:
      return state;
  }
};
