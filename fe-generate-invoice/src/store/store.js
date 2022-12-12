// import { configureStore } from '@reduxjs/toolkit'
// import storage from 'redux-persist/lib/storage'
// import { persistReducer, persistStore } from 'redux-persist'
// import { combineReducers } from 'redux'
// import profileSlice from './GetProfile'

// const reducer = combineReducers({
//     profile : profileSlice
// })

// const persistConfig = {
//     key: 'root',
//     storage
// }

// const persistedReducer = persistReducer(persistConfig, reducer)
// // 
// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// })

// export const persistor = persistStore(store)