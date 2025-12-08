# Guide de déploiement en production

## ✅ Code poussé vers GitHub

Le code a été poussé avec succès vers :
- **Repository** : https://github.com/martincarrier1974/siteweb-telecom.git
- **Branche** : main
- **Commit** : a2a2cf3

## 🚀 Déploiement sur Railway

### Si Railway est déjà configuré avec GitHub :

1. **Railway devrait automatiquement détecter le push** et redéployer
2. Vérifiez votre dashboard Railway : https://railway.app
3. Le déploiement devrait commencer automatiquement

### Si Railway n'est pas encore configuré :

1. **Connectez-vous à Railway** : https://railway.app
2. **Créez un nouveau projet** ou sélectionnez votre projet existant
3. **Connectez votre repository GitHub** :
   - Cliquez sur "New Project"
   - Sélectionnez "Deploy from GitHub repo"
   - Choisissez `martincarrier1974/siteweb-telecom`
4. **Railway détectera automatiquement** :
   - Framework : Next.js
   - Build Command : `npm run build`
   - Start Command : `npm start`
5. **Variables d'environnement** (si nécessaire) :
   - `NODE_ENV=production`
   - `PORT` (Railway définit automatiquement)

### Vérification du déploiement :

1. Attendez que le build se termine (2-5 minutes)
2. Railway vous donnera une URL (ex: `votre-projet.railway.app`)
3. Testez l'URL pour vérifier que tout fonctionne

## 📋 Checklist avant déploiement

- ✅ Build local réussi
- ✅ Code poussé vers GitHub
- ✅ Fichiers publics inclus (logo, TeamViewer)
- ✅ Configuration Railway présente
- ✅ Variables d'environnement configurées (si nécessaire)

## 🔧 Configuration actuelle

- **Next.js** : 14.2.33
- **Node.js** : Spécifié dans `.nvmrc`
- **Build** : `npm run build`
- **Start** : `npm start`
- **Port** : Géré automatiquement par Railway

## 🐛 En cas de problème

1. Vérifiez les logs Railway dans le dashboard
2. Vérifiez que le build fonctionne localement : `npm run build`
3. Vérifiez les variables d'environnement
4. Consultez la documentation Railway : https://docs.railway.app

