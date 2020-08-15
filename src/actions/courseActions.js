import axios from "axios";
import { GET_COURSES, GET_ERRORS, GET_COURSE, DELETE_COURSE } from "./types";

export const createCourse = (course, history) => async (dispatch) => {
  try {
    await axios.post("/api/courses", course);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
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

export const getCourse = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/courses/${id}`);
    dispatch({
      type: GET_COURSE,
      payload: res.data,
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteCourse = (id, history) => async (dispatch) => {
  await axios.delete(`/api/courses/${id}`);
  history.push("/dashboard");
  dispatch({
    type: DELETE_COURSE,
    payload: id,
  });
};
