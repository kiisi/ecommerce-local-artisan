/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

const ProductCard = ({ item ,link}) => {
  return (
    <Link className={`pcard`} to={link}>
      <img src={item.img} alt="" />

      <p className="name">{item.name}</p>
      <p className="name">{item.price}</p>

    </Link>
  );
};

export default ProductCard;
