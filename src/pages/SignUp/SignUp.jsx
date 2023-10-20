/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import "./signup.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../../components/Loader/Loader";
const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [firstname, setFirstname] = useState("");
  const [description, setdescription] = useState("");
  const [lastname, setLastname] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputLabel, setInputLabel] = useState(false);
  const handleSignUp = async (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    // console.log(email, username, firstname, lastname, password, isSeller);
    const url = await upload(userImage);
    try {
      setLoading(true);
      await newRequest.post("/auth/register", {
        email,
        username,
        firstname,
        lastname,
        password,
        category,
        isSeller,
        location,
        description,
        userImage: url,
      });
      navigate("/login");
      toast.success("Registration Succesful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    } catch (error) {
      toast.error("An error occured fill in all input fields and try again!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
  };
  const handleLabel = () => {
    setInputLabel(true);
  };
  //   const handleSignUp = (e) => {
  //     e.preventDefault();
  //   console.log(username,firstname,email)
  // };
  return (
    // <AnimatePresence mode="wait">
    <>
      <ToastContainer />
      <motion.div
        // initial={{
        //   opacity: 0.5,

        //   scale: 0.8,
        // }}
        // key="signUpContainerkEY"
        // animate={{ opacity: 1, scale: 1 }}
        // exit={{ opacity: 0, scale: 0.5 }}
        // transition={{
        //   duration: 1,
        //   ease: "easeInOut",
        // }}
        className="signUpContainer"
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
            <form onSubmit={handleSignUp} className="container">
              <h1 className="title">Sign Up</h1>
              <div className="split">
                <input
                  type="text"
                  placeholder="Enter Firstname"
                  name="firstname"
                  id="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter Lastname"
                  name="lastname"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="split">
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="mail"
                  id="mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="mail"
                  id="mail"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="input">
                <input
                  value={password}
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
             
              <div className="input">
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={visible ? "text" : "password"}
                  placeholder="Confirm Password"
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
               <div className="input">
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Location"
                />
              </div>
              <div className="input-check">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isSeller}
                  onChange={() => setIsSeller(!isSeller)}
                />
                <label className="placeholder">
                  Check box if you are a seller
                </label>
              </div>
              {isSeller && (
                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Artisan Category</option>
                  <option value="Shirts">Carpentery</option>
                  <option value="Tailoring">Tailoring</option>
                  <option value="Trousers">Furniture</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Hair-Dressing">Hair Dressing</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Others">Others</option>
                </select>
              )}
              <div className="input">
                <input
                  type="file"
                  className="input"
                  onChange={(e) => setUserImage(e.target.files[0])}
                />
              </div>
              {/* <div className="remember">
            <input type="checkbox" value="" />
            <span>Keep me logged in</span>
          </div> */}
          <textarea placeholder='Énter short decription' style={{padding:'10px'}} name="desc" id="desc" cols="5" rows="5" onChange={e=> setdescription(e.target.value)}></textarea>
              <button disabled={password !== confirmPassword} type="submit">
                Sign Up
              </button>
            </form>
          )}
          <div className="google">
            <img
              src="https://developers.google.com/static/identity/images/g-logo.png"
              alt="googleBtn"
              className="googleLogo"
            />
            <span>Sign Up with Google</span>
          </div>
          <div className="signUp">
            <span>Have an acoount? </span>
            <Link to="/login">
              {" "}
              <span> Sign in now</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
    // </AnimatePresence>
  );
};

export default SignUp;
