# Conversion du logo PDF en PNG avec transparence

Le fichier `bz telecom logo complet.pdf` doit être converti en PNG avec fond transparent pour être utilisé sur le web.

## Méthode 1 : Avec Adobe Illustrator (recommandé)
1. Ouvrez `bz telecom logo complet.pdf` dans Adobe Illustrator
2. Si le logo a un fond, supprimez-le (sélectionnez le fond et supprimez-le)
3. Allez dans **Fichier > Exporter > Exporter pour le web**
4. Choisissez le format **PNG-24** avec fond transparent
5. Enregistrez sous le nom `logo.png`
6. Remplacez le fichier dans `public/logo.png`

## Méthode 2 : Avec Adobe Acrobat + Photoshop
1. Ouvrez le PDF dans Adobe Acrobat
2. Exportez en PNG haute résolution
3. Ouvrez le PNG dans Photoshop
4. Supprimez le fond blanc (outil baguette magique ou gomme)
5. Enregistrez en PNG avec transparence
6. Remplacez le fichier dans `public/logo.png`

## Méthode 3 : Avec un convertisseur en ligne
1. Allez sur https://convertio.co/fr/pdf-png/ ou https://cloudconvert.com/pdf-to-png
2. Téléversez `bz telecom logo complet.pdf`
3. Configurez pour garder la transparence (si disponible)
4. Téléchargez le PNG
5. Si le fond n'est pas transparent, ouvrez-le dans un éditeur d'images et supprimez le fond
6. Remplacez le fichier dans `public/logo.png`

## Méthode 4 : Avec GIMP (gratuit)
1. Ouvrez GIMP (téléchargeable gratuitement)
2. Ouvrez `bz telecom logo complet.pdf` (GIMP peut ouvrir les PDF)
3. Supprimez le fond si nécessaire
4. Allez dans **Fichier > Exporter sous**
5. Choisissez PNG et cochez "Enregistrer la couleur de fond"
6. Remplacez le fichier dans `public/logo.png`

Une fois le fichier PNG avec transparence placé dans `public/logo.png`, le site l'utilisera automatiquement.

