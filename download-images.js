const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  hero: [
    { url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop', name: 'hero-bg.jpg' }
  ],
  services: [
    { url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop', name: 'sustainable.jpg' },
    { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop', name: 'structural.jpg' },
    { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop', name: 'bim.jpg' },
    { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070&auto=format&fit=crop', name: 'climate.jpg' }
  ],
  insights: [
    { url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop', name: 'climate-resilience.jpg' },
    { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop', name: 'carbon-materials.jpg' },
    { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', name: 'digital-twin.jpg' }
  ],
  projects: [
    { url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2069&auto=format&fit=crop', name: 'copenhagen.jpg' },
    { url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2073&auto=format&fit=crop', name: 'stockholm.jpg' },
    { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', name: 'green-valley.jpg' }
  ],
  cta: [
    { url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2074&auto=format&fit=crop', name: 'careers-bg.jpg' }
  ]
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages() {
  // Create directories
  const publicDir = path.join(__dirname, 'public');
  const imagesDir = path.join(publicDir, 'images');
  
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const [category, imageList] of Object.entries(images)) {
    const categoryDir = path.join(imagesDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    console.log(`\nDownloading ${category} images...`);
    for (const img of imageList) {
      const filepath = path.join(categoryDir, img.name);
      try {
        await downloadImage(img.url, filepath);
      } catch (error) {
        console.error(`✗ Error downloading ${img.name}:`, error.message);
      }
    }
  }

  console.log('\n✓ All images downloaded successfully!');
}

downloadAllImages();
