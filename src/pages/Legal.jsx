import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Legal() {
  useEffect(() => {
    document.title = 'Mentions légales – John Doe'
  }, [])

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Mentions légales et informations obligatoires du site de John Doe." />
      </Helmet>

      <section className="py-5">
        <div className="container">
          <h1 className="mb-4"><strong>Mentions légales</strong></h1>

          <div className="accordion" id="legalAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  Éditeur du site
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#legalAccordion">
                <div className="accordion-body">
                  <span className="fw-bold fs-5">John Doe</span> <br />
                  <i className="bi bi-map me-2 text-primary"></i>40 rue Laure Diebold<br />
                  <i className="bi bi-geo-alt me-2 text-primary"></i>69009 Lyon, France<br />
                  <i className="bi bi-telephone me-2 text-primary"></i>10 20 30 40 50<br />
                  <i className="bi bi-envelope me-2 text-primary"></i>john.doe@gmail.com
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  Hébergeur
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
                <div className="accordion-body">
                  <span className="fw-bold fs-5">alwaysdata</span> <br />
                  91 Rue du Faubourg Saint-Honoré, 75008 Paris <br />
                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary d-inline-flex align-items-center mt-1"
                  >
                    <i className="bi bi-globe me-2"></i>
                    www.alwaysdata.com
                  </a>

                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  Crédits
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
                <div className="accordion-body">
                  <span className="fw-bold fs-5">Crédits</span> <br />
                  Ce site a été réalisé par John Doe, étudiant au  <a href="https://centreeuropéendeformation.com/fr/" target="_blank" rel="noopener nofollow">Centre Européen de formation</a><br />
                  Les images utilisées sur ce site sont libre de droits et ont été obtenues sur le site <a href="https://www.pixabay.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener nofollow">Pixabay</a><br />
                  La favicon de ce site a été fournie par <a href="https://www.flaticon.com/free-icons/john-doe" target="_blank" rel="noopener nofollow">John doe Icons erstellt von Freepik - Flaticon</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
