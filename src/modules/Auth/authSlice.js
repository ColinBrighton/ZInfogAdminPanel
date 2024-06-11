import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    authUser: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.authUser = action.payload;
        },
        logOut: (state, action) => {
            state.authUser = null
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export const selectCurrentUser = (state) => state.auth.authUser

export default authSlice.reducer