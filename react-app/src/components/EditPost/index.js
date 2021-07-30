import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal'
import { editPostThunk } from '../../store/post';

const EditPost = ({ post }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true)
  const [errors, setErrors] = useState([]);
  const [address, setAddress] = useState(post.address);
  const [city, setCity] = useState(post.city);
  const [state, setState] = useState(post.state);
//   const [imageUrl, setImageUrl] = useState(post.images[0].imageUrl);
  const [price, setPrice] = useState(post.price);
  const [lat, setLat] = useState(post.lat);
  const [lng, setLng] = useState(post.lng);
  const [content, setContent] = useState(post.content);
  // const [cate, setCate] = useState(post.cate);
  // const optionsList = ['Houses','Bikes', 'Games', 'Motorcycles', 'Tools', 'Party Supplies', 'Camping Gear', 'Fitness Equipment/Spots', 'Others']
  const user = useSelector(state => state.session.user);

  console.log(post)

  const onSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      id: post.id,
      userId: user.id,
      // category: cate,
    //   imageUrl: imageUrl,
      address: address,
      city: city,
      state: state,
      price: price,
      lat: lat,
      lng: lng,
      content: content
    }
    dispatch(editPostThunk(obj))
    
  };



  if (!user) {
    return <Redirect to='/' />;
  }

  return (
    <Modal isOpen={showModal} onRequestClose={()=> setShowModal(false)}>
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
        {/* <div>
            <label>Image Url</label>
            <input
            name='Image-Url'
            type='text'
            placeholder='Image Url'
            value={imageUrl}
            onChange={(e)=> setImageUrl(e.target.value)}
            />
        </div> */}
        {/* <div>
            <select value={cate} onChange={(e) => setCate(e.target.value)}>
            {optionsList.map((el, i) => (
                <option key={i} value={el}>{el}</option>
            ))}
            </select>
        </div> */}
            <button type='submit'>Edit Post!</button>
        </form>
    </Modal>
  );
};

export default EditPost;
