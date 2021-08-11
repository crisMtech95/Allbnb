import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import Modal from 'react-modal'

const SignUpForm = ({ showSignup, setShowSignup, customModalStyles}) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      setShowSignup(false)
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  // if (user) {
  //   return <Redirect to='/' />;
  // }

  return (
    <Modal
      isOpen={showSignup}
      style={customModalStyles}
      onRequestClose={()=> setShowSignup(false)}>

      <form onSubmit={onSignUp} className="itemForm__form">
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="postForm__labelsDiv">
          <label>Username</label>
        </div>
          <input className="postForm__fields"
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            required
          ></input>
        <div className="postForm__labelsDiv">
          <label>Email</label>
        </div>
          <input className="postForm__fields"
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            required
          />
        <div className="postForm__labelsDiv">
          <label>Password</label>
        </div>
          <input className="postForm__fields"
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            required
          />
        <div className="postForm__labelsDiv">
          <label>Repeat Password</label>
        </div>
          <input className="postForm__fields"
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          />
        <div className="postForm__btnDiv">
          <button type='submit'>Sign Up</button>
        </div>
      </form>

    </Modal>
  );
};

export default SignUpForm;
