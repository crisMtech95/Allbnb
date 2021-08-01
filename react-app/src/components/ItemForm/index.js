import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPostThunk } from '../../store/post'
import Modal from "react-modal"

const ItemForm = ({ showItemForm, setShowItemForm, customModalStyles }) => {
  const [errors, setErrors] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [content, setContent] = useState();
  const [cate, setCate] = useState();
  const optionsList = ['Houses','Bikes', 'Games', 'Motorcycles', 'Tools', 'Party Supplies', 'Camping Gear', 'Fitness Equipment/Spots', 'Others']
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();



  const onSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      userId: user.id,
      category: cate,
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
  };

  if (!user) {
    return <Redirect to='/' />;
  }

  return (
    <Modal isOpen={showItemForm}
           style={customModalStyles}
           onRequestClose={()=> {
              setShowItemForm(false)
              }}>

      <form onSubmit={onSubmit}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label>Address</label>
          <input
            name='Address'
            type='text'
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>City</label>
          <input
            name='City'
            type='text'
            placeholder='City'
            value={city}
            onChange={(e)=> setCity(e.target.value)}
          />
        </div>
        <div>
          <label>State</label>
          <input
            name='State'
            type='text'
            placeholder='State'
            value={state}
            onChange={(e)=> setState(e.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            name='Price'
            placeholder='Price'
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Latitude</label>
          <input
            name='Latitude'
            placeholder='Latitude'
            value={lat}
            onChange={(e)=> setLat(e.target.value)}
          />
        </div>
        <div>
          <label>Longitude</label>
          <input
            name='Longitude'
            placeholder='Longitude'
            value={lng}
            onChange={(e)=> setLng(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <input
            name='Content'
            type='text'
            placeholder='Content'
            value={content}
            onChange={(e)=> setContent(e.target.value)}
          />
        </div>
        <div>
          <label>Image Url</label>
          <input
            name='Image-Url'
            type='text'
            placeholder='Image Url'
            value={imageUrl}
            onChange={(e)=> setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <select value={cate} onChange={(e) => setCate(e.target.value)}>
            {optionsList.map((el, i) => (
              <option key={i} value={el}>{el}</option>
            ))}
          </select>
        </div>
          <button type='submit'>Create Post!</button>
      </form>
    </Modal>
  );
};

export default ItemForm;
