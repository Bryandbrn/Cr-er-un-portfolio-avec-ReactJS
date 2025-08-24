 Portfolio - John DOE

Ce projet est un **portfolio personnel** développé en **React.js** avec **Bootstrap**, dans le cadre de la formation de développeur web au CEF.  
Il présente le profil de John DOE, ses services, ses réalisations ainsi qu’une page de contact et les mentions légales.

---

 Fonctionnalités

- Page d’accueil avec **Hero** + présentation et compétences (progress bars).
- Page **Services** avec cards et effets au survol.
- Page **Portfolio** avec au moins 6 projets.
- Page **Contact** avec formulaire + coordonnées + Google Map.
- Page **Mentions légales** avec accordéon Bootstrap (non indexée SEO).
- **Header** et **Footer** présents sur toutes les pages.
- **Modale GitHub** : intégration de l’API GitHub pour afficher des infos de profil.
- Effets graphiques conformes à la consigne (hover, ombres, transitions CSS).

---

Technologies utilisées

- [React.js](https://fr.react.dev/)  
- [React Router](https://reactrouter.com/)  
- [Bootstrap](https://getbootstrap.com/)  
- CSS personnalisé (effets hover, transitions, responsivité)  

---

## 📂 Structure du projet
src/
├─ assets/ # Images, favicon, logo
├─ components/ # Composants globaux (Header, Footer, Hero, etc.)
│ ├─ Header.jsx
│ ├─ Footer.jsx
│ ├─ Hero.jsx
│ └─ GithubModal.jsx
├─ pages/ # Pages principales
│ ├─ Home.jsx
│ ├─ Services.jsx
│ ├─ Portfolio.jsx
│ ├─ Contact.jsx
│ └─ Mentions.jsx
├─ App.jsx # Définition des routes
├─ main.jsx # Point d’entrée React
└─ index.css # Styles globaux + effets graphiques

---

## ⚙️ Installation et utilisation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/ton-compte/portfolio-react.git
   cd portfolio-react
Installer les dépendances

npm install


Lancer le serveur de développement

npm run dev


Ouvrir dans le navigateur
Par défaut : http://localhost:5173
Déploiement

Ce projet peut être déployé facilement sur :

Vercel

Netlify

GitHub Pages via gh-pages

📸 Captures d’écran

(à ajouter une fois les pages complétées et stylisées)

📜 Mentions légales

Éditeur du site : John DOE

Hébergeur : à compléter

Crédits :

Images : Pixabay

Icônes : Flaticon






