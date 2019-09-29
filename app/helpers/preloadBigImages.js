import home from '../data/home/home.md';
import stories from '../data/the-story/index.js';

// Create multiple images
// The first set will have a 1x in their name
// Each image should be be full height of screen
// Each image should be >= the largest width at that height
// -Ie, no image should be < one of the widths at that height
// The second set will have a 2x in their name
// These images will be used when the pixel density is > 1
// Each of these images will be double the size of each original image 
// This means a second set of images must be created, at double the size of the first set
// This set will have a 2x in their name
// When selecting images:
// a. Determine pixel density — will be i) 1x or ii) 2x if density is > 1 (window.devicePixelRatio)
// b. Check the screen height
// c. Select the first height that is >= to the screen height
// d. Check if the screen width is <= the image width
// e. If the width meets the test, use it
// f. If the width does not meet the test, try again.
// Build the name, add the generic key to the object, and pair it with the selected file
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

  // For height

  // const pixelDensity = Math.ceil(window.devicePixelDensity);
  // const pixelDensity = window.devicePixelDensity;
  const width = window.screen.width;
  const height = window.screen.height; // use availHeight instead?
  const imageDimensions = [
    [1028, 600],
    [1366, 797],
    [1600, 900], // Cut
    [1645, 960],
    [1755, 1024],
    [1921, 1121], // Cut
    [1947, 1136],
    [2048, 1195], // Cut
    [2056, 1200],
    [2194, 1280], // Cut (plus add?)
    [2632, 1536],
    [3840, 2241],
    [5116, 2985], // Cut
    [5120, 2988],
    [7680, 4481]
  ].find((dimension, idx, arr) => {
    if (idx < arr.length - 1) {
      return dimension[0] >= width && dimension[1] >= height;
    }

    return dimension; // default
  });

  stories.forEach(chapter => {
    const imageA = new Image();
    const imageB = new Image();
    imageA.src = chapter.attributes.image;
    imageB.src = chapter.attributes.blurredImage;
    images[`chapter-${chapter.attributes.number}-main`] = imageA;
    images[`chapter-${chapter.attributes.number}-blurred`] = imageB;

    // const newSource = `chapter-${chapter.attributes.number}-${imageDimensions[0]}-${imageDimensions[1]}-main`;
    // chapter.attributes[newSource]
  });

  home.attributes.preloadTheseImages.forEach(name => {
    const image = new Image();
    image.src = home.attributes[name];
    images[name] = image;

    // Poor man's test for cached images
    if (image.complete) {
      images.alreadyLoaded.push(1);
    }
  });

  [
    'https://user-images.githubusercontent.com/30417590/64480217-8696be80-d191-11e9-994f-b8bd71243766.png',
    'https://user-images.githubusercontent.com/30417590/64972267-ff270a80-d876-11e9-8af9-552472d29216.png'
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
