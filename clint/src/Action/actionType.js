import {
  FETCH_DATA,
  LOADING_DATA,
  GROUP_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_MASSAGE,
  SET_USER,
  LIKE_POST,
} from "./type";
import axios from "axios";

// LIKE A POST
export const likePost = ({ data, token }) => (dispatch) => {
  console.log(data);
  axios
    .put("/api/like", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({
        type: LIKE_POST,
      });
    });
};
//set user
export const setUser = (user) => (dispatch) => {
  axios
    .post("/user/", user)
    .then((res) =>
      dispatch({
        type: SET_USER,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
//set message
export const setMassage = () => {
  return {
    type: SET_MASSAGE,
    payload: null,
  };
};
//DELETE A POST
export const deletePost = ({ data, token }) => (dispatch) => {
  axios
    .put("/api/grouppostde", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) =>
      dispatch({
        type: DELETE_POST,
        payload: "DELETE_POST",
      })
    )
    .catch((err) => console.log(err));
};
//POST A POST
export const updatePost = ({ data, token }) => (dispatch) => {
  const postdata = async () => {
    await axios
      .put("/api/postupdate", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: UPDATE_POST,
          payload: "UPDATE_POST",
        });
      })
      .catch((err) => console.log(err));
  };
  postdata();
};
//POST A POST
export const groupPost = ({ data, token }) => (dispatch) => {
  const postdata = async () => {
    await axios
      .put("/api/grouppost", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: GROUP_POST,
          payload: "MAKE_POST",
        });
      })
      .catch((err) => console.log(err));
  };
  postdata();
};

// GET DATA
export const fetchData = (token) => (dispatch) => {
  dispatch(loadingData);
  axios
    .get("/api/group", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      dispatch({
        type: FETCH_DATA,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const loadingData = () => {
  return {
    type: LOADING_DATA,
  };
};
