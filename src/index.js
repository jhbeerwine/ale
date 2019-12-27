import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware(); 
const store = createStore(rootReducer, 
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware, // 사가 미들웨어를 적용하고
      )
    )); // 스토어를 만듭니다.
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();