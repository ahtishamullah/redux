import React from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "cryptocurrency",
    count: simplified ? 10 : 100,
  });
  console.log(cryptoNews, "newssssssss");
  return <div>News</div>;
};

export default News;
