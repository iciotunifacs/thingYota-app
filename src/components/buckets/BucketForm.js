import React, { useState, useReducer, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Switch,
  Divider,
} from "antd";

import { PlusOutlined } from "@ant-design/icons";

import Target from "../target/TargetView-container";

import {
  initialState as initialSensorsState,
  reducer as sensorsReducer,
} from "../senseors/Sensor-reducer";

import { getSensors } from "../senseors/Sensor-action";
import { mockSensorsForTarget } from "../senseors/Sensor-utils";

import {
  initialState as intialActorsState,
  reducer as actorReducer,
} from "../actors/Actor-reducer";

import { getActors } from "../actors/Actor-action";
import { mockActorsForTarget } from "../actors/Actor-utils";

import {
  initialState as intialBucketState,
  reducer as bucketReducer,
} from "./Buckets-reducer";

import { createNewBucket } from "./Bucket-action";

const BucketForm = (props) => {
  const [sensorsState, sensorsDispatch] = useReducer(
    sensorsReducer,
    initialSensorsState
  );
  const [actorsState, actorsDispatch] = useReducer(
    actorReducer,
    intialActorsState
  );

  const [bucketState, bucketDispatch] = useReducer(
    bucketReducer,
    intialBucketState
  );

  const [listTypes, setListTypes] = useState(["whater-sensor"]);
  const [otherTypeItem, setOtherTypeItem] = useState("");

  const addTypeItem = () => {
    setListTypes([...listTypes, otherTypeItem]);
  };

  const [selectSensor, setSelectSensor] = useState([]);
  const [selectActor, setSelectActor] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("whater-sensor");
  const [volume, setVolume] = useState(1);
  // const [state, setState] = useState(true);
  const [complete, setComplete] = useState(false)

  const handleCreate = (e) => {
    createNewBucket(bucketDispatch, {
      name,
      type,
      volume: {
        data: {value: volume, entity: "L"}
      },
      sensors: sensorsState.data.filter((item) =>
        selectSensor.includes(item._id)
      ),
      actors: actorsState.data.filter((item) =>
        selectActor.includes(item._id)
      ),
    }).then(data => {
      setComplete(data)
    })
  }

  let notEnable = !name || name.length < 3 || !type
  console.log(notEnable)

  useEffect(() => {
    // get sensors
    getSensors(sensorsDispatch, {
      params: { populate: true },
    });

    // get actors
    getActors(actorsDispatch, {
      params: { populate: true },
    });
  }, []);

  if (sensorsState.loading || actorsState.loading)
    return <div>Loading....</div>;

  if (sensorsState.error || actorsState.error) return <div>Error...</div>;

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 12 }}
      layout="hor izontal"
      initialValues={{ size: "small" }}
    >
      <Form.Item label="Name">
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>
      <Form.Item label="Select">
        <Select
          defaultValue={type}
          onChange={(e) => setType(e.value)}
          dropdownRender={(menu) => (
            <div>
              {menu}
              <Divider style={{ margin: "4px 0" }} />
              <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
                <Input
                  style={{ flex: "auto" }}
                  value={otherTypeItem}
                  onChange={(e) => setOtherTypeItem(e.target.value)}
                />
                <a
                  style={{
                    flex: "none",
                    padding: "8px",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={addTypeItem}
                >
                  <PlusOutlined /> Add item
                </a>
              </div>
            </div>
          )}
        >
          {listTypes.map((item) => {
            return <Select.Option value={item}>{item}</Select.Option>;
          })}
        </Select>
      </Form.Item>
      <Form.Item label="Volume">
        <InputNumber
          value={volume}
          onChange={(e) => setVolume(parseFloat(e))}
        />
      </Form.Item>

      {sensorsState.data && (
        <Form.Item label='Sensores'>
          <Target
            data={mockSensorsForTarget(sensorsState.data)}
            target={selectSensor}
            setTarget={setSelectSensor}
          />
        </Form.Item>
      )}
      {actorsState.data && (
        <Form.Item label="Atuadores">
          <Target
            data={mockActorsForTarget(actorsState.data)}
            target={selectActor}
            setTarget={setSelectActor}
          />
        </Form.Item>
      )}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={handleCreate}
          disabled={notEnable}
        >
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BucketForm;
