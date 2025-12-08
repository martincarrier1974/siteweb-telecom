# Script de démarrage pour Next.js - Solution définitive
Write-Host "Nettoyage des processus Node.js..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

Write-Host "Nettoyage du cache Next.js..." -ForegroundColor Yellow
if (Test-Path .next) {
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
}

Write-Host "Vérification du port 3000..." -ForegroundColor Yellow
$portInUse = netstat -ano | findstr ":3000"
if ($portInUse) {
    Write-Host "Le port 3000 est déjà utilisé. Arrêt des processus..." -ForegroundColor Red
    $processes = netstat -ano | findstr ":3000" | ForEach-Object { ($_ -split '\s+')[-1] } | Select-Object -Unique
    foreach ($pid in $processes) {
        if ($pid -match '^\d+$') {
            Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
        }
    }
    Start-Sleep -Seconds 2
}

Write-Host "Démarrage du serveur Next.js..." -ForegroundColor Green
npm run dev

