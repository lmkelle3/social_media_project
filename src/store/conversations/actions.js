import axios from "axios";
import * as types from "./constants";

export const fetchConvos = () => {
  return dispatch => {
    axios
      .get("http://localhost:8082/api/sosh/messages")
      .then(res => {
        const conversations = res.data;
        dispatch({
          type: types.GET_CONVOS_SUCCESS,
          payload: conversations
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_CONVOS_FAILED,
          payload: err
        });
      });
  };
};
export const addConvo = message => {
  return dispatch => {
    axios
      .post(`http://localhost:8082/api/sosh/messages`, message)
      .then(res => {
        dispatch({
          type: types.SEND_CONVO_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.SEND_CONVO_FAILED,
          payload: err
        });
      });
  };
};
