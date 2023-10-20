/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

const ProductCard = ({ item ,link}) => {
  return (
    <Link className={`pcard2`} to={link}>
      <img src={item.coverImage} alt="" />

      <p className="name">{item.title.slice(0,15)}</p>
      <p className="price">#{item.price}</p>

    </Link>
  );
};

export default ProductCard;
