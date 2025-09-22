import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import banner from '../assets/img/banner.jpg'
const services = [
  { icon: 'bi-brush', title: <strong>UX-Design</strong>, text: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objects connectés, etc...) en plaçant l'utilisateur au centre des préauccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible." },
  { icon: 'bi-code-slash', title: <strong>Responsive Design</strong>, text: 'Le developpement de sites web consiste à créer des sites internet en utilisant des langages de programmation ( HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).' },
  { icon: 'bi-search', title: <strong>SEO & Performance</strong>, text: "Le référencement naturel (SEO) est une tecnique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recharche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site." },
]

export default function Services() {
  useEffect(() => {
    document.title = 'Services – John Doe'
  }, [])

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Découvrez mes services : développement React, responsive design, SEO, performance, tests, déploiement et accompagnement."
        />
      </Helmet>

      <div className="header-banner">
        <img src={banner} alt="Bannière John Doe" className="w-100" style={{ maxHeight: '300px', objectFit: 'cover' }} />
      </div>

      <section className="py-5">
        <div className="container">
          <h1 className="mb-4 text-center"><strong>Mon offre des services</strong></h1>
          <p className="text-center">Voci les prestations auquelles je peux intervenir.</p>
          <hr className="trait-bleu mx-auto" style={{ borderTop: '5px solid #0d6efd', width: '500px', opacity: 1 }} />
          <div className="row g-4">
            {services.map((s, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 border-0 p-3 service-card">
                  <div className="card-body">
                    <div className="display-6 mb-3">
                      <i className={`bi ${s.icon} text-primary`} aria-hidden="true"></i>
                    </div>
                    <h5 className="card-title">{s.title}</h5>
                    <p className="card-text">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
