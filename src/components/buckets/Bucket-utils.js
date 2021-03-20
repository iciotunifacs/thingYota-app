export const actives = (sensors) =>
  sensors.filter(
    (sensor) =>
      sensor.status &&
      sensor.type === "water-sensor" &&
      sensor.value &&
      sensor.value.data === true
  ).length;

export const sensorVolume = (sensors) =>
  sensors.filter((sensor) => sensor.type === "water-sensor").length;
