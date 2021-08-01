import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    history.push("/")
    await dispatch(logout());
  };

  return (
  <div>
    <button onClick={onLogout}>Logout</button>
  </div>
  );
};

export default LogoutButton;
