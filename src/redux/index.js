import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from './MissionSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
