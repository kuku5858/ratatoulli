import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
 
function Pages() {

  const location = useLocation();

  return (
    <PageContaner>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </PageContaner>
  );
}
const PageContaner = styled.div`
  height: 100%;
`;

export default Pages;

// position: absolute;
// bottom: 0;
// right: 0;