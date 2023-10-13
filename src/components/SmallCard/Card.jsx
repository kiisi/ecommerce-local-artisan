/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item ,link }) => {
  return (
    <Link className={`card ${item.wide ? "wide" : "norm"}`} to={link}>
      <img src={item?.img} alt="image-for-card" />

      <p className="name">{item.name}</p>
    </Link>
  );
};

export default Card;
