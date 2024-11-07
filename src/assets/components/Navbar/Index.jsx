import React from 'react'
import './Navbar.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';
import Boton from '../Boton';

const Navbar = () => {
    const navegate = useNavigate()
  return (
    <nav className='navbar '>
        <h1>Portfolio</h1>
    
        <ul className='ul-navbar'>
            <li> <Link to='/'>Home</Link> <span></span></li>
            <li><Link to='/Vista'>Vista</Link> <span></span></li>
            <li><Boton/></li>
        </ul>
    
    </nav>
  )
}

export default Navbar