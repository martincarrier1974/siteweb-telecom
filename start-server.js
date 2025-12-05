#!/usr/bin/env node

// Script de démarrage pour Railway avec support du mode standalone
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const standalonePath = path.join(__dirname, '.next', 'standalone', 'server.js');

// Railway définit le port via la variable d'environnement PORT
const port = process.env.PORT || 3000;

if (fs.existsSync(standalonePath)) {
  console.log(`Starting standalone server on port ${port}...`);
  
  // Le serveur standalone de Next.js lit automatiquement PORT depuis process.env
  // On s'assure que PORT est bien défini
  process.env.PORT = port;
  
  const server = spawn('node', [standalonePath], {
    stdio: 'inherit',
    env: {
      ...process.env,
      PORT: port
    }
  });
  
  server.on('error', (err) => {
    console.error('Error starting standalone server:', err);
    process.exit(1);
  });
  
  server.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Server exited with code ${code}`);
      process.exit(code);
    }
  });
} else {
  console.error('Standalone server not found. Make sure you run "npm run build" first.');
  process.exit(1);
}

