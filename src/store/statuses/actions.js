import axios from "axios";
import {
  GET_STATUSES_SUCCESS,
  GET_STATUSES_FAILED,
  POST_STATUS_SUCCESS,
  POST_STATUS_FAILED,
  DELETE_STATUS_SUCCESS,
  DELETE_STATUS_FAILED
} from "./constants";

export const fetchStatuses = () => {
  return dispatch => {
    axios
      .get("http://localhost:8082/api/sosh/statuses")
      .then(res => {
        const statuses = res.data;
        dispatch({
          type: GET_STATUSES_SUCCESS,
          payload: statuses
        });
      })
      .catch(err => {
        dispatch({
          type: GET_STATUSES_FAILED,
          payload: err
        });
      });
  };
};

export const postStatus = status => {
  return dispatch => {
    axios
      .post(`http://localhost:8082/api/sosh/statuses/`, status)
      .then(res => {
        dispatch({
          type: POST_STATUS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: POST_STATUS_FAILED,
          payload: err
        });
      });
  };
};

export const deleteStatus = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:8082/api/statuses/remove/${id}`, {
        // content: id
      })
      .then(res => {
        dispatch({
          type: DELETE_STATUS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: DELETE_STATUS_FAILED,
          payload: err
        });
      });
  };
};
