/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

const ProductCard = ({ item ,link}) => {
  return (
    <Link className={`pcard`} to={link}>
      <img src={item.coverImage} alt="" />

      <p className="name">{item.username}</p>
      <p className="price">#{item.price}</p>

    </Link>
  );
};

export default ProductCard;
