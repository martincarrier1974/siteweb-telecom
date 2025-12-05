# Solution au problème de Git commit qui "tourne en rond"

## 🔍 Cause du problème

Votre projet est situé dans OneDrive (`OneDrive - BZ inc\Applications\sitewebTelecom`), et OneDrive synchronise le dossier `.git`. Cela peut causer des conflits et des boucles infinies lors des commits car OneDrive modifie les fichiers dans `.git` pendant que Git travaille.

## ✅ Solution : Exclure le dossier .git de OneDrive

### Méthode 1 : Via les paramètres OneDrive (Recommandé)

1. **Cliquez sur l'icône OneDrive** dans la barre des tâches (coin inférieur droit)
2. Cliquez sur **"Paramètres"** (ou "Settings")
3. Allez dans l'onglet **"Sauvegarde"** (ou "Backup")
4. Cliquez sur **"Gérer la sauvegarde"** (ou "Manage backup")
5. Trouvez le dossier `Applications` dans la liste
6. Cliquez sur **"Arrêter la sauvegarde"** pour ce dossier spécifique
   - OU excluez uniquement le dossier `sitewebTelecom` si possible

### Méthode 2 : Déplacer le projet hors de OneDrive (Solution permanente)

1. **Déplacez votre projet** vers un dossier local (ex: `C:\Dev\sitewebTelecom`)
2. OneDrive ne synchronisera plus le dossier `.git`
3. Vous pouvez toujours synchroniser le code source si nécessaire, mais pas le dossier `.git`

### Méthode 3 : Utiliser Git dans un dossier local et synchroniser uniquement le code

1. Créez un dossier de travail local (ex: `C:\Dev\sitewebTelecom`)
2. Clonez votre dépôt GitHub dans ce dossier local
3. Travaillez normalement avec Git
4. Si vous avez besoin de synchroniser le code, copiez uniquement les fichiers source (pas le dossier `.git`)

## 🚀 Après avoir appliqué la solution

Une fois que vous avez exclu `.git` de OneDrive, testez un commit :

```bash
git add .
git commit -m "Test commit"
```

Le commit devrait maintenant fonctionner normalement sans "tourner en rond".

## 📝 Note importante

Le dossier `.git` contient l'historique complet de votre projet Git. Il ne doit **jamais** être synchronisé par OneDrive, Dropbox, ou tout autre service de synchronisation cloud, car cela cause des conflits et peut corrompre votre dépôt Git.

