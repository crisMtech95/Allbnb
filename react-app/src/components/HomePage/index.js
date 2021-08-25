import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cities from './Cities';
import Items from "./Items"
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch()
    const { userId }  = useParams();

    // useEffect(async() => {

    // }, [])


    return (
      <div className="homePage__mainContainer">
          <div className="homePage__bgImageDiv">
              <div className="homePage__bgImage"></div>
              <span className="homePage__h2">Plan everything for your trip! in one place</span>
          </div>

          <Cities />
          
          <Items />

          <div className="Homepage__mainFooter">
            <div className="Homepage__footer">
              <a className="Footer__githubDiv" href="https://github.com/crisMtech95" target="_blank"
                  ><div className="Footer__githubDiv" />
              </a>
              <div className="Footer__">© 2021 Allbnb, Inc.</div>
              <a className="Footer__Linked-In" href="https://www.linkedin.com/in/cristhian-morales-526b85215/" target="_blank">
                  <div className="Footer__linkedInDiv"/>
              </a>
            </div>
          </div>
      </div>
    );
}
export default HomePage;
