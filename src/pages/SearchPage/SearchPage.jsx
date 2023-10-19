/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./search.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const getSortParam = () => {
    switch (searchFilter) {
      case "category":
        return "category";
      case "top-stars":
        return "highestRated";
      case "name":
        return "name";
      default:
        return "";
    }
  };

  const {
    isLoading,
    error,
    data,
    refetch,
  } = useQuery({
    queryKey: ["productsBySearch", searchTerm, searchFilter],
    queryFn: () =>
      newRequest.get(`/products?sort=${getSortParam()}&search=${searchTerm}`).then((res) => {
        return res.data;
      }),
  });

  const apply = () => {
    refetch();
  };

  return (
    <div className="searchPage">
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          id="searchFilter"
          name="searchFilter"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        >
          <option value="">Search Filters</option>
          <option value="category">Category</option>
          <option value="top-stars">Top stars</option>
          <option value="name">Name</option>
        </select>
        <button onClick={apply}>
          <AiOutlineSearch />
        </button>
      </div>
      <section className="products">
        {isLoading ? (
          <Loader />
        ) : error ? (
          "An Error Occurred"
        ) : data?.length === 0 ? (
          "No Products with these search filter. Choose another search filter or try again"
        ) : (
          data?.map((product) => (
            <ProductCard
              link={`/product/${product?._id}`}
              key={product.id}
              item={product}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default SearchPage;
