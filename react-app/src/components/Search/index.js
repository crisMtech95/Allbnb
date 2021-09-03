import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Map from '../Map';
import Post from '../Post'
import "./Search.css"
import { getSearch, getSearchThunk } from '../../store/search';

const Search = ({ searchInput }) => {
    const searchRes = useSelector(state => Object.values(state.search))
    // const searchRes = useSelector(state => state.searchRes)
    const dispatch = useDispatch()
    const optionsList = ['Houses','Bikes', 'Games', 'Motorcycles', 'Tools', 'Party Supplies', 'Camping Gear', 'Fitness Equipment/Spots', 'Others']
    const [filteredBy, setFilteredBy] = useState([])
    const [cate, setCate] = useState(optionsList[0])
    const [showList, setShowList] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [detectChange, setDetectChange] = useState(false)
    const [price, setPrice] = useState(0)

    useEffect(async() => {
        // console.log(filteredBy)
       let result =  await dispatch(getSearchThunk({"city": searchInput}))

       if (filteredBy.length && price > 0) {
           // console.log("THIS IS THE RESULT", result)
           let filtered = result.search.filter(el => el.price <= price && filteredBy.includes(el.category.type))
           console.log("THIS IS THE FILTERED LIST", filtered)
           await dispatch(getSearch({"search": filtered }))
        } else if (filteredBy.length) {
           // console.log(searchInput)
           console.log("THIS IS THE TYPE VALUES TO FILTER", filteredBy)
           let filtered = result.search.filter(el => filteredBy.includes(el.category.type))
           // console.log("THIS IS THE FILTERED LIST", filtered)
           await dispatch(getSearch({"search": filtered }))
       } else if (price > 0) {
            // console.log("THIS IS THE RESULT", result)
            let filtered = result.search.filter(el => el.price <= price)
            console.log("THIS IS THE FILTERED LIST", filtered)
            await dispatch(getSearch({"search": filtered }))
        } else {
            await dispatch(getSearchThunk({"city": searchInput}))
        }
    }, [detectChange, price])

    return (
        <div className="Search__container">
            <div className="Search__bigResContainer">
                <div className="search__title">
                    <h2>Search Results:</h2>
                </div>
                <div className="Search__resContainer">
                    <div className="Search__filterContainer">
                        <div>
                            <button
                                className="Search__labelsDiv"
                                onClick={() => setShowList(!showList)}>
                                <label>category</label>
                            </button>
                        </div>
                        <div>
                            <button
                                className="Search__labelsDiv"
                                onClick={() => setShowPrice(!showPrice)}>
                                <label>Price</label>
                            </button>
                        </div>
                        {showPrice &&
                            <div className="Search__rangeDiv">
                                <div className="Search__currentPrice">${price}</div>
                                <p>$0</p>
                                <input
                                    type="range"
                                    min={0}
                                    max={1000}
                                    step={10}
                                    value={price}
                                    onChange={(e) => {
                                        console.log(price)
                                        setPrice(e.target.value)
                                        console.log(price)
                                    }}
                                    ></input>
                                    <p>$1000</p>
                            </div>
                        }
                    </div>
                {showList &&
                <div className="Search__typesDiv">
                    {optionsList.map((el, i) => (
                        <div key={i}>
                            <input type="checkbox" value={el}
                                onChange={(e) => {
                                    // console.log(e.target)
                                    // console.log(e.target.checked)
                                    setDetectChange(!detectChange)
                                    if (e.target.checked) {
                                        filteredBy.push(e.target.value)
                                    }
                                    if (!e.target.checked) {
                                        let index = filteredBy.indexOf(e.target.value)
                                        filteredBy.splice(index, 1)
                                    }
                                    // console.log("THIS IS THE FILTEREDARR", filteredBy)

                                }}
                            ></input>
                            <label>{el}</label>
                        </div>
                    ))}
                </div>}
                    {searchRes.length > 0 ?
                        searchRes.map(post => {
                                return (<Post key={post.id} post={post}/>)
                        }):
                        <div className="Search__noResults">
                            <p>Found 0 matches</p>
                        </div>
                    }
                </div>
            </div>
            <div className="search__mapsDiv">
                <Map />
            </div>
        </div>
    )
}

export default Search
