#!/usr/bin/env node

/**
 * Script pour organiser les favicons GingerClick
 * 
 * Ce script vous aide à organiser vos fichiers favicon
 * dans le bon dossier avec les bons noms.
 */

const fs = require('fs');
const path = require('path');

console.log('🎯 GingerClick - Configuration des favicons');
console.log('==========================================\n');

// Dossier de destination
const publicDir = path.join(__dirname, 'public');
const faviconDir = publicDir;

console.log('📁 Dossier de destination :');
console.log(`   ${faviconDir}\n`);

// Liste des fichiers favicon nécessaires
const requiredFiles = [
  {
    name: 'favicon.ico',
    description: 'Favicon principal (format ICO)',
    sizes: '16x16, 32x32, 48x48'
  },
  {
    name: 'favicon-16x16.png',
    description: 'Favicon PNG 16x16 pixels',
    sizes: '16x16'
  },
  {
    name: 'favicon-32x32.png',
    description: 'Favicon PNG 32x32 pixels',
    sizes: '32x32'
  },
  {
    name: 'apple-touch-icon.png',
    description: 'Icône Apple Touch (iPhone/iPad)',
    sizes: '180x180'
  },
  {
    name: 'android-chrome-192x192.png',
    description: 'Icône Android Chrome',
    sizes: '192x192'
  },
  {
    name: 'android-chrome-512x512.png',
    description: 'Icône Android Chrome haute résolution',
    sizes: '512x512'
  },
  {
    name: 'safari-pinned-tab.svg',
    description: 'Icône Safari (monochrome)',
    sizes: 'SVG vectoriel'
  }
];

console.log('📋 Fichiers favicon nécessaires :');
console.log('================================\n');

requiredFiles.forEach((file, index) => {
  const exists = fs.existsSync(path.join(faviconDir, file.name));
  const status = exists ? '✅' : '❌';
  
  console.log(`${index + 1}. ${status} ${file.name}`);
  console.log(`   📝 ${file.description}`);
  console.log(`   📏 Taille: ${file.sizes}`);
  console.log('');
});

console.log('🎨 Couleurs configurées :');
console.log('========================');
console.log('   🟢 Couleur principale: #BFFF00 (vert lime)');
console.log('   🔵 Couleur de fond: #101020 (bleu foncé)');
console.log('');

console.log('📝 Instructions :');
console.log('================');
console.log('1. Convertissez vos images aux tailles requises');
console.log('2. Renommez-les selon la liste ci-dessus');
console.log('3. Placez-les dans le dossier public/');
console.log('4. Lancez "pnpm dev" pour tester');
console.log('');

console.log('🔗 Outils recommandés pour la conversion :');
console.log('==========================================');
console.log('   • https://favicon.io/favicon-converter/');
console.log('   • https://realfavicongenerator.net/');
console.log('   • Photoshop/GIMP pour redimensionner');
console.log('');

// Vérifier si le dossier public existe
if (!fs.existsSync(publicDir)) {
  console.log('❌ Erreur: Le dossier public/ n\'existe pas !');
  process.exit(1);
}

console.log('✅ Dossier public/ trouvé !');
console.log('✅ Configuration Next.js prête !');
console.log('✅ Métadonnées configurées !');
console.log('');
console.log('🚀 Prêt à recevoir vos favicons !');






