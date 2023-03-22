import { Types } from "./ActionTypes";

const initialState = {
  profile: {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    category: "",
  },
  signUpStatus: false,
  formSubmissionStatus: false,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_USER:
      return {
        ...state,
        profile: action.payload.user,
        formSubmissionStatus: false,
        signUpStatus: false,
      };
    case Types.LOGIN:
      console.log("login", action.payload.user);
      return {
        ...state,
        profile: action.payload.user,
        formSubmissionStatus: false,
        signUpStatus: false,
      };
    case Types.UPDATE_USER:
      return {
        ...state,
        profile: action.payload.user,
        formSubmissionStatus: false,
        signUpStatus: true,
      };
    case Types.SIGN_UP_STATUS:
      return {
        ...state,
        signUpStatus: action.payload.status,
      };
    case Types.FORM_SUBMISSION_STATUS:
      return {
        ...state,
        formSubmitted: action.payload.status,
      };
    default:
      return state;
  }
};

export default Reducer;
