import React, { useContext, createContext, useReducer } from 'react';

import {
  reducer as notificationReducer,
  initialState as initialNotificationState
} from './Notification-reducer';

const notificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const notification = useReducer(notificationReducer, initialNotificationState);

  return (
    <notificationContext.Provider value={notification}>
      {children}
    </notificationContext.Provider>
  );
}

// Retorna state e dispatch
const useNotification = () => (
  useContext(notificationContext)
);

export {
  NotificationProvider as default,
  useNotification
};
