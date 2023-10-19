/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState,useContext } from "react";
import "./login.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import newRequest from "../../utils/newRequest";
import Loader from "../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../contexts/userContext";
const Login = () => {
  const { currentUser, loginUser } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await newRequest.post("/auth/login", {
        mail,
        password,
      });
    
      // // Use a Promise to wait for localStorage to set 'currentUser'
       const currentUserPromise = new Promise((resolve) => {
         localStorage.setItem("currentUser", JSON.stringify(res.data));
         resolve(JSON.parse(localStorage.getItem("currentUser")));
       });
    
      // Wait for the currentUserPromise to resolve
      const currentUser = await currentUserPromise;
      loginUser(currentUser)
      toast.success("Login successful", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
   
      // Now 'currentUser' is defined
      navigate(`/newProfile/${currentUser._id}`);
    
      setLoading(false);
    } catch (err) {
      setError(err.response.data);
      setLoading(false);
      toast.error(err.response.data, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }    
  return (
    <AnimatePresence mode="wait">
      <ToastContainer />
      <motion.div
        initial={{
          opacity: 0.5,

          scale: 0.8,
        }}
        key="LoginPage"
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="loginContainer"
      >
        <Link to="/">
          <MdOutlineKeyboardBackspace
            style={{
              position: "absolute",
              zIndex: "999",
              left: "30px",
              top: "30px",
              fontSize: "25px",
            }}
          />
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
          {loading ? (
            <Loader />
          ) : (
            <form onSubmit={handleLogin} className="container">
              <h1 className="title">Welcome Back</h1>
              <div className="input">
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="mail"
                  id="mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                />

                <div
                  style={{
                    position: "absolute",
                    width: "fit-content",
                    right: "3%",
                    cursor: "pointer",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="eye"
                >
                  {visible ? (
                    <AiFillEye onClick={() => setVisible(!visible)} />
                  ) : (
                    <AiFillEyeInvisible onClick={() => setVisible(!visible)} />
                  )}
                </div>
              </div>

              <div className="remember">
                <input type="checkbox" value="" />
                <span>Keep me logged in</span>
              </div>
              <button type="submit"> Log In</button>
            </form>
          )}
          <div className="google">
            <img
              src="https://developers.google.com/static/identity/images/g-logo.png"
              alt="googleBtn"
              className="googleLogo"
            />
            <span>Sign In with Google</span>
          </div>
          <div className="signUp">
            <span>Don't have an acoount? </span>
            <Link to="/register">
              {" "}
              <span> Sign up for free</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
