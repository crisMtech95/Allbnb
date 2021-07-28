import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';


const ItemForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    // const data = await dispatch(login(email, password));
    // if (data) {
    //   setErrors(data);
    // }
  };



  if (!user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>Address</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>City</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
        <button type='submit'>Login</button>
    </form>
  );
};

export default ItemForm;
