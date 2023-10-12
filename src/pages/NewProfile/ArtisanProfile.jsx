/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./profile.scss";
import ProductCard from '../../components/ProductCard/ProductCard'
import Card from '../../components/SmallCard/Card'
import { AiOutlineWhatsApp,AiOutlineFacebook ,AiOutlineInstagram,AiOutlineTwitter} from "react-icons/ai";
const ArtisanProfile = () => {
  const products = [
    {
      id: 1,
      name: "Handcrafted Pottery",
      price: 25.99,
      sellerName: "ArtisanCrafts",
      image: "pottery.jpg",
      images: ["pottery.jpg", "pottery-detail1.jpg", "pottery-detail2.jpg"],
    },
    {
      id: 2,
      name: "Handwoven Textiles",
      price: 49.99,
      sellerName: "WeaveArt",
      image: "textiles.jpg",
      images: ["textiles.jpg", "textiles-detail1.jpg", "textiles-detail2.jpg"],
    },
    {
      id: 3,
      name: "Wooden Handcarvings",
      price: 39.99,
      sellerName: "CarvedCrafts",
      image: "woodcarving.jpg",
      images: ["woodcarving.jpg", "woodcarving-detail1.jpg", "woodcarving-detail2.jpg"],
    },
    {
      id: 4,
      name: "Handcrafted Pottery",
      price: 25.99,
      sellerName: "ArtisanCrafts",
      image: "pottery.jpg",
      images: ["pottery.jpg", "pottery-detail1.jpg", "pottery-detail2.jpg"],
    },
    {
      id: 5,
      name: "Handwoven Textiles",
      price: 49.99,
      sellerName: "WeaveArt",
      image: "textiles.jpg",
      images: ["textiles.jpg", "textiles-detail1.jpg", "textiles-detail2.jpg"],
    },
    {
      id: 6,
      name: "Wooden Handcarvings",
      price: 39.99,
      sellerName: "CarvedCrafts",
      image: "woodcarving.jpg",
      images: ["woodcarving.jpg", "woodcarving-detail1.jpg", "woodcarving-detail2.jpg"],
    },
    // Add more products as needed
  ];
  
 
  
  return (
    <div className="artisan-profile">
      <header>
        <div className="left">
          <img
            src="https://images.unsplash.com/photo-1555378322-2d4b84bc2790?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxvY2FsbHklMjBtYWRlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Artisan's Profile"
          />
        </div>
        <div className="right">
          <h1>James John</h1>
          <p>Abuja</p>
          <section className="bio">
            <h2>About Me</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              ullam minus repellat, porro sapiente corporis atque doloribus
              harum facere. Ex, veniam ad quibusdam labore dolore voluptas, sed
              corrupti ut quo error atque aliquam repudiandae veritatis rerum
              accusantium dolorem molestiae quos?
            </p>
          </section>
          <div className="contact">
            <AiOutlineWhatsApp/> <AiOutlineInstagram/> <AiOutlineTwitter/> <AiOutlineFacebook/>
          </div>
        </div>
      </header>
    
      <section className="gallery">
      <h2>Showcase Images</h2>

        <div className="galleryMages">
          <div className="top">
            <img
              src="https://i.pinimg.com/236x/51/ef/ee/51efee3cf017e26bfa2717a7c251f3e2.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/236x/e0/dc/11/e0dc11e84efab1bbf12dfa5b0f971944.jpg"
              alt=""
            />
          </div>
          <div className="center">
            <div className="left">
              <img
                src="https://i.pinimg.com/236x/48/98/b1/4898b13b060bd2cd5d13e2e5b006f009.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <img
                src="https://i.pinimg.com/236x/e5/46/ca/e546ca4bcea656b29396f9f16b8b9722.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/236x/4f/82/ae/4f82ae114e8f43e3bbb157cc230465ae.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="top">
            <img
              src="https://i.pinimg.com/736x/12/f3/27/12f32703cbe71befe91d32daa7a08140.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/236x/40/e6/18/40e6189503cde861d708688d52969c22.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Image gallery or slider goes here */}
      </section>
      <h2 className="title">Top Products</h2>
      <section className="products">
    
        {
          products.map((item) => (<ProductCard link='/product/123' key={item.id} item={item} />))
        }
        {/* Product listings and categories go here */}
      </section>



      <section className="reviews">
        <h2>Customer Reviews</h2>
        {/* Customer reviews and testimonials go here */}
      </section>

    

 

      {/* Awards and recognition section */}
      {/* Blog or news section */}
      {/* Related artisans or collaborations section */}
      <h2 className="title">Similar Artisan</h2>
      <section className="products">
    
        {
          products.map((item) => (<Card key={item.id} link='/newprofile/123' item={item} />))
        }
        {/* Product listings and categories go here */}
      </section>
    </div>
  );
};

export default ArtisanProfile;
