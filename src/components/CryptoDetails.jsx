import React from "react";
import { useParams } from "react-router-dom";
import { useGetCryptosDetailsQuery } from "../services/cryptoApi";
const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptosDetailsQuery(coinId);
  console.log(data, "data");
  return <div>CryptoDetails{coinId}</div>;
};

export default CryptoDetails;
