import React, { useContext, useEffect, useState } from "react";
import dentista from "../assets/Dentista.jpeg";
import { GoStarFill, GoStar } from "react-icons/go";
import { Link } from "react-router-dom";
import { DentistContext } from "./context/DentistContext";

const VALUE_KEY = "favorites";

export const DentistCard = () => {
  const {state, addFavorite, removeFavorite } = useContext(DentistContext);
  const [dentists, setDentists] = useState([]);
  const [favorites, setFavorites] = useState(
    localStorage.getItem(VALUE_KEY)
      ? JSON.parse(localStorage.getItem(VALUE_KEY))
      : []
  );

  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const convertedData = await data.json();
    setDentists(convertedData);
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleFav = (dentist) => {
    addFavorite(dentist)
     if (favorites.some((favDentist) => favDentist.id === dentist.id)) {
       const updatedFavorites = favorites.filter(
        (favDentist) => favDentist.id !== dentist.id
       );
       setFavorites(updatedFavorites);
     } else {
       setFavorites([...favorites, dentist]);
     }
  };

  useEffect(() => {
    localStorage.setItem(VALUE_KEY, JSON.stringify(favorites));
  }, [favorites]);
  console.log(favorites);

  return (
    <>
      <div className="container-cards">
        {dentists.map((dentist) => (
          <DentistItem
            key={dentist.id}
            dentist={dentist}
            isFavorite={favorites.some((favDentist) => favDentist.id === dentist.id)}
            toggleFav={toggleFav}
          />
        ))}
      </div>
      <Link to="/Favs">Ver favoritos</Link>
    </>
  );
};

 export const DentistItem = ({ dentist, isFavorite, toggleFav }) => {
  return (
    <div>
      <img src={dentista} alt="Dentista" />
      <h2>{dentist.name}</h2>
      <h3>{dentist.username}</h3>
      <Link to={`/detail/${dentist.id}`}>Ver Detalle</Link>
      {isFavorite ? (
        <button onClick={() => toggleFav(dentist)}>
          <GoStarFill />
        </button>
      ) : (
        <button onClick={() => toggleFav(dentist)}>
          <GoStar />
        </button>
      )}
    </div>
  );
};
