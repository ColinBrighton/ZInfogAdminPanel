import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@modules/Auth/authSlice";

// Combine all reducers.

// Define your initial state
const initialState = {
  auth: {}, // Add other reducers and their initial state here
  // Add other states here
};

const appReducer = combineReducers({
    auth:authReducer,
  });
  
  const rootReducer = (state, action) => {
    if (action.type === 'auth/logOut') {
      state = initialState;
    }
    return appReducer(state, action);
  };
  
  export default rootReducer;