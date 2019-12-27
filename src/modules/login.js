import { delay, put, takeEvery } from 'redux-saga/effects';

/* 액션 타입 선언 */
const LOGIN = 'login/LOGIN';
const LOGIN_ASYNC = 'login/LOGIN_ASYNC';

/* 액션 생성함수 선언 */
export const dologin = () => ({
  type: LOGIN
})
export const dologinAsync = () => ({
  type: LOGIN_ASYNC
})

function* loginSaga() {
  yield delay(1000)
  yield put(dologin())
}

export function* loginAllSaga() {
  yield takeEvery(LOGIN_ASYNC, loginSaga)
}
/* 초기 상태 선언 */
const initialState = {
  status:false
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        status: !state.status
      };
  default:
      return state;
  }
}
