import { configureStore } from '@reduxjs/toolkit';
import authReducer, { checkTokenExpirationMiddleware } from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(checkTokenExpirationMiddleware),
});

export {store};