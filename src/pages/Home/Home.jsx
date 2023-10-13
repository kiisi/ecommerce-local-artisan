/* eslint-disable no-unused-vars */
import React, { useEffect,useContext, useRef, useState } from "react";
import { BsBag, BsCart4 } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineCopyright,
} from "react-icons/ai";
// import { NavContext } from "../contexts/NavContext"
import { IoShirtOutline } from "react-icons/io5";
import { RiSecurePaymentLine, RiCustomerService2Fill } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import "./home.scss";
import Card from "../../components/SmallCard/Card";
import { gsap, Power4 } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { NavContext } from "../../contexts/NavContext";
import { ArtisanProducts, Artisans, Products } from "../../utils/constants";
import ProductCard from "../../components/ProductCard/ProductCard";
const Home = () => {
  const clippy = useRef();
  const imageRef = useRef();
  const {menu, setMenu} = useContext(NavContext)

  useEffect(() => {
    const timeline = gsap.timeline();

    //   // Add a simple tween to the timeline
    timeline
      .to(clippy.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",

        duration: 1.5, // Animation duration in seconds
        ease: "power4.inOut", // Easing function
        y: 0,
        opacity: 1,
      })
      .to(
        imageRef.current,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",

          duration: 1, // Animation duration in seconds
          ease: "power4.inOut", // Easing function
          y: 0,

          opacity: 1,
        },
        "-=.5"
      );
    // .to(smallTextRef.current, {
    //   clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',

    //   duration: 1, // Animation duration in seconds
    //   ease: 'power4.inOut', // Easing function
    //   y:0,

    //   opacity:1
    // }, '-=.5')
  }, []);



  return (
    <div className="main-Container">
      {/* <nav className="nav-Container">
        <img src="" alt="logoImage" className="log" />
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Artisans</li>
          <li>Products</li>
        </ul>
        <div className="icons-link">
          <BsBag />
          <AiOutlineSearch />
          <Link to='/login'>
           <BiUserCircle />
          </Link>
         
        </div>

        <div className="menu">
          {!menuOpen ? (
            <AiOutlineMenu onClick={() => setMenuOpen(!menuOpen)} />
          ) : (
            <AiOutlineClose
              style={{
                position: "fixed",
                top: "3vh",
                right: "1rem",
                color: "white",
                zIndex: "999",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}
        </div>
      </nav> */}
      <section className="home-Container">
        <div ref={clippy} className="left">
          <small>artisans hub</small>
          <hr className="lineSmall" />
          <p>
            {" "}
            Cotisans - <br />
            Where Artistry Meets Commerce!
          </p>

          <small className="btm">View Marketplace</small>
        </div>
        <div ref={imageRef} className="right">
          <img src="/assets/lpage.png" alt="landingPage-Image" />
        </div>
      </section>
      <p
        style={{ marginBottom: "10px", marginLeft: "40px", fontSize: "25px" }}
        className="artisanTitle"
      >
        Popular Categories of Artisans
      </p>
      <section className="popularCat">
        {ArtisanProducts.map((item) => (
          <Card item={item} link='/catpage/123' key={item.description} />
        ))}
      </section>
      <h2 className="title">Products For You</h2>
      <section className="products">
    
        {
        Products.map((item) => (<ProductCard link='/product/123' key={item.id} item={item} />))
        }
        {/* Product listings and categories go here */}
      </section>

      <p
        style={{ marginBottom: "10px", marginLeft: "40px", fontSize: "25px" }}
        className="artisanTitle"
      >
        Popular Artisans
      </p>
      <section className="popularCat">
        {Artisans.map((item) => (
          <Card item={item} link='newprofile/23' key={item.description} />
        ))}
      </section>
      <div className="perContainer">
        <div>
          <BsCart4 />
          <div className="desc">
            <h1>Free Shipping</h1>
            <p>Order Nore than #20000</p>
          </div>
        </div>
        <div>
          <IoShirtOutline />
          <div className="desc">
            <h1>90 days return</h1>
            <p>For goods issued</p>
          </div>
        </div>
        <div>
          <RiSecurePaymentLine />
          <div className="desc">
            <h1>Secure Payments</h1>
            <p>100% secured and safe</p>
          </div>
        </div>
        <div>
          <RiCustomerService2Fill />
          <div className="desc">
            <h1>24/7 Payments</h1>
            <p>Dedicated Support</p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
