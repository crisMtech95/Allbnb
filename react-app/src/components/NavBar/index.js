import "./NavBar.css"
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";

const NavBar = ({setShowLogin, setShowSignup, setShowItemForm}) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [showBtns, setShowBtns] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  return (
    <nav className="nav__bigContainer">
          <div className='navBar__homeIconLink'>
            <NavLink to='/' exact={true}>
              <div className="navBar__homeIcon"></div>
            </NavLink>
          </div>
          <div id="navBar__searchDiv">
            <div className="navBar__searchDiv2">
              <input id="searchBar" value={searchInput} type="search"
                      onChange={(e) => setSearchInput(e.target.value)}
                      onKeyUp={() => console.log("if key===enter..etc... enter is 13 btw")}
                      placeholder="State, city or town"
                      />
              <div className="navBar__searchIcon"></div>
            </div>
          </div>
          <button className="navBar__userIconBtn"
              onClick={() => setShowBtns(!showBtns)}
          >
          <div className="navBar__userIcon"/>
          </button>
          {showBtns &&
          <div className="navBar__userAuth">
            {sessionUser ?
              <div className="navBar__userLinkDiv">
                <NavLink to={`/users/${sessionUser.id}`}
                  onClick={()=> setShowBtns(false)}
                >Profile</NavLink>
                <NavLink to="/item-form" exact={true} activeClassName="active"
                  onClick={() => {
                    setShowItemForm(true)
                    setShowBtns(false)
                  }}
                >
                  Post Item
                </NavLink>
                {/* <LogoutButton /> */}
                <NavLink to="/"
                  onClick={()=> {
                    setShowBtns(false)
                    dispatch(logout())
                  }}
                >Log out</NavLink>
              </div>
              :
              <div className="navBar__userLinkDiv">
                <NavLink to='/login' exact={true} activeClassName='active'
                  onClick={()=> {
                    setShowLogin(true)
                    setShowBtns(false)
                  }}
                >
                  Login
                </NavLink>
                <NavLink to='/sign-up' exact={true} activeClassName='active'
                  onClick={()=> {
                    setShowSignup(true)
                    setShowBtns(false)
                  }}
                >
                  Sign Up
                </NavLink>
              </div>
            }
          </div>
          }

          {/* <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink> */}


    </nav>
  );
}

export default NavBar;
