import home from '../data/home/home.md';
import stories from '../data/the-story/index.js';

// On images: https://images.guide
// WebP support: https://stackoverflow.com/a/54631141

export default function prelodBigImages() {
  const images = {};
  images.alreadyLoaded = [];

  const deviceWidth = window.screen.width;
  const deviceHeight = window.screen.height; // use availHeight instead?
  const imageWidth = [
    640,
    768,
    960,
    1024,
    1080,
    1136,
    1200,
    1280,
    1334,
    1366,
    2880,
    3000,
    3840,
    4096,
    5120,
    // 7680 // Huge files, currently unused
  ].find((imgWidth, idx, arr) => {
    if (idx < arr.length - 1) {
      // Equation: (origHeight / origWidth) * imgWidth = imgHeight
      const imgHeight = Math.ceil((2985 / 5116) * imgWidth);
      return imgWidth >= deviceWidth && imgHeight >= deviceHeight;
    }

    return imgWidth; // default size when nothing fits (5120)
  });

  stories.forEach(chapter => {
    const { number } = chapter.attributes;
    const imageA = new Image();
    const imageB = new Image();
    const illSource = `/chapter-${number}/chapter-${number}-imc-main-101419-q${
      imageWidth < 2880
        ? '90'
        : '50'
    }-${imageWidth}.jpg`;
    const blurredSource = `/chapter-${number}/blurred/chapter-${number}-ink-blur-0x15-160.jpg`;
    imageA.src = illSource;
    imageB.src = blurredSource;
    images[`chapter-${number}-main`] = imageA;
    images[`chapter-${number}-blurred`] = imageB;
  });

  home.attributes.preloadUrls.forEach((path, idx) => {
    const image = new Image();
    const filePrefix = path.includes('boy')
        ? 'boy'
        : path.includes('forrest')
          ? 'forrest'
          : 'nyc';
    let source;

    if (path.includes('boy') && !path.includes('blur') && imageWidth >= 2880 && imageWidth <= 3000) {
      // Manually skip boy-...-2880.png b/c the next level seems to look a lot nicer on screen
      source = `/${path}/${filePrefix}-imc-main-101419-3000.png`;
    } else {
      if (path.includes('blur')) {
        source = `/${path}/${filePrefix}-ink-blur-0x15-160.${path.includes('boy') ? 'png' : 'jpg'}`;
      } else {
        source = `/${path}/${filePrefix}-imc-main-101419-${
          !path.includes('boy')
            ? imageWidth < 2880 ? 'q90-' : 'q50-'
            : ''
        }${imageWidth}.${path.includes('boy') ? 'png' : 'jpg'}`;
      }
    }

    image.src = source;
    images[home.attributes.imageNames[idx]] = image;

    // A poor man's test for cached images, works better than .complete (sometimes wrong)
    if (image.width + image.height > 0) {
      images.alreadyLoaded.push(1);
    } 
  });

  // Note: Full-size image, should be converted and optimized at later date...
  // /business-card/business-card-teen-imc-q91-656-4x.jpg
  
  // Note: Full-size image, should be converted and optimized at later date...
  // /not-found/not-found-jinni-imc-q91-1240-4x.jpg

  [
    `/business-card/teen-fairy-img-q90-640-4x.jpg`,
    `/not-found/jinni-img-q90-1240-4x.jpg`
  ].forEach((src, idx) => {
    const image = new Image();
    image.src = src;
    images[
      idx < 1
        ? 'businessCardImage' 
        : 'notFoundImage'
    ] = image;
  });

  return images;
}
