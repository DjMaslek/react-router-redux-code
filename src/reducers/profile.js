import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE
} from "../actions/ProfileActions";

const initialState = {
  data: [],
  isFetching: false,
  errorMsg: ""
};
export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        isFetching: true
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        data: [action.payload.data],
        isFetching: false
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload.errorMsg
      };
    default:
      return state;
  }
}
