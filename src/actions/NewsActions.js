export const GET_NEWS = "GET_NEWS";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GET_NEWS_FAILURE";

export function getNews() {
  return dispatch => {
    dispatch({
      type: GET_NEWS
    });

    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/news `)
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
          dispatch({
            type: GET_NEWS_FAILURE,
            payload: {
              errorMsg: json.message
            },
            error: true
          });
        } else {
          dispatch({
            type: GET_NEWS_SUCCESS,
            payload: json
          });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_NEWS_FAILURE,
          payload: {
            errorMsg: "An error occurred"
          },
          error: true
        });
      });
  };
}
