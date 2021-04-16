const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['./client/dist/images/*'], {
  destination: './client/dist/compressed_images',
  plugins: [imageminWebp({quality: 50})]
}).then(() => {
  console.log('Done!');
});