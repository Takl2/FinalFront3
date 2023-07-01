import React, { useContext, useEffect, useState } from 'react'
import { DentistContext } from '../components/context/DentistContext';
import { DentistCard, DentistItem } from '../components/DentistCard';


export const Favs = () => {
  const {state } = useContext(DentistContext);
  const [favs, setFavs] =useState([]);
  const [isFromLocalStorage, setIsFromLocalStorage] = useState(false);

  useEffect(() => {
    const favData = JSON.parse(localStorage.getItem("favorites"));

    if (favData && favData.length > 0) {
      setFavs(favData);
      setIsFromLocalStorage(true);
    }
  }, [state.favs]);

  if (!isFromLocalStorage) {
    return <p>Loading favorite dentists...</p>;
  }
  return (
    <div className="favs">
      <div className="row center-row title">
        <h1 >Dentists Favs</h1>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Clear Favs
        </button>
      </div>
      {favs.length > 0 ? (
        <div className="card-grid">
          {favs.map((dentist) => (
            <DentistItem dentist={dentist} key={dentist.id} />
          ))}
        </div>
      ) : (
        <p>No favorite dentists available.</p>
      )}
    </div>


  )
}
