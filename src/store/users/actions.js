// import axios from "axios";
// import {
//   GET_STATUSES_SUCCESS,
//   GET_STATUSES_FAILED,
//   POST_STATUS_SUCCESS
// } from "./constants";

// export const fetchStatuses = () => {
//   return dispatch => {
//     axios
//       .get("http://localhost:8082/api/statuses")
//       .then(res => {
//         const statuses = res.data;
//         dispatch({
//           type: GET_STATUSES_SUCCESS,
//           payload: statuses
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: GET_STATUSES_FAILED,
//           payload: err
//         });
//       });
//   };
// };

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
