import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm/index';
import SignUpForm from './components/auth/SignUpForm/index';
import NavBar from './components/NavBar/index';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User/User';
import ItemForm from './components/ItemForm';
import HomePage from './components/HomePage';
import SinglePost from './components/SinglePost';
import { authenticate } from './store/session';
import Modal from 'react-modal'
import Search  from './components/Search'


Modal.setAppElement("#root")
function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [showItemForm, setShowItemForm] = useState(false)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setShowSignup={setShowSignup}
              setShowLogin={setShowLogin}
              setShowItemForm={setShowItemForm}
              />
      <ItemForm customModalStyles={customModalStyles} showItemForm={showItemForm} setShowItemForm={setShowItemForm}/>
      <LoginForm customModalStyles={customModalStyles} showLogin={showLogin} setShowLogin={setShowLogin}/>
      <SignUpForm customModalStyles={customModalStyles} showSignup={showSignup} setShowSignup={setShowSignup}/>
      <Switch>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <Route path='/users/:userId' exact={true} >
          <User />
        </Route>
        <Route path="/posts/:postId">
              <SinglePost />
        </Route>
        <Route  path='/' exact={true}>
            <HomePage />
        </Route>
        <Route path="/search">
            <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
