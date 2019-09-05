import axios from "axios";
import { GET_CONVOS_SUCCESS, GET_CONVOS_FAILED } from "./constants";

export const fetchConvos = () => {
  return dispatch => {
    axios
      .get("http://localhost:8082/api/sosh/messages")
      .then(res => {
        const conversations = res.data;
        dispatch({
          type: GET_CONVOS_SUCCESS,
          payload: conversations
        });
      })
      .catch(err => {
        dispatch({
          type: GET_CONVOS_FAILED,
          payload: err
        });
      });
  };
};
// export const postStatus = status => {
//   return dispatch => {
//     axios
//       .post(`http://localhost:8082/api/sosh/statuses/`, status)
//       .then(res => {
//         dispatch({
//           type: SEND_MESSAGE_SUCCESS,
//           payload: res.data
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: SEND_MESSAGE_FAILED,
//           payload: err
//         });
//       });
//   };
// };
