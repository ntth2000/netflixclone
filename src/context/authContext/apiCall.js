import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", user);
    console.log("login", res);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", errorMessage: error });
  }
};
export const register = async (dispatch, user) => {
  dispatch({ type: "REGISTER_START" });
  try {
    const res = await axios.post("/auth/register", user);
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", errorMessage: error });
  }
};
export const addToMylist = async (dispatch, userId, updatedMylist) => {
  dispatch({ type: "ADD_TO_MYLIST_START" });
  try {
    const res = await axios.put(`/${userId}/mylist`, updatedMylist, {
      headers: {
        token: JSON.parse(localStorage.getItem("user")).token,
      },
    });
    console.log("updatedMylist", res.data);
    dispatch({
      type: "ADD_TO_MYLIST_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: "ADD_TO_MYLIST_ERROR" });
  }
};

export const updateUser = async (dispatch, updatedUser) => {
  dispatch({ type: "UPDATE_USER_START" });
  console.log("start");
  try {
    const res = await axios.put(
      `/user/${JSON.parse(localStorage.getItem("user"))._id}`,
      updatedUser,
      {
        headers: {
          token: JSON.parse(localStorage.getItem("user")).token,
        },
      }
    );
    console.log("updatedUser", res.data);
    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: res.data,
    });
    console.log("success");
  } catch (error) {
    dispatch({ type: "UPDATE_USER_ERROR", errorMessage: error });
  }
};
