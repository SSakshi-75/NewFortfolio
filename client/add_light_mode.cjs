const fs = require('fs');
const path = require('path');

const directories = [
  './src/components/portfolio',
  './src/components/common',
  './src/pages',
];

const classMappings = {
  'bg-\\[#070b14\\]': 'bg-gray-50 dark:bg-[#070b14]',
  'bg-\\[#0c1220\\]': 'bg-white dark:bg-[#0c1220]',
  'text-white': 'text-gray-900 dark:text-white',
  'text-gray-400': 'text-gray-600 dark:text-gray-400',
  'text-gray-300': 'text-gray-700 dark:text-gray-300',
  'text-gray-500': 'text-gray-500 dark:text-gray-500',
  'border-white/\\[0.06\\]': 'border-gray-200 dark:border-white/[0.06]',
  'border-white/\\[0.08\\]': 'border-gray-200 dark:border-white/[0.08]',
  'border-white/\\[0.1\\]': 'border-gray-300 dark:border-white/[0.1]',
  'border-white/\\[0.12\\]': 'border-gray-300 dark:border-white/[0.12]',
  'border-white/\\[0.15\\]': 'border-gray-300 dark:border-white/[0.15]',
  'bg-white/\\[0.02\\]': 'bg-white dark:bg-white/[0.02]',
  'bg-white/\\[0.03\\]': 'bg-gray-50 dark:bg-white/[0.03]',
  'bg-white/\\[0.04\\]': 'bg-gray-100 dark:bg-white/[0.04]',
  'bg-white/\\[0.05\\]': 'bg-gray-100 dark:bg-white/[0.05]',
  'bg-white/\\[0.08\\]': 'bg-gray-200 dark:bg-white/[0.08]',
  'hover:border-white/\\[0.1\\]': 'hover:border-gray-300 dark:hover:border-white/[0.1]',
  'hover:border-white/\\[0.12\\]': 'hover:border-gray-300 dark:hover:border-white/[0.12]',
  'hover:border-white/\\[0.15\\]': 'hover:border-gray-400 dark:hover:border-white/[0.15]',
  'hover:bg-white/\\[0.04\\]': 'hover:bg-gray-100 dark:hover:bg-white/[0.04]',
  'hover:bg-white/\\[0.05\\]': 'hover:bg-gray-200 dark:hover:bg-white/[0.05]',
  'hover:bg-white/\\[0.08\\]': 'hover:bg-gray-200 dark:hover:bg-white/[0.08]',
  'hover:bg-white/\\[0.1\\]': 'hover:bg-gray-200 dark:hover:bg-white/[0.1]',
  'hover:text-white': 'hover:text-blue-600 dark:hover:text-white'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Sort keys by length descending to prevent partial replacements
  const sortedKeys = Object.keys(classMappings).sort((a, b) => b.length - a.length);

  sortedKeys.forEach(key => {
    const value = classMappings[key];
    // Simple global replace. We avoid replacing already processed dark: variants by using a negative lookbehind if possible,
    // but JS regex doesn't universally support it in older node, so we use word boundaries.
    // However, tailwind classes have brackets and slashes which aren't word boundaries.
    // A safe way is to split by spaces or quotes, but simple replace with a lookbehind is better:
    const regex = new RegExp(`(?<!dark:)(?<!\\S)${key}(?!\\S)`, 'g');
    content = content.replace(regex, value);
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

directories.forEach(dir => walkDir(path.resolve(__dirname, dir)));
console.log('Done.');
