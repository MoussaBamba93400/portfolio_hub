# Portfolio — Le hub

Site portfolio principal : présentation personnelle et vitrine des 4 projets.
**100 % frontend**, statique, déployable sans configuration.

## Sections

- **Hero** : nom, titre, accroche et CTA vers les projets.
- **À propos** : profil + badges de technologies maîtrisées.
- **Projets** : 4 cartes (aperçus en pur CSS), avec distinction visuelle
  **Fullstack** / **Vitrine**, tags, lien démo et lien GitHub.
- **Contact** : email, GitHub, LinkedIn + formulaire frontend-only (`mailto`).

## Personnalisation

Tout est centralisé dans [`app/data.ts`](app/data.ts) :

- `PROFILE` : nom, titre, accroche, email, liens GitHub / LinkedIn.
- `SKILLS` : badges de technologies.
- `PROJECTS` : nom, type, description, tags, URL de la démo (`live`) et du dépôt (`repo`).

> Pensez à remplacer les URLs `*.example.com` par vos déploiements Vercel réels,
> ainsi que les liens GitHub / LinkedIn.

## Direction artistique

Sombre et moderne : fond `#0a0a0f`, texte clair, accent violet électrique `#7c5cff`.
Police display **Space Grotesk**, body **Manrope**. Reveals au scroll, hover avec
élévation. Mobile-first.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript strict · CSS Modules · `next/font`.

## Lancer en local

```bash
# à la racine du monorepo
npm install
cd apps/portfolio
npm run dev      # http://localhost:3000
```

## Déploiement

Vercel, **sans variable d'environnement**. Réglez le *Root Directory* sur
`apps/portfolio`.
