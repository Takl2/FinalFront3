import React from "react";
import { Home } from "../pages/Home";
import { Favs } from "../pages/Favs";

import { Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Contact from "../pages/Contact";

export const AppRouter = ({ favoriteDentists }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favs" element={<Favs favoriteCards={favoriteDentists} />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Contact" element={<Contact />} />
        
        
      </Routes>
    </>
  );
};
