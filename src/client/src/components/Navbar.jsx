import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">La Cueva Gamer</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/sales">Ventas</Link>
                </li>
                <li>
                    <Link to="/login">Iniciar Sesión</Link>
                </li>
                <li>
                    <Link to="/admin">Panel de Administración</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;