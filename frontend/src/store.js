import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import coursesReducer from './features/courseSlice';

// Redux Persist Configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, coursesReducer);

// Configure Store with custom middleware to ignore serializable checks for persist actions
const store = configureStore({
  reducer: {
    courses: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for serializability check
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Persistor to handle persisting the store
const persistor = persistStore(store);

export { store, persistor };
