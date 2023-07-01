import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import imglogo from "../assets/DH.png";
import { VscColorMode } from "react-icons/vsc";

export const NavBar = () => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    useEffect(() => {
        document.body.className = theme;
      }, [theme]);

  return (
    
    <nav>
    <div className={`NavBar ${theme}`}></div>
  <div>  <img src={imglogo}></img> </div>
    <div className='Nav-Buttons'>
    <Link to="/">Home</Link>
    <Link to="/Favs">Favs</Link>
    <Link to="/Contact">Contact</Link>
    </div>
   
    <button   onClick={toggleTheme}><VscColorMode/></button>
   
    </nav>
    
  )
}
