import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const path = (relative) => fileURLToPath(new URL(relative, root));
await mkdir(path('public/og'), { recursive: true });

// Export the approved ImageGen originals without changing their composition.
for (const name of ['inicio', 'restaurante', 'carta', 'contacto']) {
  await sharp(path(`design/og/${name}.png`))
    .resize(1200, 630, { fit: 'contain', background: '#f7f3eb' })
    .flatten({ background: '#f7f3eb' })
    .jpeg({ quality: 90, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(path(`public/og/${name}.jpg`));
}

// Raster variants derive from the site's existing vector monogram.
const icon = await readFile(path('public/favicon.svg'));
for (const [name, size] of [
  ['favicon-16x16.png', 16], ['favicon-32x32.png', 32],
  ['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512],
]) {
  await sharp(icon, { density: 768 }).resize(size, size).png().toFile(path(`public/${name}`));
}

// ICO container with PNG entries for browsers requesting /favicon.ico.
const sizes = [16, 32, 48];
const entries = await Promise.all(sizes.map(size => sharp(icon, { density: 768 }).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + entries.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(entries.length, 4);
let offset = header.length;
entries.forEach((png, index) => {
  const at = 6 + index * 16;
  header[at] = sizes[index]; header[at + 1] = sizes[index];
  header.writeUInt16LE(1, at + 4); header.writeUInt16LE(32, at + 6);
  header.writeUInt32LE(png.length, at + 8); header.writeUInt32LE(offset, at + 12);
  offset += png.length;
});
await writeFile(path('public/favicon.ico'), Buffer.concat([header, ...entries]));
console.log('Generated 4 Open Graph images (1200×630), 5 PNG icons and favicon.ico.');
