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
import { NavContext } from "../../contexts/NavContext"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const NavBar = () => {
    const {menu, setMenu} = useContext(NavContext)
  return (
    <>

<nav className="nav-Container">
    <img src="" alt="logoImage" className="log" />
    <ul>
      <li>Home</li>
      <li>Contact</li>
      <li>Artisans</li>
      <li>Products</li>
      <li>Contact</li>
    </ul>
    <div className="icons-link">
      <BsBag />
      <AiOutlineSearch />
      <Link to='/login'>
       <BiUserCircle />
      </Link>
     
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
              animate={{ opacity: 1,  left: "0%" }}
              exit={{ opacity: 0, left: "100%" }}
              transition={{
                  duration: 1,
                  ease: 'easeInOut',
            
                }}
            className="mobileScreen"
          >
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Artisans</li>
              <li>Products</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

  </>
  )
}

export default NavBar