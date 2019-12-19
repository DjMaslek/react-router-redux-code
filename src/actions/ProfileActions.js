export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

export function getProfile() {
  return dispatch => {
    dispatch({
      type: GET_PROFILE
    });

    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1`)
      .then(
        response => {
          if (!response.ok) {
            throw response;
          }
          return response.json();
        },
        error => {
          console.log("An error occurred.", error);
        }
      )
      .then(json => {
        console.log(this);
        console.log("OK", json);
        if (json.status === "err") {
          dispatch({
            type: GET_PROFILE_FAILURE,
            payload: {
              errorMsg: json.message
            },
            error: true
          });
        } else {
          dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: json
          });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_PROFILE_FAILURE,
          payload: {
            errorMsg: "An error occurred"
          },
          error: true
        });
      });
  };
}
