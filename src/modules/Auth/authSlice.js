import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    authUser: null,
    role:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { username, jwt,userRole } = action.payload
            state.authUser = username
            state.token = jwt
            state.role = userRole
        },
        logOut: (state, action) => {
            state.authUser = null
            state.token = null
            state.role = null
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export const selectCurrentUser = (state) => state.auth.authUser
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentUserRole = (state) => state.auth.role

export default authSlice.reducer