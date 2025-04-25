import { createSlice } from '@reduxjs/toolkit';

const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    connected: false,
    deviceInfo: null,
  },
  reducers: {
    connectDevice(state, action) {
      state.connected = true;
      state.deviceInfo = action.payload;
    },
    disconnectDevice(state) {
      state.connected = false;
      state.deviceInfo = null;
    },
  },
});

export const { connectDevice, disconnectDevice } = deviceSlice.actions;
export default deviceSlice.reducer;