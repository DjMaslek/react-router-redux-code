import {
  GET_NEWS,
  GET_NEWS_FAILURE,
  GET_NEWS_SUCCESS
} from "../actions/NewsActions";

const initialState = {
  data: [],
  isFetching: false,
  errorMsg: ""
};

export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        isFetching: true
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isFetching: false
      };
    case GET_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload.errorMsg
      };
    default:
      return state;
  }
}
