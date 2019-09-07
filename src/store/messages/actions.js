import * as types from "./constants";
import axios from "axios";

export const fetchMessages = user_id => {
  return dispatch => {
    axios
      .get(`http://localhost:8082/api/sosh/messages`)
      .then(res => {
        const messages = res.data;
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

export const addMessage = newMessage => {
  return dispatch => {
    axios
      .post(`http://localhost:8082/api/sosh/messages`, newMessage)
      .then(res => {
        const newMessage = res.data;
        dispatch({
          type: types.ADD_MESSAGE_SUCCESS,
          payload: newMessage
        });
      })
      .catch(err => {
        dispatch({
          type: types.ADD_MESSAGE_FAILED,
          payload: err
        });
      });
  };
};
