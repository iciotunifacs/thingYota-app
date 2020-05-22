export const actives = (sensors) => sensors.filter(sensor =>  sensor.value && sensor.value.data == true).length
