import { cp, copyFile, mkdir } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
await copyFile('index.html', 'dist/index.html');
console.log('Static website built in dist/');
