# Guide de déplacement du projet hors de OneDrive

## Étape 1 : Arrêter le serveur de développement
```powershell
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
```

## Étape 2 : Vérifier l'état Git
Assurez-vous que tous vos changements sont commités :
```powershell
git status
git add .
git commit -m "Sauvegarde avant déplacement"
```

## Étape 3 : Déplacer le projet

### Option A : Utiliser le script PowerShell (recommandé)
Exécutez le script `move-project.ps1` qui va :
- Créer le dossier de destination
- Copier tous les fichiers
- Préserver Git
- Mettre à jour les chemins

### Option B : Déplacement manuel

1. **Créer le nouveau dossier :**
   ```powershell
   New-Item -ItemType Directory -Path "C:\Users\MartinCarrier\Applications\sitewebTelecom" -Force
   ```

2. **Copier tous les fichiers (sauf node_modules et .next) :**
   ```powershell
   $source = "C:\Users\MartinCarrier\OneDrive - BZ inc\Applications\sitewebTelecom"
   $dest = "C:\Users\MartinCarrier\Applications\sitewebTelecom"
   
   # Copier tous les fichiers sauf node_modules et .next
   Get-ChildItem -Path $source -Exclude node_modules,.next | Copy-Item -Destination $dest -Recurse -Force
   ```

3. **Réinstaller les dépendances :**
   ```powershell
   cd "C:\Users\MartinCarrier\Applications\sitewebTelecom"
   npm install
   ```

## Étape 4 : Vérifier que tout fonctionne
```powershell
npm run dev
```

## Étape 5 : Supprimer l'ancien projet (optionnel)
Une fois que vous avez vérifié que tout fonctionne dans le nouveau emplacement :
```powershell
Remove-Item -Recurse -Force "C:\Users\MartinCarrier\OneDrive - BZ inc\Applications\sitewebTelecom"
```

## Avantages du nouveau emplacement
- ✅ Pas de synchronisation OneDrive (plus rapide)
- ✅ Pas de conflits de fichiers
- ✅ Meilleures performances Next.js
- ✅ Moins de problèmes de cache

