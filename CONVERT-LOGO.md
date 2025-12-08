# Instructions pour convertir le logo .eps en PNG

Le fichier `bz telecom logo complet 1.eps` doit être converti en PNG pour être utilisé sur le web.

## Méthode 1 : Avec Adobe Illustrator (recommandé)
1. Ouvrez `bz telecom logo complet 1.eps` dans Adobe Illustrator
2. Allez dans **Fichier > Exporter > Exporter pour le web**
3. Choisissez le format **PNG-24** avec fond transparent
4. Enregistrez sous le nom `logo.png`
5. Remplacez le fichier dans `public/logo.png`

## Méthode 2 : Avec un convertisseur en ligne
1. Allez sur https://convertio.co/fr/eps-png/ ou https://cloudconvert.com/eps-to-png
2. Téléversez le fichier `.eps`
3. Configurez pour garder la transparence
4. Téléchargez le PNG
5. Remplacez le fichier dans `public/logo.png`

## Méthode 3 : Avec ImageMagick (si installé)
```powershell
magick "bz telecom logo complet 1.eps" -background transparent -density 300 public/logo.png
```

Une fois converti, le logo sera automatiquement utilisé sur le site.

