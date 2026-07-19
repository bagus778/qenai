import { execSync } from 'child_process';

console.log("=== [1/2] Mendeteksi Project Vite: Memulai Proses Build ===");
execSync('npx vite build', { stdio: 'inherit' });

console.log("=== [2/2] Proses Build Sukses: Menjalankan Server Preview ===");
execSync('npx vite preview --host 0.0.0.0 --port 8443', { stdio: 'inherit' });
