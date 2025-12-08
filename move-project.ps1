# Script de déplacement du projet hors de OneDrive
Write-Host "=== Déplacement du projet hors de OneDrive ===" -ForegroundColor Cyan
Write-Host ""

# Arrêter tous les processus Node.js
Write-Host "1. Arrêt des processus Node.js..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Chemins
$sourcePath = "C:\Users\MartinCarrier\OneDrive - BZ inc\Applications\sitewebTelecom"
$destPath = "C:\Users\MartinCarrier\Applications\sitewebTelecom"

# Vérifier que le chemin source existe
if (-not (Test-Path $sourcePath)) {
    Write-Host "ERREUR: Le chemin source n'existe pas: $sourcePath" -ForegroundColor Red
    exit 1
}

# Vérifier l'état Git
Write-Host "2. Vérification de l'état Git..." -ForegroundColor Yellow
Set-Location $sourcePath
$gitStatus = git status --porcelain 2>&1
if ($LASTEXITCODE -eq 0 -and $gitStatus) {
    Write-Host "ATTENTION: Vous avez des changements non commités!" -ForegroundColor Yellow
    Write-Host "Voulez-vous les commiter maintenant? (O/N)" -ForegroundColor Yellow
    $response = Read-Host
    if ($response -eq "O" -or $response -eq "o") {
        git add .
        git commit -m "Sauvegarde avant déplacement hors de OneDrive"
    }
}

# Créer le dossier de destination
Write-Host "3. Création du dossier de destination..." -ForegroundColor Yellow
if (Test-Path $destPath) {
    Write-Host "Le dossier de destination existe déjà. Voulez-vous le supprimer? (O/N)" -ForegroundColor Yellow
    $response = Read-Host
    if ($response -eq "O" -or $response -eq "o") {
        Remove-Item -Recurse -Force $destPath
    } else {
        Write-Host "Annulation du déplacement." -ForegroundColor Red
        exit 1
    }
}
New-Item -ItemType Directory -Path $destPath -Force | Out-Null

# Copier les fichiers (exclure node_modules et .next)
Write-Host "4. Copie des fichiers..." -ForegroundColor Yellow
$excludeItems = @('node_modules', '.next', '.git')
Get-ChildItem -Path $sourcePath -Force | Where-Object { $_.Name -notin $excludeItems } | ForEach-Object {
    Write-Host "  Copie: $($_.Name)" -ForegroundColor Gray
    Copy-Item -Path $_.FullName -Destination $destPath -Recurse -Force
}

# Copier le dossier .git séparément (important pour préserver l'historique)
Write-Host "5. Copie de l'historique Git..." -ForegroundColor Yellow
if (Test-Path "$sourcePath\.git") {
    Copy-Item -Path "$sourcePath\.git" -Destination "$destPath\.git" -Recurse -Force
}

# Réinstaller les dépendances
Write-Host "6. Réinstallation des dépendances..." -ForegroundColor Yellow
Set-Location $destPath
npm install

Write-Host ""
Write-Host "=== Déplacement terminé avec succès! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Nouveau emplacement: $destPath" -ForegroundColor Cyan
Write-Host ""
Write-Host "Pour démarrer le serveur:" -ForegroundColor Yellow
Write-Host "  cd `"$destPath`"" -ForegroundColor White
Write-Host "  npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Vous pouvez maintenant supprimer l'ancien projet si tout fonctionne correctement." -ForegroundColor Yellow

