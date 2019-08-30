import axios from "axios";
import { GET_CONVOS_SUCCESS, GET_CONVOS_FAILED } from "./constants";

export const fetchConvos = () => {
  return dispatch => {
    axios
      .get("http://localhost:8082/api/sosh/messages")
      .then(res => {
        const conversations = res.data;
        console.log("CONVERSATIONS DATA:", conversations);
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
