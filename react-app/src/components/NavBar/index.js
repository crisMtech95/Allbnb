import "./NavBar.css"
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout, login } from "../../store/session";
import { getSearchThunk } from "../../store/search"


const NavBar = ({setShowLogin, setShowSignup, setShowItemForm, searchInput, setSearchInput}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const sessionUser = useSelector(state => state.session.user)
  const [showBtns, setShowBtns] = useState(false)
  // const [searchInput, setSearchInput] = useState("")
  const searchVals = useSelector(state => state.search)
  let menuRef = useRef()
  let btnRef = useRef()

  useEffect(() => {
    //closes menu when user clicks outside of it
    const clickOutside = e => {
      if (!menuRef?.current?.contains(e.target) && !btnRef?.current?.contains(e.target)) {
        setShowBtns(false)
      }
  }
    document.addEventListener("mousedown", clickOutside)

    return ( ) => {
      document.removeEventListener("mousedown", clickOutside)
    }
  }, [])
  // useEffect(() => {
  //   console.log(menuRef)
  // }, [menuRef])

  return (
    <nav className="nav__bigContainer">
          <div className='navBar__homeIconLink'>
            <NavLink to='/' exact={true} onClick={() => {
              if (searchVals) {
                setSearchInput("")
                dispatch(getSearchThunk({"city": ""}))
              }
              }}>
              <div className={location.pathname === "/" || location.pathname.startsWith("/users") ? "navBar__homeIconWhite navBar__homeIcon" : "navBar__homeIconBlue navBar__homeIcon"}></div>
            </NavLink>
          </div>
          <div id="navBar__searchDiv">
            <div className="navBar__searchDiv2">
              {/* <div className="navBar__searchDropDown">
                <select><option></option></select>
              </div> */}
              <input id="searchBar" value={searchInput} type="search"
                      onChange={(e) => setSearchInput(e.target.value)}
                      onClick={(e) => history.push("/search")}
                      onKeyUp={() =>{
                        console.log("if key===enter..etc... enter is 13 btw")
                        dispatch(getSearchThunk({"city": searchInput}))
                        }}
                      placeholder="State, city or town"
                      />
              <div className="navBar__searchIconDiv">
                <div className="navBar__searchIcon"></div>
              </div>

            </div>
          </div>
          <button className="navBar__userIconBtn" ref={btnRef}
              onClick={() => setShowBtns(!showBtns)}
          >
            {sessionUser ?
            <div className="navBar__sessionUserDiv">
              <div className="navBar__sessionUserImgDiv"><div className="navBar__sessionUserImg"/></div>
              <div className="navBar__sessionUserImgDiv">
                  {sessionUser.imageUrl ?
                    <img src={sessionUser.imageUrl}/> :
                    <div className={"navBar__userIconBlue navBar__userIcon3"} />
                  }
                </div>
            </div> :

            <div className={location.pathname === "/" || location.pathname.startsWith("/users") ? "navBar__userIconWhite navBar__userIcon" : "navBar__userIconBlue navBar__userIcon"} />
            }
          </button>
          {showBtns &&
          <div className="navBar__userAuth">
            {sessionUser ?
              <div ref={menuRef} className="navBar__userLinkDiv">
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
              <div ref={menuRef} className="navBar__userLinkDiv">
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
                    dispatch(login("demo@aa.io", "password"))
                    setShowBtns(false)
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
