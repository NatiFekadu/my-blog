import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/articlelist');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Log In</h1>
      {error && <p className="error">{error}</p>}
      <label for="email"><b>Email</b></label>
      <input
      type="text"
        placeholder="your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='loginbutton' onClick={logIn}>Log In</button>
      <Link to="/create-account">Don't Have an account create one here</Link>
    </>
  );
};

export default LoginPage;
