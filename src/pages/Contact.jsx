import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | John Doe";
  }, []);

  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      formRef.current.classList.add("was-validated");
      return;
    }
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Contactez John Doe pour toute demande de devis, question ou collaboration. Réponse sous 24 heures."
        />
      </Helmet>

      <section className="py-5">
        <div className="container">
          <h1 className="mb-4 text-center">Contact</h1>
          <p className="text-center mb-5">
            Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
          </p>
          <hr className="trait-bleu mx-auto" style={{ borderTop: '5px solid #0d6efd', width: '600px', opacity: 1 }} />
          <div className="row g-4 bg-white shadow rounded p-4">
            {/* FORMULAIRE */}
            <div className="col-12 col-lg-6">
              <h2 className="h5 border-bottom pb-2 mb-4">Formulaire de contact</h2>
              <form ref={formRef} onSubmit={onSubmit} noValidate>
                <div className="mb-3">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Votre nom"
                    required
                  />
                  <div className="invalid-feedback">Veuillez indiquer votre nom.</div>
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Votre adresse email"
                    required
                  />
                  <div className="invalid-feedback">Veuillez saisir une adresse email valide.</div>
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                  <div className="invalid-feedback">Veuillez indiquer un numéro de téléphone.</div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="Sujet"
                    required
                  />
                  <div className="invalid-feedback">Veuillez préciser le sujet de votre message.</div>
                </div>

                <div className="mb-3">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Votre message"
                    required
                  ></textarea>
                  <div className="invalid-feedback">Veuillez écrire votre message.</div>
                </div>

                <button type="submit" className="btn btn-primary">Envoyer</button>

                {submitted && (
                  <div className="alert alert-success mt-3">
                    Merci ! Votre message a été envoyé avec succès.
                  </div>
                )}
              </form>

            </div>

            {/* COORDONNÉES */}
            <div className="col-12 col-lg-6">
              <h2 className="h5 border-bottom pb-2 mb-4">Mes coordonnées</h2>
              <p><strong>John Doe</strong></p>
              <i className="bi bi-map me-2 text-primary"></i>40 rue Laure Diebold<br />
              <i className="bi bi-geo-alt me-2 text-primary"></i>69009 Lyon, France<br />
              <i className="bi bi-telephone me-2 text-primary"></i>10 20 30 40 50<br />
              <i className="bi bi-envelope me-2 text-primary"></i>john.doe@gmail.com

              <div className="mt-3">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.574615925577!2d4.80427891556735!3d45.779374979106744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea8a9e8ddcf9%3A0xdda54fb4e2a938f9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1693311111111"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
