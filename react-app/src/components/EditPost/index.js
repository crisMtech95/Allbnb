import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal'
import { editPostThunk } from '../../store/post';
// import "./EditPost.css"

const EditPost = ({ post, setShowEditMenu }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true)
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("")
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


  const onSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      id: post.id,
      userId: user.id,
      title: title,
      address: address,
      city: city,
      state: state,
      price: price,
      lat: lat,
      lng: lng,
      content: content
    }
    dispatch(editPostThunk(obj))
    setShowEditMenu(false)
  };

  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  if (!user) {
    return <Redirect to='/' />;
  }

  return (
    <Modal
        isOpen={showModal}
        onRequestClose={()=> setShowModal(false)}
        style={customModalStyles}
        >
        <form onSubmit={onSubmit} className="itemForm__form">
        <div>
            {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
            ))}
        </div>
        <div className="postForm__labelsDiv">
          <label>Title</label>
        </div>
          <input className="postForm__fields"
            name='title'
            type='text'
            placeholder='title'
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
            placeholder='Address'
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
            placeholder='City'
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
            placeholder='State'
            value={state}
            onChange={(e)=> setState(e.target.value)}
            required
            />
        <div className="postForm__labelsDiv">
            <label>Price</label>
        </div>
            <input className="postForm__fields"
            name='Price'
            placeholder='Price'
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
            required
            />
        {/* <div className="postForm__labelsDiv">
            <label>Latitude</label>
        </div>
            <input className="postForm__fields"
            name='Latitude'
            placeholder='Latitude'
            value={lat}
            onChange={(e)=> setLat(e.target.value)}
            required
            />
        <div className="postForm__labelsDiv">
            <label>Longitude</label>
        </div>
            <input className="postForm__fields"
            name='Longitude'
            placeholder='Longitude'
            value={lng}
            onChange={(e)=> setLng(e.target.value)}
            required
            /> */}
        <div className="postForm__labelsDiv">
            <label>Content</label>
        </div>
            <textarea className="postForm__fields postForm__textarea"
            name='Content'
            type='text'
            placeholder='Content'
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            required
            />
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
        <div className="postForm__btnDiv">
            <button type='submit'>Edit Post!</button>
        </div>
        </form>
    </Modal>
  );
};

export default EditPost;
