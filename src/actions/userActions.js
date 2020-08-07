import axios from "axios";
import { CREATE_USER } from "./types";

export const createUser = (user) => async (dispatch) => {
  try {
    await axios.post("/api/users", user, {
      headers: {
        "content-type": "multipart/form-data",
      }
    });
  } catch (err) {
    dispatch({
      type: CREATE_USER,
      payload: err.response.data,
    });
  }
};
