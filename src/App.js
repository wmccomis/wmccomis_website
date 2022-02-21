
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopNav from "./components/TopNav";
import { initializeParse } from '@parse/react';

initializeParse(
  process.env.REACT_APP_PARSE_HOST_URL,
  process.env.REACT_APP_PARSE_APPLICATION_ID,
  process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
);


export default () => (
  <Router>
    <TopNav />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

