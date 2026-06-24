# Coders Monkeys — Front-end

Application web front-end du projet **Coders Monkeys**, construite avec Next.js 15, React 19, TypeScript, Tailwind CSS et Firebase.

---

## Stack technique

| Technologie     | Version   | Rôle                              |
|-----------------|-----------|-----------------------------------|
| Next.js         | 15.3.4    | Framework React (SSG / export statique) |
| React           | 19        | UI                                |
| TypeScript      | 5         | Typage statique                   |
| Tailwind CSS    | 4         | Styles utilitaires                |
| Firebase        | 11.9.1    | Backend-as-a-service              |

---

## Structure du projet

```
front-end/
├── public/
│   └── favicon.ico
├── src/
│   ├── config/
│   │   └── firebase-config.js   # Initialisation Firebase
│   ├── pages/
│   │   ├── _app.tsx             # Wrapper global
│   │   ├── _document.tsx        # Document HTML personnalisé
│   │   └── index.tsx            # Page d'accueil
│   ├── styles/
│   │   └── globals.css          # Styles globaux
│   └── ui/
│       └── components/
│           └── seo.tsx          # Composant SEO (Head, meta tags)
├── next.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Prérequis

- **Node.js** ≥ 18
- **npm** ou **yarn**

---

## Installation

```bash
git clone https://github.com/<votre-username>/front-end.git
cd front-end
npm install
```

---

## Lancer le projet

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## Scripts disponibles

| Commande          | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Lance le serveur de développement        |
| `npm run build`   | Compile l'application pour la production |
| `npm run export`  | Exporte en HTML statique                 |
| `npm run start`   | Démarre le serveur de production         |
| `npm run lint`    | Analyse du code avec ESLint              |

---

## Configuration Firebase

Le fichier `src/config/firebase-config.js` contient la configuration Firebase.  
⚠️ En production, utiliser des **variables d'environnement** plutôt que des clés en dur :

```env
# .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
```

---

## Déploiement

Ce projet est configuré en **export statique** (`output: 'export'`).  
Compatible avec Vercel, Firebase Hosting, GitHub Pages ou tout hébergeur de fichiers statiques.

```bash
npm run build
# Fichiers générés dans /out
```
