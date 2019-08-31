import * as types from "./constants";
import axios from "axios";

export const fetchMessages = user_id => {
  return dispatch => {
    axios
      .get(`http://localhost:8082/api/sosh/users/${user_id}/messages`)
      .then(res => {
        const messages = res.data;
        console.log("DATA:", messages);
        dispatch({
          type: types.FETCH_MESSAGES_SUCCESS,
          payload: messages
        });
      })
      .catch(err => {
        dispatch({
          type: types.FETCH_MESSAGES_FAILED,
          payload: err
        });
      });
  };
};
