import axios from "axios";
import * as types from "./constants";

export const getUsers = () => {
  return dispatch => {
    axios
      .get(`http://localhost:8082/api/users`)
      .then(res => {
        const users = res.data;
        dispatch({
          type: types.GET_USERS_SUCCESS,
          payload: users
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_USERS_FAILED,
          payload: err
        });
      });
  };
};

// export const postStatus = id => {
//   return async dispatch => {
//     const response = await axios.patch(
//       `http://localhost:8082/api/statuses/${id}`
//     );
//     const status = response.data;
//     dispatch({
//       type: POST_STATUS_SUCCESS,
//       payload: status
//     });
//   };
// };
