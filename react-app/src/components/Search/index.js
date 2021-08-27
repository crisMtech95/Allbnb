import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Map from '../Map';
import Post from '../Post'
import "./Search.css"

const Search = () => {
    const searchRes = useSelector(state => Object.values(state.search))
    // const searchRes = useSelector(state => state.searchRes)

    return (
        <div className="Search__container">
            <div className="Search__bigResContainer">
                <div className="search__title">
                    <h2>Search Results</h2>
                </div>
                <div className="Search__resContainer">
                    {searchRes?.map(post => (
                        <Post key={post.id} post={post}/>
                        ))}
                </div>
            </div>
            <div className="search__mapsDiv">
                <Map />
            </div>
        </div>
    )
}

export default Search
