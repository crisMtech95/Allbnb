import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPostThunk } from '../../store/post'
import Modal from "react-modal"
import "./ItemForm.css"

const ItemForm = ({ showItemForm, setShowItemForm, customModalStyles }) => {
  const [errors, setErrors] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [content, setContent] = useState();
  const optionsList = ['Houses','Bikes', 'Games', 'Motorcycles', 'Tools', 'Party Supplies', 'Camping Gear', 'Fitness Equipment/Spots', 'Others']
  const [cate, setCate] = useState(optionsList[0]);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();



  const onSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      userId: user.id,
      category: cate,
      title: title,
      imageUrl: imageUrl,
      address: address,
      city: city,
      state: state,
      price: price,
      lat: lat,
      lng: lng,
      content: content
    }
    dispatch(addPostThunk(obj))
    setShowItemForm(false)
  };

  // if (!user) {
  //   return <Redirect to='/' />;
  // }

  return (
    <Modal isOpen={showItemForm}
           style={customModalStyles}
           onRequestClose={()=> {
              setShowItemForm(false)
              }}>

      <form onSubmit={onSubmit} className="itemForm__formDiv">
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="postForm__splitDiv">
          <div className="postForm__labelsDiv">
            <label>Title</label>
          </div>
            <input className="postForm__fields"
              name='title'
              type='text'
              // placeholder='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          <div className="postForm__labelsDiv">
            <label>Address</label>
          </div>
            <input className="postForm__fields"
              name='Address'
              type='text'
              // placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          <div className="postForm__labelsDiv">
            <label>City</label>
          </div>
            <input className="postForm__fields"
              name='City'
              type='text'
              // placeholder='City'
              value={city}
              onChange={(e)=> setCity(e.target.value)}
              required
            />
          <div className="postForm__labelsDiv">
            <label>State</label>
          </div>
            <input className="postForm__fields"
              name='State'
              type='text'
              // placeholder='State'
              value={state}
              onChange={(e)=> setState(e.target.value)}
              required
            />
              <div className="postForm__labelsDiv">
                <label>Price</label>
              </div>
                <input className="postForm__fields"
                  name='Price'
                  // placeholder='Price'
                  value={price}
                  onChange={(e)=> setPrice(e.target.value)}
                  required
                />
        </div>
        <div className="postForm__splitDiv">
          {/* <div>
            <label>Latitude</label>
          </div>
            <input
              name='Latitude'
              placeholder='Latitude'
              value={lat}
              onChange={(e)=> setLat(e.target.value)}
            />
          <div>
            <label>Longitude</label>
          </div>
            <input
              name='Longitude'
              placeholder='Longitude'
              value={lng}
              onChange={(e)=> setLng(e.target.value)}
            /> */}
          <div className="postForm__labelsDiv">
            <label>Content</label>
          </div>
            <textarea className="postForm__fields postForm__textarea"
              name='Content'
              type='text'
              // placeholder='Content'
              value={content}
              onChange={(e)=> setContent(e.target.value)}
              required
            />
          <div className="postForm__labelsDiv">
            <label>Image Url</label>
          </div>
            <input className="postForm__fields"
              name='Image-Url'
              type='text'
              // placeholder='Image Url'
              value={imageUrl}
              onChange={(e)=> setImageUrl(e.target.value)}
              required
            />
          <div className="postForm__labelsDiv">
            <label>category</label>
          </div>
          <div
            className="postForm__selectDiv"
            >
            <select value={cate} onChange={(e) => setCate(e.target.value)} required>
              {optionsList.map((el, i) => (
                <option key={i} value={el}>{el}</option>
              ))}
            </select>
          </div>
          <div className="postForm__btnDiv">
            <button type='submit'>Create Post!</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ItemForm;
