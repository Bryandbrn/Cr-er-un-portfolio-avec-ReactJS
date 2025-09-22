import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <h5 className="fw-bold">John Doe</h5>
            <address className="mb-2">
              40 rue Laure Dielbold<br />
              69009 Lyon, France <br />
              10 20 30 40 50<br />
              john.doe@gmail.com
            </address>

            <div className="d-flex gap-3 footer-social">
              <a href="https://github.com/github-john-doe" className="link-light" target="_blank" rel="noopener nofollow" aria-label="GitHub">
                <i className="bi bi-github" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com" className="link-light" target="_blank" rel="noopener nofollow" aria-label="Twitter">
                <i className="bi bi-twitter-x" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com" className="link-light" target="_blank" rel="noopener nofollow" aria-label="LinkedIn">
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <h6 className="text-uppercase">Liens utile</h6>
            <ul className="list-unstyled">
              <li><Link className="link-light" to="/" rel="nofollow">Accueil</Link></li>
              <li><Link className="link-light" to="/services" rel="nofollow">Services</Link></li>
              <li><Link className="link-light" to="/portfolio" rel="nofollow">Portfolio</Link></li>
              <li><Link className="link-light" to="/contact" rel="nofollow">Contact</Link></li>
              <li><Link className="link-light" to="/mentions-legales" rel="nofollow">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-12 col-lg-4">
            <h6 className="text-uppercase">Mes dernières réalisations</h6>
            <ul className="list-unstyled">
              <li><Link className="link-light" to="/portfolio" rel="nofollow">Fresh Food</Link></li>
              <li><Link className="link-light" to="/portfolio" rel="nofollow">Restaurant Akira</Link></li>
              <li><Link className="link-light" to="/portfolio" rel="nofollow">Espace bien-être</Link></li>
              <li><Link className="link-light" to="/portfolio" rel="nofollow">SEO</Link></li>
              <li><Link className="link-light" to="/portfolio" rel="nofollow">Création API</Link></li>
              <li><Link className="link-light" to="/portfolio" rel="nofollow">Maquette site Web</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <div className="text-center small">
          © {new Date().getFullYear()} John Doe – Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
