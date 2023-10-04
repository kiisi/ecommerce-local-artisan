/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import "./login.scss";
import {
  AiFillEyeInvisible,AiFillEye
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
const Login = () => {
  const [visible, setVisible] = useState(false)
  return (
    <AnimatePresence mode='wait'>

   
    <motion.div   initial={{
      opacity: 0.5,
   
      scale: 0.8,
    }}
    key='LoginPage'
    animate={{ opacity: 1,  scale: 1, }}
    exit={{ opacity: 0, scale: 0.5 }}
    transition={{
        duration: 1,
        ease: 'easeInOut',
  
      }} className="loginContainer">
        <Link to='/'>
         <MdOutlineKeyboardBackspace style={{ position:'absolute', zIndex:'999', left:"30px" ,top:"30px", fontSize:"25px"}}/>
       
        </Link>
      <div className="left">
      
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
          <div className="circle five"></div>
        <div className="circle four"></div>
      
        <div className="logoText">
          <img src="" alt="logoImage" />
          <h1 className="text">Cotisans</h1>
        </div>
      </div>
      <div className="right">
        <form className="container">
          <h1 className="title">Welcome Back</h1>
          <div className="input">
            <input
              type="email"
              placeholder="Enter Email"
              name="mail"
              id="mail"
            />
          </div>
      
          <div className="input">
            <input type={visible ? "text" : 'password'} placeholder="Password" />
        
            <div style={{position:"absolute",width:"fit-content", right:"3%",cursor:"pointer" ,top:"50%", transform:"translateY(-50%)"}} className="eye">
              {
                visible ? <AiFillEye onClick={()=>setVisible(!visible) }/> : <AiFillEyeInvisible onClick={()=>setVisible(!visible) }/>
              }
            </div>
            
          </div>
          
          <div className="remember">
            <input type="checkbox" value="" />
            <span>Keep me logged in</span>
          </div>
          <button>  Log In</button>

        </form>
        <div className="google">
          <img src="https://developers.google.com/static/identity/images/g-logo.png" alt="googleBtn" className="googleLogo" />
          <span>Sign In with Google</span>
        </div>
        <div className="signUp">
          <span>Don't have an acoount? </span>
          <Link to='/register'>  <span> Sign up for free</span></Link>
        
        </div>
      </div>
    </motion.div>
     </AnimatePresence>
  );
};

export default Login;
