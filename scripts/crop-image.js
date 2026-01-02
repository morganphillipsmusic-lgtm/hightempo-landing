const sharp = require('sharp');
const path = require('path');

const inputPath = 'c:\\Users\\morgz\\OneDrive\\Desktop\\HighTempo2\\IMG_8786 (2).JPG';
const outputPath = path.join(__dirname, '..', 'public', 'morgan.jpg');

async function cropImage() {
    try {
        const metadata = await sharp(inputPath).metadata();
        console.log('Original dimensions:', metadata.width, 'x', metadata.height);

        // Crop to head/shoulders/upper chest - take top 55% of image
        const cropHeight = Math.floor(metadata.height * 0.55);
        const cropWidth = Math.floor(metadata.width * 0.9);
        const left = Math.floor((metadata.width - cropWidth) / 2);

        await sharp(inputPath)
            .extract({
                left: left,
                top: 0,
                width: cropWidth,
                height: cropHeight
            })
            .resize(600, 750, { fit: 'cover', position: 'top' })
            .jpeg({ quality: 90 })
            .toFile(outputPath);

        console.log('Cropped image saved to:', outputPath);
    } catch (err) {
        console.error('Error:', err);
    }
}

cropImage();
