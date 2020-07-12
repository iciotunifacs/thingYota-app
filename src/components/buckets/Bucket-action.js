import { apiRest } from "../../utils/request";

export const getBucket = (dispatch, { limit, page=0, bucketId }) => {
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
        offset:page,
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

export const createBucket = ({
  name,
  type,
  volume = {
    data: {
      value: 0,
      entity: "L"
    }
  }
}) => {
  let url = "/bucket";
  return apiRest.post(url, {
    name,
    type,
    volume
  });
};

export const addRelationshipInBucket = ({ id, item, type }) => {
  let url = `/bucket/${id}/relationship`;
  let sendData = {
    to: {
      id: item._id,
    },
    type,
  };
  return apiRest.post(url, sendData);
};

export const createNewBucket = async (
  dispatch,{
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
    const bucket = await createBucket({ name, type, volume });

    if (bucket.data.data && bucket.data.data._id) {
      await sensors.forEach((sensor) => {
        addRelationshipInBucket({
          id: bucket.data.data._id,
          item: sensor,
          type: "Sensor",
        });
      });

      await actors.forEach((actor) => {
        addRelationshipInBucket({
          id: bucket.data.data._id,
          item: actor,
          type: "Actor",
        });
      });
    }

    const newBucket = { ...bucket.data.data, Sensors: sensors, Actors: actors };

    dispatch({
      type: "CREATED",
      payload: newBucket,
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
