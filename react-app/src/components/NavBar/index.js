import "./NavBar.css"
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from "react-redux";
import ItemForm from "../ItemForm";

const NavBar = ({setShowLogin, setShowSignup, setShowItemForm}) => {
  const sessionUser = useSelector(state => state.session.user)
  const [showBtns, setShowBtns] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  return (
    <nav className="nav__bigContainer">
          <NavLink to='/' exact={true} activeClassName='navBar__homeIconLink'>
            <div className="navBar__homeIcon"></div>
          </NavLink>
          <div id="navBar__searchDiv">
            <div className="navBar__searchIcon"></div>
            <input id="searchBar" value={searchInput} type="search"
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="State, city or town"
                    />
          </div>
          <button className="navBar__userIconBtn"
              onClick={() => setShowBtns(!showBtns)}
          >
            <div className="navBar__userIcon"/>
          </button>
          {showBtns &&
          <div className="navBar__userAuth">
            {sessionUser ?
              <div>
                <NavLink to="/item-form" exact={true} activeClassName="active"
                  onClick={() => setShowItemForm(true)}
                >
                  Post Item
                </NavLink>
                <LogoutButton />
              </div>
              :
              <div>
                <NavLink to='/login' exact={true} activeClassName='active'
                  onClick={()=> setShowLogin(true)}
                >
                  Login
                </NavLink>
                <NavLink to='/sign-up' exact={true} activeClassName='active'
                  onClick={()=> setShowSignup(true)}
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
