import React, { useState, useEffect, useRef } from 'react';

import "./Cities.css"

const Cities = () => {


    return (
        <div className="homePage__citiesBigContainer">
            <div className="homePage__citiesContainer">
              <h1>Explore nearby</h1>
              <div className="homePage__cities">
                <div className="homePage__city">
                    <div className="homePage__cityimgDiv">
                        <img className="homePage__cityimg homePage__cityimgNyc"></img>
                    </div>
                    <div className="homePage__cityInfoDiv">
                      <h4>New York</h4>
                      <p>Capital of the World</p>
                    </div>
                </div>
                <div className="homePage__city">
                    <div className="homePage__cityimgDiv">
                      <img className="homePage__cityimg homePage__cityimgBoston"></img>
                    </div>

                    <div className="homePage__cityInfoDiv">
                      <h4>Boston</h4>
                      <p>Come for the baked beans and stay for the adcent</p>
                    </div>
                </div>
                <div className="homePage__city">
                    <div className="homePage__cityimgDiv">
                      <img className="homePage__cityimg homePage__cityimgPhil"></img>
                    </div>
                    <div className="homePage__cityInfoDiv">
                      <h4>Philadelphia</h4>
                      <p>Philly Cheesesteakss?</p>
                    </div>
                </div>
                <div className="homePage__city">
                    <div className="homePage__cityimgDiv">
                      <img className="homePage__cityimg homePage__cityimgLa"></img>
                    </div>
                    <div className="homePage__cityInfoDiv">
                      <h4>Los Angeles</h4>
                      <p>Hollywood, beaches, parks, Diversity</p>
                    </div>

                </div>
                <div className="homePage__city">
                    <div className="homePage__cityimgDiv">
                        <img className="homePage__cityimg homePage__cityimgMiami"></img>
                    </div>
                    <div className="homePage__cityInfoDiv">
                      <h4>Miami</h4>
                      <p>try renting a boat!</p>
                    </div>

                </div>
                <div className="homePage__city">

                    <div className="homePage__cityimgDiv">
                        <img className="homePage__cityimg homePage__cityimgHus"></img>
                    </div>
                    <div className="homePage__cityInfoDiv">
                      <h4>Houston</h4>
                      <p>Yihaaaaaa!!</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Cities
