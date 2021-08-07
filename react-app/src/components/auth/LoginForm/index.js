import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../../store/session';
import Modal from 'react-modal'

const LoginForm = ({ showLogin, setShowLogin, customModalStyles }) => {
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
      setShowLogin(false)
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // if (user) {
  //   return <Redirect to='/' />;
  // }

  return (
    <Modal isOpen={showLogin}
           style={customModalStyles}
           onRequestClose={()=> {
             setShowLogin(false)
             history.push("/")
             }}>
      <form onSubmit={onLogin} className="itemForm__form">
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="postForm__labelsDiv">
          <label htmlFor='email'>Email</label>
        </div>
          <input className="postForm__fields"
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        <div className="postForm__labelsDiv">
          <label htmlFor='password'>Password</label>
        </div>
          <input className="postForm__fields"
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <div className="postForm__btnDiv">
            <button type='submit'>Login</button>
          </div>
      </form>

    </Modal>
  );
};

export default LoginForm;
