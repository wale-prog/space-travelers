import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk(
  'Rocket/getRockets',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    const responseData = await response.data;
    const data = responseData.map((item) => ({
      id: item.id,
      rocketName: item.rocket_name,
      description: item.description,
      flickrImages: item.flickr_images[0],
    }));
    return data;
  },
);

// {
//   if (item.id === action.payload.id) {
//     return { ...item, reserved: true };
//   }
//   return item;
// };

const initialState = [];
const rocketSlice = createSlice({
  name: 'Rocket',
  initialState,
  reducers: {
    reseverd(state, action) {
      const newstate = state.map((item) => {
        if (item.id !== action.payload) return item; return { ...item, reseverd: true };
      });
      return newstate;
    },
  },
  extraReducers: {
    [getRockets.fulfilled]: ((state, action) => [...state, ...action.payload]),
  },
});

export default rocketSlice.reducer;
export const rocketActions = rocketSlice.actions;
