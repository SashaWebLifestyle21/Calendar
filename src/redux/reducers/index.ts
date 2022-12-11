import { combineReducers } from 'redux';
import authReducer from "./authReducer/authReducer";
import usersReducer from "./usersReducer/usersReducer";
import store from "../store/store";

export const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default rootReducer;
