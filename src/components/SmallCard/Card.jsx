/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item ,link }) => {
  return (
    <Link className={`card ${item.wide ? "wide" : "norm"}`} to={link}>
      <img src={item?.userImage} alt="image-for-card" />

      <p className="name">{item.username}</p>
    </Link>
  );
};

export default Card;
