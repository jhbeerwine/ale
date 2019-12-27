import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../components/Login';
import { dologinAsync } from '../modules/login';

function LoginContainer() {
  // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
  const isLogin = useSelector(state => state.login.status);
  const crtCount = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  
  const onLogin = () => dispatch(dologinAsync());
  return <Login crt={crtCount} status={isLogin} onLogin={onLogin} />;
}

export default LoginContainer;