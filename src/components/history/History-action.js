import { apiRest } from "../../utils/request";

export const getHistory = (dispatch, { limit, page = 0 }) => {
  dispatch({
    type: "FETCHING",
  });

  let url = "/history";

  apiRest
    .get(url, {
      params: {
        limit,
        offset: page,
      },
    })
    .then((data) => {
      dispatch({
        type: "FETCHED",
        history: data.data.data,
        metadata: data.data.metadata,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "ERRO",
        error: error,
      });
    });
};
