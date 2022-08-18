import {configureStore} from '@reduxjs/toolkit';
import {loginReducer} from '../screens/Login/LoginSlice';
import HomeReducer from '../screens/Home/HomeSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    home: HomeReducer,
  },
});
export default store;
