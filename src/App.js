
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopNav from "./components/TopNav";

export default () => (
  <Router>
    <TopNav />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

