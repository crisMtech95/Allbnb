import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'

function HomePage() {
  const dispatch = useDispatch()
  const { userId }  = useParams();

  return (
    <div className="homePage__mainContainer">
        <div className="homePage__bgImageDiv">
            <div className="homePage__bgImage"></div>
        </div>
    </div>
  );
}
export default HomePage;
