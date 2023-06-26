import createSagaMiddleware from 'redux-saga';
import { configureStore} from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlices';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: authReducer,
    middleware: [sagaMiddleware],
  });
  
  sagaMiddleware.run(rootSaga);
  export default store


