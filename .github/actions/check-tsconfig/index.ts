import * as fs from 'fs';

if (!fs.existsSync('tsconfig.json')) {
    console.error('tsconfig.json não encontrado! Abortando...');
    process.exit(1);
} else {
    console.log('tsconfig.json OK ✅');
}
