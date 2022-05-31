import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		roomId: null,
	},
	reducers: {
		enterRoom: (state, action) => {
			state.roomId = action.payload;
		},
	},
});

export const { enterRoom } = appSlice.actions;


export const selectRoomID = state => state.app.roomId;

export default appSlice.reducer;
