import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import imagenOdo from "../assets/Dentista.jpeg";

const Detail = () => {
  const [odonto, setOdonto] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadOdonto();
  }, []);

  const loadOdonto = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const convertedData = await data.json();
    setOdonto(convertedData);
  };

  return (
    
      <>
    <div className='container-card-detail' >
    
    <div className='detail-card' >
      <div className='card-header' >
        <h3>Detalles del Odontologo</h3>
        <ul className='grupo-lista' >
          <img src={imagenOdo}/>
          <li>
            <b>Name</b>
            <p>{odonto.name}</p>
          </li>
          <li>
            <b>Email</b>
            <p>{odonto.email}</p>
          </li>
          <li>
            <b>Telefono</b>
            <p>{odonto.phone}</p>
          </li>
          <li>
          <b>Website</b>
           <p>{odonto.website}</p>
          </li>
        </ul>

      </div>
      <Link className='btn-cardDetail' to={"/"} >
        <button>Volver</button>
      </Link>
    </div>
    </div>
    </>
  );
};
export default Detail;