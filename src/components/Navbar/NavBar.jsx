/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsBag, BsCart4 } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineCopyright,
} from "react-icons/ai";
import { IoShirtOutline } from "react-icons/io5";
import { RiSecurePaymentLine, RiCustomerService2Fill } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import "./nav.scss";
import Card from "../../components/SmallCard/Card";
import { gsap, Power4 } from "gsap";
import { NavContext } from "../../contexts/NavContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const NavBar = () => {
  const { currentUser, logoutUser } = useContext(UserContext);
  const staticImg =
    "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png";

  //const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { menu, setMenu } = useContext(NavContext);
  return (
    <>
      <nav className="nav-Container">
        <img src="" alt="logoImage" className="log" />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Contact</li>
          {/* <Link to="/newprofile">
            <li>Artisans</li>
          </Link> */}
          <li>Products</li>
          <li>Contact</li>
        </ul>
        <div className="icons-link">
          <Link to="/cart">
            <BsBag />
          </Link>
          <Link to="/search">
            <AiOutlineSearch />
          </Link>

          {currentUser ? (
            <Link to={`/newprofile/${currentUser?._id}`}>
              <img
                src={currentUser?.userImage || staticImg}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  objectPosition: "cover",
                }}
                alt="profile-image"
              />
            </Link>
          ) : (
            <Link to="/login">
              {" "}
              <BiUserCircle />{" "}
            </Link>
          )}
        </div>

        <div className="menu">
          {!menu ? (
            <AiOutlineMenu onClick={() => setMenu(!menu)} />
          ) : (
            <AiOutlineClose
              style={{
                position: "fixed",
                top: "3vh",
                right: "1rem",
                color: "white",
                zIndex: "999",
              }}
              onClick={() => setMenu(!menu)}
            />
          )}
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {menu && (
          <motion.div
            initial={{
              opacity: 0,

              left: "100%",
            }}
            animate={{ opacity: 1, left: "0%" }}
            exit={{ opacity: 0, left: "100%" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="mobileScreen"
          >
            <ul>
              <Link to="/" onClick={() => setMenu(!menu)}>
                <li>Home</li>
              </Link>
              <li>Contact</li>
              <Link to="/newprofile/23" onClick={() => setMenu(!menu)}>
                <li>Profile</li>
              </Link>
              <li>Products</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
