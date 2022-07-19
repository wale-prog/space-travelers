import { createSlice } from '@reduxjs/toolkit';

const initialRocketState = ({
  id: '',
  rocketName: '',
  description: '',
  flickrImage: '',
});

const rocketSlice = createSlice({
  name: 'Rocket',
  initialState: initialRocketState,
  reducers: {

  },
});
export default rocketSlice.reducer;
export const rocketActions = rocketSlice.actions;
