export const actives = (sensors) => sensors.filter(sensor => sensor.status && sensor.type=='wather-sensor' && sensor.value && sensor.value.data == true).length
