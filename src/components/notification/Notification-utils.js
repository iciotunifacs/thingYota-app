import { v1 as makeId } from 'uuid';

export const newNotification = ({origin, payload}) => {
  return {
    id: makeId(),
    origin,
    payload
  }
}
