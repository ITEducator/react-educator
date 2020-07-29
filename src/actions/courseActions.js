import axios from "axios";
import { GET_COURSES, GET_ERRORS, GET_COURSE, DELETE_COURSE } from "./types";

export const createCourse = (course, history) => async (dispatch) => {
  try {
    await axios.post("/api/courses", course);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getCourses = () => async (dispatch) => {
  const res = await axios.get("/api/courses/all");
  dispatch({
    type: GET_COURSES,
    payload: res.data,
  });
};

// TODO
export const getCourse = (id, history) => async (dispatch) => {
  const res = axios.get(`/api/courses/${id}`, course);
  dispatch({
    type: GET_COURSE,
    payload: res.data,
  });
};

// TODO
export const deleteProject = (id) => async (dispatch) => {
  await axios.delete(`/api/courses/${id}`);
  dispatch({
    type: DELETE_COURSE,
    payload: id,
  });
};
