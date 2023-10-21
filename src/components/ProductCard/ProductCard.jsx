/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link,useParams } from "react-router-dom";
import "./card.scss";
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
// import Loader from "../../components/Loader/Loader";
import { AiFillDelete ,AiFillEdit} from "react-icons/ai";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
const ProductCard = ({ item ,link}) => {
  const location = useLocation();
  const [displayBtn, setDisplayBtn] = useState(false)
  const { currentUser, logoutUser } = useContext(UserContext);
  useEffect(() => {
    if (location.pathname.includes("/product/")) {
      setDisplayBtn(true)
    }
    
  }, [])
  
  const handleDelete = async (id) => {
   try {
    // console.log(id)
   const res =  newRequest.delete(`/products/${id}`).then((res) => res.data)
   toast.success("Deleted successful ,wait a bit", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
   } catch (error) {
    console.log(error)
   } 
  }
  return (
    <>
    <div className="containerPcard">
    <Link className={`pcard2`} to={link}>
      <img src={item?.coverImage} alt="" />

      <p className="name">{item?.title.slice(0,15)}</p>
      <p className="price">#{item?.price}</p>
    
  

    </Link>

    {
    currentUser?._id === item?.userId  && !displayBtn &&  <div className="btnsEdit">
    <button onClick={() => handleDelete(item?._id)}><AiFillDelete/></button>
    <button><AiFillEdit/></button>
  </div>
  }
    </div>
    
    </>
 
  );
};

export default ProductCard;
