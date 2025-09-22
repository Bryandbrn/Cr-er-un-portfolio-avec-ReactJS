import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import heroBg from '../assets/img/hero-bg.jpg'
import aboutImg from '../assets/img/john-doe-about.jpg'
export default function Home() {
  useEffect(() => {
    document.title = 'Accueil – John Doe'
  }, [])

  const heroStyle = {
    backgroundImage: `linear-gradient(135deg, #0d6efd99, #6610f299), url(${heroBg})`,
    backgroundBlendMode: 'overlay',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh'
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Bienvenue sur le portfolio de John Doe, développeur web spécialisé en React. Découvrez ses compétences et ses réalisations."
        />
      </Helmet>

      <section className="hero" style={heroStyle} aria-label="Image de couverture">
        <div className="hero-content container">
          <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
          <h2 className="h3 mb-4">Développeur Web full stack</h2>
          <button className="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#githubModal">
            En savoir plus
          </button>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6">
              <h3 className="section-title mb-3">À propos</h3>
              <hr className="trait-bleu mx-0" />
              <img src={aboutImg} className="img-fluid rounded-3 shadow-sm mb-4" alt="Portrait de John Doe" />
              <p>
                Passionné par le web et les interfaces intuitives, j’accompagne les entreprises dans la création de sites performants, responsives et accessibles. Formé à React et Bootstrap, j’accorde une attention particulière à la qualité du code et au respect des bonnes pratiques SEO.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="section-title mb-3"><strong>Compétences</strong></h4>
              <hr className="trait-bleu mx-0" />
              <div className="mb-2">HTML5 90%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
              </div>
              <div className="mb-2">CSS3 80%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
              </div>
              <div className="mb-2">JAVASCRIP 70%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
              </div>
              <div className="mb-2">PHP 60%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
              </div>
              <div className="mb-2">React 50%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-primary" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div> {/* Fin du .row */}
        </div>   {/* Fin du .container */}
      </section>
    </>
  )
}
