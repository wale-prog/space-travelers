import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'Mission/getMissions',
  async () => {
    const response = await axios.get(apiUrl);
    const responseData = await response.data;
    const output = responseData.map((mission) => ({
      id: mission.mission_id,
      missionName: mission.mission_name,
      description: mission.description,
    }));
    return output;
  },
);

const initialState = [];
const missionSlice = createSlice({
  name: 'Mission',
  initialState,
  reducers: {
    missionOption(state, action) {
      const nextstate = state.map((item) => {
        if (item.id !== action.payload) return item;
        return { ...item, joined: !item.joined };
      });
      return nextstate;
    },
  },
  extraReducers: {
    [getMissions.fulfilled]: ((state, action) => [...state, ...action.payload]),
  },
});

export default missionSlice.reducer;
export const missionActions = missionSlice.actions;
