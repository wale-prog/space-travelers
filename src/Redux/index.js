import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './MissionSlice';
import rocketReducer from './RocketSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketReducer,
  },
});
export default store;
