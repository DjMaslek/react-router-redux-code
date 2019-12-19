import {
  LOG_IN,
  LOG_OUT,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS
} from "../actions/LoginActions";

const initialState = {
  userId: null,
  errorMsg: "",
  isFetching: false
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isFetching: true
      };
    case LOG_OUT:
      return {
        ...state,
        userId: null,
        errorMsg: ""
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        userId: action.payload.data.id,
        isFetching: false
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload.errorMsg
      };
    default:
      return state;
  }
}
