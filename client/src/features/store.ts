// store.ts

import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, Context } from 'next-redux-wrapper';
import { authReducer } from './slices/authSlices';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: authReducer,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  export default store


