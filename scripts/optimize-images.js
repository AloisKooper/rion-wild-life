import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory paths
const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.jpg', '.jpeg', '.png'];

// Function to process a single image
async function optimizeImage(filePath) {
  try {
    const extension = path.extname(filePath).toLowerCase();
    const outputPath = filePath + '.optimized';
    
    console.log(`Optimizing: ${filePath}`);
    
    // Process based on file extension
    if (extension === '.png') {
      await sharp(filePath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath);
    } else if (['.jpg', '.jpeg'].includes(extension)) {
      await sharp(filePath)
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath);
    }
    
    // Compare file sizes
    const originalSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(filePath)}: ${(originalSize/1024).toFixed(1)}KB → ${(newSize/1024).toFixed(1)}KB (${savings}% saved)`);
    
    // Replace original file with optimized version
    try {
      fs.unlinkSync(filePath);
      fs.renameSync(outputPath, filePath);
    } catch (error) {
      console.warn(`⚠️ Couldn't replace original file: ${filePath}. Optimized version saved as ${outputPath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}: ${error.message}`);
  }
}

// Function to recursively find and process all images
async function processDirectory(directory) {
  try {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      try {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          await processDirectory(filePath);
        } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
          await optimizeImage(filePath);
        }
      } catch (error) {
        console.error(`❌ Error with file ${file}: ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${directory}: ${error.message}`);
  }
}

// Main execution
(async () => {
  console.log('🏁 Starting image optimization...');
  await processDirectory(publicDir);
  console.log('✨ Image optimization complete!');
})(); 