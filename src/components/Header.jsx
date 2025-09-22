import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img from '../assets/img/banner.jpg'
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top" aria-label="Principal">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/" aria-label="Accueil John Doe">John<span className="text-primary">Doe</span></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Basculer la navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item">
                <NavLink end to="/" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}>Accueil</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}>Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mentions-legales" className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}>Mentions légales</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
