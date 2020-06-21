export const mockSensorsForTarget = (sensors) => {
  return sensors.map((sensor, key) => {
    return {
      ...sensor,
      key: sensor._id.toString(),
      title: sensor.name
    }
  })
}
