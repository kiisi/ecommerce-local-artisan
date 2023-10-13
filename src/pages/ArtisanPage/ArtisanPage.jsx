/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import "./artisanPage.scss";
import {
  AiFillEyeInvisible,AiFillEye
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import LongCard from "../../components/LongCard/LongCard";
import { ArtisanProducts, Artisans } from "../../utils/constants";
const ArtisanPage = () => {
 
  return (
    <AnimatePresence mode='wait'>

   <div className="catPageContainer">

<div className="headerImage">
  <img src= "https://images.unsplash.com/photo-1548801133-da353ebb1d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxvY2FsbHklMjBtYWRlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      alt="" />
</div>

<p className="browse">
  Browse Popular Carpenters
</p>

<section className="popularCat">
        {Artisans.map((item) => (
          <LongCard link='/newprofile/23' item={item} key={item.description} />
        ))}
      </section>
   </div>
  
     </AnimatePresence>
  );
};

export default ArtisanPage;
