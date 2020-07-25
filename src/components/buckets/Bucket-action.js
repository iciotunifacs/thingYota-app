import { apiRest } from "../../utils/request";

export const getBucket = (
  dispatch,
  { limit, page = 0, bucketId, populate = null }
) => {
  dispatch({
    type: "FETCHING",
  });

  let url = "/bucket";

  if (bucketId) {
    url = `/bucket/${bucketId}`;
  }

  apiRest
    .get(url, {
      params: {
        limit,
        offset: page,
        populate,
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

export const createBucket = async (
  dispatch,
  {
    name,
    type,
    sensors = [],
    actors = [],
    volume = { data: { value: 0, entity: "L" } },
  }
) => {
  dispatch({
    type: "FETCHING",
  });

  try {
    const bucket = await apiRest.post("/bucket", {
      name,
      type,
      volume,
      Sensors: sensors.map((sensor) => sensor._id),
      Actors: actors.map((actor) => actor._id),
    });

    dispatch({
      type: "CREATED",
      payload: bucket,
    });
    return true;
  } catch (error) {
    dispatch({
      type: "ERRO",
      error,
    });
    return false;
  }
};
