/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./profile.scss";
import ProductCard from '../../components/ProductCard/ProductCard'
import Card from '../../components/SmallCard/Card'
import { AiOutlineWhatsApp,AiOutlineFacebook ,AiOutlineInstagram,AiOutlineTwitter} from "react-icons/ai";
import {Artisans, Products, reviews} from '../../utils/constants'
import Review from "../../components/Reviews/Review";
const ArtisanProfile = () => {
  
 
  
  return (
    <div className="artisan-profile">
      <header>
        <div className="left">
          <img
            src="/assets/man3.jpg"
            alt="Artisan's Profile"
          />
        </div>
        <div className="right">
          <h1>James John</h1>
          <p>Abuja</p>
          <section className="bio">
            <h2>About Me</h2>
            <p>
             Vibrant lover of tailoring senator material to customers taste a 100 percent 
            </p>
          </section>
          <div className="contact">
            <AiOutlineWhatsApp/> <AiOutlineInstagram/> <AiOutlineTwitter/> <AiOutlineFacebook/>
          </div>
          <div className="btns">
          <button className="addProduct">Add a product</button>
          <button className="addProduct">Edit Profile</button>
          </div>
         
        </div>
      </header>
    
      <h2 className="title">Showcase Images</h2>
      <section className="gallery">


        <div className="galleryMages">
          <div className="top">
            <img
              src="/assets/woman2.jpg"
              alt="img"
            />
            <img
              src="/assets/fashio.jpg"
              alt="img"
            />
          </div>
          <div className="center">
            <div className="left">
              <img
               src="/assets/man4.jpg"
                alt="img"
              />
            </div>
            <div className="right">
              <img
                 src="/assets/man3.jpg"
                alt="img"
              />
              <img
                src="/assets/man1.jpg"
                alt="img"
              />
            </div>
          </div>
          <div className="top">
            <img
               src="/assets/man2.jpg"
              alt="img"
            />
            <img
            src="/assets/woman2.jpg"
              alt="img"
            />
          </div>
        </div>
        {/* Image gallery or slider goes here */}
      </section>
      <h2 className="title">Top Products</h2>
      <section className="products">
    
        {
        Products.map((item) => (<ProductCard link='/product/123' key={item.id} item={item} />))
        }
        {/* Product listings and categories go here */}
      </section>



  <h2 className='title'>Customer Reviews</h2> 
      <section className="reviews">
      
        {reviews.slice(0,8).map((review) => < Review review={review} key={review.id}/>)}
      </section>

    

 

      {/* Awards and recognition section */}
      {/* Blog or news section */}
      {/* Related artisans or collaborations section */}
      <h2 className="title">Similar Artisan</h2>
      <section className="products">
    
        {
          Artisans.map((item) => (<Card key={item.id} link='/newprofile/123' item={item} />))
        }
        {/* Product listings and categories go here */}
      </section>
    </div>
  );
};

export default ArtisanProfile;
