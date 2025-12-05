#!/usr/bin/env node

// Script de démarrage pour Railway avec support du mode standalone
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const standalonePath = path.join(__dirname, '.next', 'standalone', 'server.js');

// Railway définit le port via la variable d'environnement PORT
const port = process.env.PORT || 3000;

if (!fs.existsSync(standalonePath)) {
  console.error('Standalone server not found. Make sure you run "npm run build" first.');
  process.exit(1);
}

console.log(`Starting standalone server on port ${port}...`);
console.log(`Standalone path: ${standalonePath}`);

// S'assurer que PORT est défini
process.env.PORT = port;

// Exécuter le serveur standalone directement
// Le serveur standalone de Next.js lit automatiquement PORT depuis process.env
const server = exec(`node ${standalonePath}`, {
  env: {
    ...process.env,
    PORT: port,
    NODE_ENV: 'production'
  },
  stdio: 'inherit'
});

server.on('error', (err) => {
  console.error('Error starting standalone server:', err);
  process.exit(1);
});

server.on('exit', (code, signal) => {
  if (code !== 0 && code !== null) {
    console.error(`Server exited with code ${code} and signal ${signal}`);
    process.exit(code || 1);
  }
});

// Gérer les signaux pour arrêter proprement
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  server.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  server.kill('SIGINT');
});

