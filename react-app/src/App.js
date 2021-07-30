import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User/User';
import ItemForm from './components/ItemForm';
import HomePage from './components/HomePage';
import { authenticate } from './store/session';
import Modal from 'react-modal'

Modal.setAppElement("#root")
function App() {
  const [showLogin, setShowLogin] = useState(true)
  const [showSignup, setShowSignup] = useState(true)
  const [showItemForm, setShowItemForm] = useState(true)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

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
      <Switch>
        <Route path='/login' exact={true}>
          <Modal isOpen={showLogin}
            onRequestClose={()=> {
              setShowLogin(false)
              }}>
            <LoginForm />
          </Modal>
        </Route>
        <Route path='/sign-up' exact={true}>
          <Modal isOpen={showSignup} onRequestClose={()=> setShowSignup(false)}>
            <SignUpForm/>
          </Modal>
        </Route>
        <Route path='/item-form' exact={true}>
          <Modal isOpen={showItemForm}
            onRequestClose={()=> {
              setShowItemForm(false)
              }}>
            <ItemForm />
          </Modal>
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <HomePage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
