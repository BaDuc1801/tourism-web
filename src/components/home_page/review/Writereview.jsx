import React, { useState, useContext } from 'react';
import ReviewContext from '../../../context/ReviewContext';
import { useNavigate } from 'react-router-dom';

const Writereview = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    img: '../src/assets/img/add.png',
    title: '',
    content1: '',
    loca: '',
    certify: false,
  });

  const { addReview } = useContext(ReviewContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(formData);
    setFormData({
      img: '../src/assets/img/add.png',
      title: '',
      content1: '',
      loca: '',
      certify: false,
    });
  };

  return (
    <div className='wr'>
      <div className='wr-img'>
        <img src="../src/assets/img/add.png" alt="Add" />
      </div>
      <div className='wr-rv'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loca">Location</label>
            <input
              type="text"
              id="loca"
              name="loca"
              placeholder="Enter Travel Location"
              value={formData.loca}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title of your review</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Summarize your Travel Journey"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content1">Your review</label>
            <textarea
              id="content1"
              name="content1"
              placeholder="A detailed review of your Travel Journey. Travellers will love to know your experience"
              value={formData.content1}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="certify"
              name="certify"
              className='checkbox'
              checked={formData.certify}
              onChange={handleChange}
            />
            <p>
              I certify that the information in this review is based solely on my own experiences with the product or service in question. I also attest that I have no personal or professional affiliation with the business in question and have not been given any incentives or payment from the business to write this review. I am aware that fake reviews are strictly prohibited on Tripadvisor.
            </p>
          </div>
          <button type="button" className='sub' onClick={() => { nav('/review') }}>Back</button>
          <button type="submit" className='sub'>Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default Writereview;
