import { configureStore, combineReducers } from "@reduxjs/toolkit";
import musicReducer from "./musicSlice";
const rootReducer = combineReducers({ music: musicReducer });
const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
