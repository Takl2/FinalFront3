import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useFormik } from 'formik';

import * as Yup from "yup"



const Contact = () => {

  let initialValues={
    nombre:"",
    email:"",
  }
  
  const [initialv,setInitialValues] = useState(false)

  function handleInitial (){
    setInitialValues(true)
  }
  
  const {handleSubmit,handleChange,values,setFieldValue,errors} = useFormik({
    initialValues, 
    validationSchema: Yup.object({
      nombre: Yup.string().required("Debes ingresar un nombre").min(3, "El nombre tiene que tener al menos tres carácteres"),
      email: Yup.string().required("Debes ingresar un email").test('at-symbol', 'El campo de correo electrónico debe contener el símbolo "@"', (value) => {
        if (value) {
          return value.includes('@');
        }
        return false;
      })
    }) ,
    onSubmit: (data)=>{
      console.log(data)
      handleInitial();
    }
  })
  
  return (
    <>
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <h3 className="h3-form">Hola Bienvenido/a !</h3>
      </div>
      <div>
        <TextField
          type="text"
          label="Ingrese su Nombre"
          variant="outlined"
          value={values.nombre}
          onChange={(e)=>{
            setFieldValue("nombre",e.target.value)
          }}
          error={errors.nombre}
          helperText={errors.nombre}
        ></TextField>
      </div>
      <div>
        <label>
          <TextField
            type="text"
            label="Ingrese su Email"
            variant="outlined"
            value={values.email}
            onChange={(e)=>{
              setFieldValue("email",e.target.value)
            }}
            error={errors.email}
            helperText={errors.email}
          ></TextField>
        </label>
      </div>
      <div className="btn-form">
        <button onClick={handleInitial} type="submit" className="btn btn-outline-primary">
          Enviar
        </button>
        <Link className="cancel" type="submit" to="/">
          Cancelar
        </Link>
      </div>
    </form>
    {initialv && Object.keys(errors).length === 0 && (
        <div className="card-saludo">
          <p>Gracias por tu visita, {values.nombre}.</p>
        </div>
      )}
   
    </>
  );
};

export default Contact;