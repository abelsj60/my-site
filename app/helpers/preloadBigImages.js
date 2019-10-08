import home from '../data/home/home.md';
import stories from '../data/the-story/index.js';

// Create multiple images
// The first set will have a 1x in their img
// Each image should be be full height of screen
// Each image should be >= the largest width at that height
// -Ie, no image should be < one of the widths at that height
// The second set will have a 2x in their img
// These images will be used when the pixel density is > 1
// Each of these images will be double the size of each original image 
// This means a second set of images must be created, at double the size of the first set
// This set will have a 2x in their img
// When selecting images:
// a. Determine pixel density — will be i) 1x or ii) 2x if density is > 1 (window.devicePixelRatio)
// b. Check the screen height
// c. Select the first height that is >= to the screen height
// d. Check if the screen width is <= the image width
// e. If the width meets the test, use it
// f. If the width does not meet the test, try again.
// Build the img, add the generic key to the object, and pair it with the selected file
// All images will be treated as having the original dimensions: 
// a. 768-1440-1x --> 768x1440
// b. 768-1440-2x --> 1536x2880

// OPTION 2
// 1 set of 2x images for all supported sizes
// Each image should be be full height of screen
// Each image should be >= the largest width at that height
// -Ie, no image should be < one of the widths at that height

export default function prelodBigImages() {
  const images = {};
  images.alreadyLoaded = [];

  const deviceWidth = window.screen.width;
  const deviceHeight = window.screen.height; // use availHeight instead?
  const imageWidth = [
    960,
    1024,
    1080,
    1136,
    1200,
    1280,
    1334,
    1440,
    1536,
    1600,
    1792,
    1921,
    2048,
    2160,
    2304,
    2436,
    2560,
    2688,
    2736,
    2880,
    3000,
    3840,
    4096,
    // 5120,
    // 7680
  ].find((imgWidth, idx, arr) => {
    if (idx < arr.length - 1) {
      // Equation: (origHeight / origWidth) * imgWidth = imgHeight
      const imgHeight = Math.ceil((2985 / 5116) * imgWidth);
      return imgWidth >= deviceWidth && imgHeight >= deviceHeight;
    }

    return width; // default size when nothing fits
  });

  stories.forEach(chapter => {
    const {
      number,
      rootImageUrl
    } = chapter.attributes;
    const imageA = new Image();
    const imageB = new Image();
    const illSource = `/chapter-${number}/chapter-${number}-imc-main-q90-${imageWidth}.jpg`;
    const blurredSource = `/chapter-${number}/blurred/chapter-${number}-ink-blur-0x15-3.jpg`;
    imageA.src = illSource;
    imageB.src = blurredSource;
    images[`chapter-${number}-main`] = imageA;
    images[`chapter-${number}-blurred`] = imageB;
  });

  home.attributes.preloadUrls.forEach((url, idx) => {
    const image = new Image();
    let source;

    if (url.includes('boy') && !url.includes('blur') && imageWidth >= 2880) {
      source = `/${url}/boy-imc-main-q90-2736.png`;
    } else {
      const filePrefix = url.includes('boy')
        ? 'boy'
        : url.includes('forrest')
          ? 'forrest'
          : 'nyc';
      if (url.includes('blur')) {
        source = `/${url}/${filePrefix}-ink-blur-0x15-3.${url.includes('boy') ? 'png' : 'jpg'}`;
      } else {
        source = `/${url}/${filePrefix}-imc-main-q90-${imageWidth}.${url.includes('boy') ? 'png' : 'jpg'}`;
      }
    }

    image.src = source;
    images[home.attributes.imageNames[idx]] = image;

    // A poor man's test for cached images
    if (image.width + image.height > 0) {
      images.alreadyLoaded.push(1);
    } 
  });

  // Note: Full-size image, should be converted and optimized at later date...
  // /business-card/business-card-teen-imc-q91-656-4x.jpg
  
  // Note: Full-size image, should be converted and optimized at later date...
  // /not-found/not-found-jinni-imc-q91-1240-4x.jpg

  [
    `/business-card/business-card-teen-imc-q91-656-4x.jpg`,
    `/not-found/not-found-jinni-imc-q91-1240-4x.jpg`
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
