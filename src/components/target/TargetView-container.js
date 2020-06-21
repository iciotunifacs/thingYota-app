import React, { useState } from "react";
import {
  Transfer,
} from "antd";

const TargetView = (props) => {

  let { data , target, setTarget } = props;
  const [select, setSelect] = useState([]);

  data = data.map((item, key) => {
    return { ...item, key: key.toString() };
  });

  const handleChange = (nextTargetKeys, direction, moveKeys) => {
    if (direction == "right") {
      setTarget([...target, ...nextTargetKeys])
    } else {
      setTarget([...target.filter(item => moveKeys.indexOf(item))])
    }
  };

  const habdleSelectChamge = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelect([...sourceSelectedKeys, ...targetSelectedKeys])
  };

  return (
    <Transfer
      dataSource={data}
      showSearch
      listStyle={{
        width: 250,
        height: 300,
      }}
      operations={["to right", "to left"]}
      targetKeys={target}
      onChange={handleChange}
      onSelectChange={habdleSelectChamge}
      selectedKeys={select}
      render={(item) => `${item.title}-${item.description}`}
    />
  );
};

export default TargetView
