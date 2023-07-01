import React, { useState } from "react";
import { AppRouter as DefaultAppRouter } from "./routes/AppRouter";

import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  const handleFavoriteToggle = (index) => {
    if (favoriteDentists.includes(index)) {
      const updatedFavorites = favoriteDentists.filter(
        (favIndex) => favIndex !== index
      );
      setFavoriteDentists(updatedFavorites);
    } else {
      setFavoriteDentists([...favoriteDentists, index]);
    }
  };

  return (
    <>
      <NavBar />

      <DefaultAppRouter
        handleFavoriteToggle={handleFavoriteToggle}
        favoriteDentists={favoriteDentists}
      />
      <Footer/>
    </>
  );
};

export default App;
