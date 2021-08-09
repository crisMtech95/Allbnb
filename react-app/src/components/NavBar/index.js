import "./NavBar.css"
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { getSearchThunk } from "../../store/search"

const NavBar = ({setShowLogin, setShowSignup, setShowItemForm}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const sessionUser = useSelector(state => state.session.user)
  const [showBtns, setShowBtns] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  // console.log("THIS IS THE LOCATION", location.pathname)
  //checking the Demo button

  return (
    <nav className="nav__bigContainer">
          <div className='navBar__homeIconLink'>
            <NavLink to='/' exact={true}>
              <div className={location.pathname === "/" ? "navBar__homeIconWhite navBar__homeIcon" : "navBar__homeIconBlue navBar__homeIcon"}></div>
            </NavLink>
          </div>
          <div id="navBar__searchDiv">
            <div className="navBar__searchDiv2">
              <div className="navBar__searchDropDown">
                <select><option></option></select>
              </div>
              <input id="searchBar" value={searchInput} type="search"
                      onChange={(e) => setSearchInput(e.target.value)}
                      onClick={(e) => history.push("/search")}
                      onKeyUp={() =>{
                        console.log("if key===enter..etc... enter is 13 btw")
                        dispatch(getSearchThunk({"city": searchInput}))
                        }}
                      placeholder="State, city or town"
                      />
              <div className="navBar__searchIcon"></div>

            </div>
          </div>
          <button className="navBar__userIconBtn"
              onClick={() => setShowBtns(!showBtns)}
          >
            <div className={location.pathname === "/" ? "navBar__userIconWhite navBar__userIcon" : "navBar__userIconBlue navBar__userIcon"} />
          </button>
          {showBtns &&
          <div className="navBar__userAuth">
            {sessionUser ?
              <div className="navBar__userLinkDiv">
                <button
                  onClick={()=> {
                    setShowBtns(false)
                    history.push(`/users/${sessionUser.id}`)
                  }}
                >Profile</button>
                <button
                  onClick={() => {
                    setShowItemForm(true)
                    setShowBtns(false)
                  }}
                >
                  Post Item
                </button>
                {/* <LogoutButton /> */}
                <button to="/"
                  onClick={()=> {
                    history.push("/")
                    setShowBtns(false)
                    dispatch(logout())
                  }}
                >Log out</button>
              </div>
              :
              <div className="navBar__userLinkDiv">
                <button
                  onClick={()=> {
                    setShowLogin(true)
                    setShowBtns(false)
                  }}
                >
                  Login
                </button>
                <button
                  onClick={()=> {
                    setShowSignup(true)
                    setShowBtns(false)
                  }}
                >
                  Sign Up
                </button>
                <button
                  onClick={()=> {
                    console.log("Demo button")
                  }}
                >
                  Demo User
                </button>
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
