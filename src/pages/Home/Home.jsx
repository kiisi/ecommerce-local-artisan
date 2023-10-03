/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
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
import "./home.scss";
import Card from "../../components/SmallCard/Card";
import { gsap, Power4 } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const Home = () => {
  const clippy = useRef();
  const imageRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

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
  const artisans = [
    {
      name: "Amina Abdullahi",
      profession: "Potter",
      location: "Kano, Nigeria",
      specialty: "Handcrafted clay pottery",
      bio: "Amina Abdullahi is a talented potter based in Kano, Nigeria. She has been honing her craft for over 20 years, creating unique and functional clay pottery that reflects the rich cultural heritage of her region.",
    },
    {
      name: "Kwame Mensah",
      profession: "Woodcarver",
      location: "Accra, Ghana",
      specialty: "Traditional African wooden sculptures",
      bio: "Kwame Mensah is a master woodcarver from Accra, Ghana, known for his exquisite wooden sculptures that tell stories of African traditions and spirituality.",
    },
    {
      name: "Nneka Okonkwo",
      profession: "Textile Weaver",
      location: "Enugu, Nigeria",
      specialty: "Handwoven Adire fabric",
      bio: "Nneka Okonkwo is a skilled textile weaver based in Enugu, Nigeria. She specializes in creating beautiful Adire fabric, a traditional Yoruba textile known for its intricate tie-dye patterns.",
    },
    {
      name: "Mohammed Ali",
      profession: "Blacksmith",
      location: "Timbuktu, Mali",
      specialty: "Forged metal artwork and tools",
      bio: "Mohammed Ali is a renowned blacksmith from Timbuktu, Mali. He forges not only functional metal tools but also breathtaking metal artwork that captures the spirit of the Sahara desert.",
    },
  ];

  return (
    <div className="main-Container">
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
      </nav>
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
        {artisanProducts.map((item) => (
          <Card item={item} key={item.description} />
        ))}
      </section>
      <p
        style={{ marginBottom: "10px", marginLeft: "40px", fontSize: "25px" }}
        className="artisanTitle"
      >
        Popular Artisans
      </p>
      <section className="popularCat">
        {artisans.map((item) => (
          <Card item={item} key={item.description} />
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

      <footer>
        <AiOutlineCopyright /> CodeInnovators
      </footer>
      <AnimatePresence mode="wait">
        {menuOpen && (
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
    </div>
  );
};

export default Home;
