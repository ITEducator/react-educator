import { GET_COURSES, GET_COURSE, DELETE_COURSE } from "../actions/types";

const initialState = {
  courses: [],
  course: {},
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };
    default:
      return state;
  }
};

export default courseReducer;
