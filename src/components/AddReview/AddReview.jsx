/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import './review.scss';
import newRequest from '../../utils/newRequest';
import { UserContext } from '../../contexts/userContext';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Loader from "../Loader/Loader";
const AddReview = ({product}) => {
  const { currentUser } = useContext(UserContext);
   const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: currentUser?.username || '',
    email: currentUser?.email || '',
    star: 1,
    description: '',
  });
const staticImg = 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png'

const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      
      userImage: currentUser?.userImage || staticImg,
      sellerId:product?.userId,
      userId:currentUser?._id  || 'unregistered_user',
      [name]: value,
    });
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // Assuming the endpoint for submitting reviews is correct, you can send the review data here.
    await newRequest.post('/reviews/create', formData);

    // Clear the form fields
    setFormData({
      username:'',
      email: '',
      
      star: 1,
      description: '',
    });
      setLoading(false)
         toast.success('Thanks for the review!', {
          position: "top-left",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
       });
  };
if (loading) return <Loader/>
  return (
    <div className="add-review-container">
         <ToastContainer />
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            readOnly={!!currentUser} // Lock the input field if a user is logged in
            required={!currentUser} // Make it not required if a user is logged in
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required={!currentUser}
          />
        </div>

        <div>
          <label htmlFor="star">Star Rating:</label>
          <select
            id="star"
            name="star"
            value={formData.star}
            onChange={handleChange}
            required
          >
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </div>

        <div>
          <label htmlFor="description">Review:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default AddReview;
