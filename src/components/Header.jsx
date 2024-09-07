import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
 
    <header id="header">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1><a href="index.html">Transporte Meza<span>.</span></a></h1>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="/Inicio" className="nav-link scrollto active" href="#hero">Home</Link></li>
            <li><a className="nav-link scrollto" href="#about">About Us</a></li>
            <li><Link to="/Servicios" className="nav-link scrollto" href="#services">Servicios</Link></li>
            <li><Link to="/catalogo" className="nav-link scrollto" href="#portfolio">Catalogo</Link></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li className="dropdown"><a href="#"><span>Productos</span> <i className="bi bi-chevron-down" /></a>
              <ul>
                <li><Link to="/laptops" href="#">Laptos</Link></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  </div>
  )
}

export default Header