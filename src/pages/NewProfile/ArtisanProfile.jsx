/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState, useTransition } from "react";
import "./profile.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Card from "../../components/SmallCard/Card";
import { ToastContainer, toast } from "react-toastify";
// import { useLocation } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineClose,
  AiOutlineMessage,
} from "react-icons/ai";
import { Artisans, Products } from "../../utils/constants";
import AddProductForm from "../../components/form/AddProductForm";
import Review from "../../components/Reviews/Review";
import { UserContext } from "../../contexts/userContext";
import Loader from "../../components/Loader/Loader";
const ArtisanProfile = () => {
  const { currentUser, logoutUser } = useContext(UserContext);
  const { id } = useParams();
  const [formOpen, setFormOpen] = useState(false);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["productsByUserId", id], // Descriptive string + user ID
    queryFn: () =>
      newRequest.get(`/products?userId=${id}`).then((res) => {
        return res.data;
      }),
  });
  const {
    isLoading: isLoadingReviews,
    error: reviewsError,
    data: reviewData,
    refetch: reviewReFetch,
  } = useQuery({
    queryKey: ["reviewsByUsrId", id], // Descriptive string + user ID
    queryFn: () =>
      newRequest.get(`/reviews?sellerId=${id}`).then((res) => {
        return res.data;
      }),
  });
  const {
    isLoading: isLoadingUser,
    error: userError,
    data: userData,
  } = useQuery({
    queryKey: ["userData", id], // Descriptive string + user ID
    queryFn: () =>
      newRequest.get(`/users/${id}`).then((res) => {
        return res.data;
      }),
  });

  const {
    isLoading: isLoadingUsers,
    error: usersError,
    data: userCatData,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["usersByCategory", userData?.category], // Descriptive string + user ID
    queryFn: () =>
      newRequest.get(`/users?category=${userData?.category}`).then((res) => {
        return res.data;
      }),
  });
  //  console.log(data);
  if (!userData) return <Loader />;
  return (
    <div className="artisan-profile">
      <ToastContainer/>
      <header>
        <div className="left">
          <img src={userData?.userImage} alt="Artisan's Profile" />
        </div>
        <div className="right">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <p style={{ fontSize: "50px" }}>{userData?.username}</p>{" "}
            <img
              style={{
                borderRadius: "50%",
                margin: "auto 0",
                width: "20px",
                height: "20px",
                objectPostion: "cover",
              }}
              src="/assets/verified.jpg"
              alt="verified"
            />{" "}
          </div>
          <p>{userData?.location}</p>
          <section className="bio">
            <h2>About Me</h2>
            <p>{userData?.description}</p>
          </section>
          <div className="contact">
            <AiOutlineWhatsApp /> <AiOutlineInstagram /> <AiOutlineTwitter />{" "}
            <AiOutlineFacebook />
          </div>
          {id === currentUser?._id && (
            <div className="btns">
              {currentUser?.isSeller && (
                <div onClick={() => setFormOpen(!formOpen)} className="message">
                  <AiOutlineMessage /> Add a product
                </div>
              )}
              {currentUser && (
                <button className="addProduct">Edit Profile</button>
              )}
              {currentUser ? (
                <button onClick={logoutUser}>Logout</button>
              ) : (
                <button className="addProduct">
                  <Link to="/login">Login</Link>
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      <h2 className="title">Showcase Images</h2>
      <section className="gallery">
        <div className="galleryMages">
          <div className="top">
            <img
              src={
                data && data[0]?.coverImage
                  ? data[0].coverImage
                  : "/assets/fashio.jpg"
              }
              alt="img"
            />
            <img
              src={
                data && data[0]?.images[0]
                  ? data[0].images[0]
                  : "/assets/fashio.jpg"
              }
              alt="img"
            />
          </div>
          <div className="center">
            <div className="left">
              <img
                src={
                  data && data[1]?.images[0]
                    ? data[1].images[0]
                    : "/assets/man4.jpg"
                }
                alt="img"
              />
            </div>
            <div className="right">
              <img
                src={
                  data && data[0]?.images[1]
                    ? data[0].images[1]
                    : "/assets/man3.jpg"
                }
                alt="img"
              />
              <img
                src={
                  data && data[0]?.images[2]
                    ? data[0].images[2]
                    : "/assets/man1.jpg"
                }
                alt="img"
              />
            </div>
          </div>
          <div className="top">
            <img
              src={
                data && data[2]?.images[0]
                  ? data[2].images[0]
                  : "/assets/man2.jpg"
              }
              alt="img"
            />
            <img
              src={
                data && data[2]?.images[1]
                  ? data[2].images[1]
                  : "/assets/woman2.jpg"
              }
              alt="img"
            />
          </div>
        </div>

        {/* Image gallery or slider goes here */}
      </section>
      <h2 className="title">Top Products</h2>
      <section className="products">
        {isLoading
          ? "Loading"
          : error
          ? "An Error Occurred"
          : data.length === 0
          ? currentUser?.isSeller
            ? "No Product yet. Add a product and it will display here"
            : "This user hasn't added a product yet"
          : data?.map((product) => (
              <ProductCard
                link={`/product/${product?._id}`}
                key={product.id}
                item={product}
              />
            ))}

        {/* {
        Products.map((item) => (<ProductCard link='/product/123' key={item.id} item={item} />))
        } */}
        {/* Product listings and categories go here */}
      </section>

      <h2 className="title">Customer Reviews</h2>
      <section className="reviews">
        {isLoading
          ? "Loading"
          : error
          ? "An Error Occurred"
          : reviewData?.length === 0
          ? "No Reviews"
          : reviewData?.map((product) => (
              <Review review={product} key={product.id} />
            ))}
        {/* {reviews.slice(0,4).map((review) => < Review review={review} key={review.id}/>)} */}
      </section>

      {/* Awards and recognition section */}
      {/* Blog or news section */}
      {/* Related artisans or collaborations section */}
      <h2 className="title">Similar Artisan</h2>
      <section className="products">
        {userCatData?.map((item) => (
          <Card key={item.id} link={`/newprofile/${item?._id}`} item={item} />
        ))}
        {/* Product listings and categories go here */}
      </section>
      {formOpen && (
        <div className="formContaineruserprofile">
          <AiOutlineClose
            onClick={() => setFormOpen(false)}
            className="closeIcon"
          />
          <div className="forminner">
            <AddProductForm formOpen={formOpen} setFormOpen={setFormOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtisanProfile;
