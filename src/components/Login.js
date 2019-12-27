import React, { useState } from 'react';

const loginData = {
    id:'test',
    pw:'test'
}

const Login = ({ crt, status, onLogin }) => {
    
  const [cid, setId] = useState('');
  const [cpwd, setPwd] = useState('');
  const onIdChange = e => setId(e.target.value);
  const onPwdChange = e => setPwd(e.target.value);
  const onSubmit = e => {
      e.preventDefault()
      
      const {id, pw} = loginData
      if (cid === id && cpwd === pw) {
          console.log('ok to go')
          onLogin()
      }
  }

  return (
    <>
    {!status
      ? 
    <div>
      <p>{crt}</p>
      <form onSubmit={onSubmit}>
        <input
          value={cid}
          placeholder="아이디"
          onChange={onIdChange}
        />
        <input
          value={cpwd}
          placeholder="패스워드"
          onChange={onPwdChange}
          type="password"
        />
        <button type="submit">확인</button>
      </form>
    </div>
    :
    <div>안녕하세요</div>
    }
    </>
  );
}

export default Login;
