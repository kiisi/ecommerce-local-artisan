/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './longCard.scss'
import {

  AiFillStar,
} from "react-icons/ai";
import { FaStar } from 'react-icons/fa';
const staticImg = 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png'

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, i) => (
    <FaStar key={i} color="#ffc107" />
  ));

  return <div className="star-rating">{stars}</div>;
}
const   LongCard = ({item,link}) => {
  console.log(item)
  return (
  
<Link className='longCard' to={link}>
   
   
       
        <img src={item?.userImage || staticImg } alt="long-card-img" />
     
         
         <div className="name">
          <p>  {item.username}</p>
        
            <div className="star">
            <StarRating rating={item.star} /> 
            </div>
        
        </div>
        
       
  
    </Link>
   
  )
}

export default LongCard