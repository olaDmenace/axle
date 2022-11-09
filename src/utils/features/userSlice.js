import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            localStorage.setItem('token', action.payload.token)
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user

export default userSlice.reducer