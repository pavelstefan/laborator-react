import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './utils';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        firstName: '',
        lastName: '',
    },
    reducers: {
        updateProfile: (state, action) => {
            state.email = action.payload.email || state.email;
            state.firstName = action.payload.firstName || state.firstName;
            state.lastName = action.payload.lastName || state.lastName;
        }
    },
})

export const { updateProfile } = userSlice.actions

export const profileSelector = (state: RootState) => {
    return state.userReducer;
}

export default userSlice.reducer

