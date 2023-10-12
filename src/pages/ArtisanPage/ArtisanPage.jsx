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
const ArtisanPage = () => {
  const artisanProducts = [
    {
      name: "Chef",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      description:
        "Traditional handwoven Kente cloth with vibrant colors and intricate patterns.",
    },
    {
      name: "Tailor",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9jYWxseSUyMG1hZGUlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "A set of beautifully crafted beaded jewelry, including a necklace and earrings.",
    },
    {
      name: "Electrician",
      image:
        "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxvY2FsbHklMjBtYWRlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "A hand-carved wooden mask sculpture featuring traditional African designs.",
      wide: true,
    },
    {
      name: "Plumber",
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxvY2FsbHklMjBtYWRlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "A decorative pottery vase with unique glazing and artistic detailing.",
      wide: true,
    },
    {
      name: "Carpenter",
      image:
        "https://images.unsplash.com/photo-1555378322-2d4b84bc2790?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxvY2FsbHklMjBtYWRlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "Colorful batik print fabric, perfect for traditional clothing or home decor.",
    },
    {
      name: "HairDresser",
      image:
        "https://images.unsplash.com/photo-1548801133-da353ebb1d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxvY2FsbHklMjBtYWRlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "Hand-stitched leather wallet with multiple compartments for functionality.",
    },
  ];
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
        {artisanProducts.map((item) => (
          <LongCard link='/newprofile/23' item={item} key={item.description} />
        ))}
      </section>
   </div>
  
     </AnimatePresence>
  );
};

export default ArtisanPage;
