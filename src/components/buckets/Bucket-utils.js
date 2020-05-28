export const actives = (sensors) =>
  sensors.filter(
    (sensor) =>
      sensor.status &&
      sensor.type === "wather-sensor" &&
      sensor.value &&
      sensor.value.data === true
  ).length;

export const sensorVolume = (sensors) =>
  sensors.filter((sensor) => sensor.type === "wather-sensor").length;
