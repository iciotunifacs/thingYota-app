import { apiRest } from "../../utils/request";

export const getBucket = (dispatch, { limit, page, bucketId }) => {
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

export const createBucket = ({ name, type }) => {
  let url = "/bucket";
  return apiRest.post(url, {
    name,
    type,
  });
};

export const addRelationshipInBucket = ({ id, item, type }) => {
  let url = `/bucket/${id}/relationship`;
  let sendData = {
    to: {
      id: item._id,
    },
    type
  };
  return apiRest.post(url, sendData);
};

export const createNewBucket = async (
  dispatch,
  { name, type, sensors = [], actors = [] }
) => {
  dispatch({
    type: "FETCHING",
  });

  try {
    const bucket = await createBucket({ name, type });

    if (bucket.data.data && bucket.data.data._id) {
      await sensors.forEach((sensor) => {
        addRelationshipInBucket({
          id: bucket.data.data._id,
          item: sensor,
          type: "Sensor",
        })
      });

      await actors.forEach((actor) => {
        addRelationshipInBucket({
          id: bucket.data.data._id,
          item: actor,
          type: "Actor"
        })
      });
    }

    const newBucket = {...bucket.data.data, Sensors: sensors, Actors: actors}

    dispatch({
      type: "CREATED",
      payload:newBucket
    })
    return newBucket
  } catch(error) {
    dispatch({
      type: "ERRO",
      error,
    });
    return error
  }
};
