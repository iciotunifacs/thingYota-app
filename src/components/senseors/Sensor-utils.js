export const mockSensorsForTarget = (sensors) => {
  return sensors.map((sensor, key) => {
    let newSensor = {
      ...sensor,
      key: sensor._id.toString(),
      title: sensor.name
    }

    if (sensor.device_parent && sensor.device_parent.name) {
      newSensor.description = sensor.device_parent.name
    }

    return newSensor
  })
}
