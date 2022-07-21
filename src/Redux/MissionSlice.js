import { createSlice } from '@reduxjs/toolkit';

const initialMissionState = ({
  missionId: '',
  missionName: '',
  description: '',
});

const missionSlice = createSlice({
  name: 'mission',
  initialState: initialMissionState,
  reducers: {},
});
export default missionSlice.reducer;
export const missionActions = missionSlice.actions;
