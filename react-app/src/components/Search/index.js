import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./Search.css"

const Search = () => {
    // const searchRes = useSelector(state => state.searchRes)

    return (
        <div className="Search__container">
            <div className="search__title">
                <h2>Search Results</h2>
            </div>
            <div className="Search__songsContainer">
                {/* {searchRes?.items?.map(track => (

                ))} */}
            </div>
        </div>
    )
}

export default Search
