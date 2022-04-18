import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  console.log("adsasd");
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route element={<Homepage />} path="/"></Route>
              <Route element={<Exchanges />} path="/exchanges"></Route>
              <Route
                element={<Cryptocurrencies />}
                path="/cryptocurrencies"
              ></Route>
              <Route element={<CryptoDetails />} path="/crypto/:coinId"></Route>
              <Route element={<News />} path="/news"></Route>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
