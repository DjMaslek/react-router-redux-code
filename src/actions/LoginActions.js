export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";

export function handleLogin(params, success, failure) {
  return dispatch => {
    dispatch({
      type: LOG_IN
    });

    fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(params)
    })
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
        if (json.status === "err") {
          failure();
          dispatch({
            type: LOG_IN_FAILURE,
            payload: {
              errorMsg: "The username or password you entered is incorrect"
            },
            error: true
          });
        } else {
          success();
          dispatch({
            type: LOG_IN_SUCCESS,
            payload: json
          });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: LOG_IN_FAILURE,
          payload: {
            errorMsg: "An error occurred"
          },
          error: true
        });
      });
  };
}

export function logOut() {
  return dispatch => {
    localStorage.removeItem("isLogged");
    dispatch({
      type: LOG_OUT
    });
    window.location.reload();
  };
}
