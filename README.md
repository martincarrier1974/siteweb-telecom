# Site Web Transactionnel - Telecom

Site web transactionnel moderne inspiré de bzinc.ca avec une palette de couleurs orange, blanc et noir.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **React Icons** - Bibliothèque d'icônes

## 🎨 Design

- **Couleurs principales** : Orange (#FF6600), Blanc (#FFFFFF), Noir (#000000)
- **Design moderne** : Interface épurée et professionnelle
- **Responsive** : Compatible mobile, tablette et desktop

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du projet

```
├── app/                 # Pages et routes Next.js
├── components/          # Composants réutilisables
├── context/            # Contextes React (Cart, etc.)
├── lib/                # Utilitaires et helpers
├── public/             # Assets statiques
└── styles/             # Styles globaux
```

## 📝 Déploiement

### Étape 1 : Préparer le projet localement

```bash
# Installer les dépendances
npm install

# Tester en local
npm run dev
```

### Étape 2 : Créer le dépôt GitHub

1. **Créer un nouveau dépôt sur GitHub** :
   - Allez sur [GitHub](https://github.com)
   - Cliquez sur le bouton "+" en haut à droite
   - Sélectionnez "New repository"
   - Nommez votre dépôt (ex: `siteweb-telecom`)
   - Choisissez Public ou Private
   - **Ne cochez PAS** "Initialize with README" (nous avons déjà un README)
   - Cliquez sur "Create repository"

2. **Initialiser Git et pousser le code** :
```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Site web transactionnel"

# Renommer la branche en main
git branch -M main

# Ajouter le remote GitHub (remplacez par votre URL)
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git

# Pousser le code
git push -u origin main
```

### Étape 3 : Déployer sur Railway

1. **Créer un compte Railway** :
   - Allez sur [Railway](https://railway.app/)
   - Cliquez sur "Start a New Project"
   - Connectez-vous avec votre compte GitHub

2. **Déployer depuis GitHub** :
   - Cliquez sur "New Project"
   - Sélectionnez "Deploy from GitHub repo"
   - Autorisez Railway à accéder à vos dépôts GitHub si demandé
   - Choisissez votre dépôt `siteweb-telecom`

3. **Configuration automatique** :
   - Railway détectera automatiquement que c'est un projet Next.js
   - Il configurera automatiquement le build et le démarrage
   - Le déploiement commencera automatiquement

4. **Variables d'environnement (optionnel)** :
   - Dans les paramètres du projet Railway, allez dans "Variables"
   - Ajoutez si nécessaire :
     - `NODE_ENV=production` (généralement ajouté automatiquement)
     - `PORT=3000` (Railway gère cela automatiquement)

5. **Obtenir l'URL de déploiement** :
   - Une fois le déploiement terminé, Railway générera une URL
   - Cliquez sur "Settings" > "Generate Domain" pour obtenir une URL personnalisée
   - Vous pouvez aussi configurer un domaine personnalisé

6. **Déploiements automatiques** :
   - Railway déploiera automatiquement à chaque push sur la branche `main`
   - Vous pouvez voir les logs de déploiement dans l'onglet "Deployments"

### 🔄 Mettre à jour le projet

Après chaque modification, poussez simplement sur GitHub :

```bash
git add .
git commit -m "Description des modifications"
git push origin main
```

Railway redéploiera automatiquement votre application.

## 🔧 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm start` - Démarre le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## 📄 Licence

Propriétaire - BZ inc.

