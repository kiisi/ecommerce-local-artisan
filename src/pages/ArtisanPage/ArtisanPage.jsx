/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import "./artisanPage.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import LongCard from "../../components/LongCard/LongCard";
import { ArtisanProducts, Artisans } from "../../utils/constants";
import newRequest from "../../utils/newRequest";
const ArtisanPage = () => {
  const { id } = useParams();
  const {
    isLoading: isLoadingUsers,
    error: usersError,
    data: userCatData,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["usersByCategory", id], // Descriptive string + user ID
    queryFn: () =>
      newRequest.get(`/users?category=${id}`).then((res) => {
        return res.data;
      }),
  });
  const NoUser = ({ type }) => {
    return (
      <div className="noUserPage">
        <img
          src={type === "find" ? "/assets/find.png" : "/assets/erro.png"}
          alt=""
        />
        {type === "find" ? (
          <p>
            {" "}
           No  User Available in this category ,{" "}
            <Link style={{ color: "green" }} to="/register">
              {" "}
              Register Now{" "}
            </Link>{" "}
            to be a creator{" "}
          </p>
        ) : (
          <p>An error occurred , reload or contact cotisans admin</p>
        )}
      </div>
    );
  };
  return (
    <AnimatePresence mode="wait">
      <div className="catPageContainer">
        <div className="headerImage">
          <img
            src="https://images.unsplash.com/photo-1548801133-da353ebb1d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxvY2FsbHklMjBtYWRlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>

        <p style={{ marginTop: "40px" }} className="browse">
          Browse Popular {id}
        </p>

        <section className="popularCat">
          {isLoadingUsers ? (
            "Loading"
          ) : usersError ? (
            <NoUser type={"error"} />
          ) : userCatData.length === 0 ? (
            <NoUser type={"find"} />
          ) : (
            userCatData.map((item) => (
              <LongCard
                link={`/newprofile/${item?._id}`}
                item={item}
                key={item.description}
              />
            ))
          )}
        </section>
      </div>
    </AnimatePresence>
  );
};

export default ArtisanPage;
