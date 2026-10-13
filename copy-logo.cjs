const fs = require('fs');
const path = require('path');

const src = path.join(
  process.env.USERPROFILE,
  '.gemini',
  'antigravity',
  'brain',
  '1f7257fa-a908-429c-b57b-7cae40c3d1ea',
  '.user_uploaded',
  'media_1791866565632_f5f4d6bc.png'
);

console.log('Source file:', src, 'exists:', fs.existsSync(src));

const buf = fs.readFileSync(src);
console.log('Read source buffer bytes:', buf.length);

const targets = [
  path.join(__dirname, 'public', 'favicon.png'),
  path.join(__dirname, 'public', 'favicon.ico'),
  path.join(__dirname, 'public', 'apple-touch-icon.png'),
  path.join(__dirname, 'public', 'official-logo.png'),
  path.join(__dirname, 'public', 'logo.png'),
];

for (const target of targets) {
  try {
    if (fs.existsSync(target)) {
      fs.chmodSync(target, 0o666);
    }
    fs.writeFileSync(target, buf);
    console.log('Successfully wrote:', target, 'size:', fs.statSync(target).size);
  } catch (err) {
    console.error('Error writing', target, ':', err.message);
  }
}
