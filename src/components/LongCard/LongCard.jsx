/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './longCard.scss'
import {

  AiFillStar,
} from "react-icons/ai";
const LongCard = ({item,link}) => {
  return (
  
<Link className='longCard' to={link}>
   
       
        <img src={item.image} alt="" />
     
         
         <div className="name">
            {item.name}
            
            {  [1,2,3,4].map(star => <span key={star}> <AiFillStar/> </span>)}
        </div>
        
       
  
    </Link>
   
  )
}

export default LongCard