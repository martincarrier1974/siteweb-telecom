# Guide de démarrage du serveur de développement

## Problème récurrent : Serveur non accessible

Si le serveur de développement ne répond pas, suivez ces étapes :

### Solution rapide (recommandée)

Utilisez le script PowerShell fourni :
```powershell
.\start-dev.ps1
```

### Solution manuelle

1. **Arrêter tous les processus Node.js :**
   ```powershell
   Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
   ```

2. **Nettoyer le cache Next.js :**
   ```powershell
   Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
   ```

3. **Vérifier que le port 3000 est libre :**
   ```powershell
   netstat -ano | findstr :3000
   ```
   Si le port est utilisé, tuez le processus avec :
   ```powershell
   Stop-Process -Id <PID> -Force
   ```

4. **Démarrer le serveur :**
   ```powershell
   npm run dev
   ```

### Problème OneDrive

Si votre projet est dans OneDrive, cela peut causer des problèmes de synchronisation avec Next.js. Solutions :

1. **Exclure le dossier `.next` de la synchronisation OneDrive :**
   - Clic droit sur le dossier `.next` > OneDrive > Libérer de l'espace
   - Ou exclure le dossier du projet de OneDrive

2. **Déplacer le projet hors de OneDrive** (solution recommandée pour le développement)

### Vérification

Après le démarrage, attendez 10-15 secondes puis vérifiez :
- Ouvrez http://127.0.0.1:3000 dans votre navigateur
- Le serveur devrait répondre avec un code 200

### En cas d'erreur persistante

1. Vérifiez les logs dans le terminal PowerShell
2. Assurez-vous que Node.js est à jour : `node --version`
3. Réinstallez les dépendances : `npm install`
4. Vérifiez qu'aucun antivirus ne bloque Node.js

