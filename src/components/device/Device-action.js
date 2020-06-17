import { apiRest } from "../../utils/request";

export const getDevice = (dispatch, { limit, page, deviceId }) => {
  dispatch({
    type: "FETCHING",
  });

  let url = "/device";

  if (deviceId) {
    url = `/device/${deviceId}`;
  }

  apiRest
    .get(url, {
      params: {
        limit,
        page,
      },
    })
    .then((data) => {
      dispatch({
        type: "FETCHED",
        payload: data.data.data,
        metadata: data.data.metadata,
      });
    })
    .catch((error) => {
      dispatch({
        type: "ERRO",
        error: error,
      });
    });
};

export const createDevice = async (
  dispatch,
  {
    name,
    mac_addres,
    url = "/device"
  }
) => {
  apiRest
    .post(url, {
      name,
      mac_addres,
      type: "Arduino"
    })
    .then((data) => {
      dispatch({
        type: "CREATE",
        payload: data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "ERRO",
        error: error,
      });
      console.log(error);
    });
};
