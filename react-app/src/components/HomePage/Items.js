import React, { useState, useEffect, useRef } from 'react';

import "./Items.css"

const Items = () => {

    return (
        <div className="homePage__itemsBigContainer">
            <div className="homePage__itemsContainer">
              <h1>Popular Items</h1>
              <div className="Homepage__items">
                <div className="Homepage__item">
                  <div><img className=""/></div>
                  <div>
                    <h3>Random Title</h3>
                  </div>
                </div>
              </div>
              <div className="Homepage__items">
                <div className="Homepage__item">
                  <div><img className=""/></div>
                  <div>
                    <h3>Random Title</h3>
                  </div>
                </div>
              </div>
              <div className="Homepage__items">
                <div className="Homepage__item">
                  <div><img className=""/></div>
                  <div>
                    <h3>Random Title</h3>
                  </div>
                </div>
              </div>


              <div className="Homepage__items">
                <div className="Homepage__item">
                  <div><img className=""/></div>
                  <div>
                    <h3>Random Title</h3>
                  </div>
                </div>
              </div>

              <div className="Homepage__items">
                <div className="Homepage__item">
                  <div><img className=""/></div>
                  <div>
                    <h3>Random Title</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Items
