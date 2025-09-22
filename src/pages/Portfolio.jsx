import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import portfolio1 from '../assets/img/portfolio/fresh-food.jpg'
import portfolio2 from '../assets/img/portfolio/restaurant-japonais.jpg'
import portfolio3 from '../assets/img/portfolio/espace-bien-etre.jpg'
import portfolio4 from '../assets/img/portfolio/seo.jpg'
import portfolio5 from '../assets/img/portfolio/coder.jpg'
import portfolio6 from '../assets/img/portfolio/screens.jpg'
import banner from '../assets/img/banner.jpg'
const projects = [
  { img: portfolio1, title: <><strong>Fresh food</strong></>, text: 'Site de vente de produits frais en ligne', link: '#', footer: 'Site réalisé avec PHP et MySQL' },
  { img: portfolio2, title: <><strong>Restaurant Akira</strong></>, text: 'Site de vente de produits frais en ligne', link: '#', footer: 'Site réalisé avec WordPress' },
  { img: portfolio3, title: <><strong>Espace bien-être</strong></>, text: 'Site de vente de produits frais en ligne', link: '#', footer: 'Site réalisé avec LARAVEL' },
  { img: portfolio4, title: <><strong>SEO</strong></>, text: 'Amélioration du référencement de site e-commerce', link: '#', footer: 'Utilisation des outils SEO' },
  { img: portfolio5, title: <><strong>Création API</strong></>, text: 'Création API RESTFULL publique.', link: '#', footer: 'PHP - SYMFONY' },
  { img: portfolio6, title: <><strong>Maquette site Web</strong></>, text: 'Création du prototype de site.', link: '#', footer: 'Réalisé avec FIGMA' },
]

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio – John Doe'
  }, [])

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Découvrez les projets réalisés par John Doe : e-commerce, dashboard, landing page, blog technique et plus."
        />
      </Helmet>
      <div className="header-banner">
        <img src={banner} alt="Bannière John Doe" className="w-100" style={{ maxHeight: '300px', objectFit: 'cover' }} />
      </div>

      <section className="py-5">
        <div className="container">
          <h1 className="mb-4 text-center"><strong>Portfolio</strong></h1>
          <p className="text-center">Voici quelques-une de mes réalisations</p>
          <hr className="trait-bleu mx-auto" style={{ borderTop: '5px solid #0d6efd', width: '500px', opacity: 1 }} />
          <div className="row g-4">
            {projects.map((p, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 border-0 portfolio-card">
                  <img src={p.img} className="card-img-top" alt={p.title} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text flex-fill">{p.text}</p>
                    <a href={p.link} className="btn btn-primary mt-auto" target="_blank" rel="noopener nofollow">
                      Voir le site

                    </a>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">{p.footer}</small>
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
