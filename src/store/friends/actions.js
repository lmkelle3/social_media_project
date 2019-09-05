import axios from "axios";
import { GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILED } from "./constants";

export const fetchFriends = () => {
  return dispatch => {
    axios
      .get("http://localhost:8082/api/sosh/friend-requests")
      .then(res => {
        const friends = res.data;
        dispatch({
          type: GET_FRIENDS_SUCCESS,
          payload: friends
        });
      })
      .catch(err => {
        dispatch({
          type: GET_FRIENDS_FAILED,
          payload: err
        });
      });
  };
};
