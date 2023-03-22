import { Types } from "./ActionTypes";

export const ActionCreators = {
  addUser: (user) => ({ type: Types.ADD_USER, payload: { user } }),

  login: (user) => ({ type: Types.LOGIN, payload: { user } }),

  updateProfile: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),

  signUpStatus: (status) => ({
    type: Types.SIGN_UP_STATUS,
    payload: { status },
  }),

  formSubmissionStatus: (status) => ({
    type: Types.FORM_SUBMISSION_STATUS,
    payload: { status }}),
};
