import home from '../data/home/home.md';
import stories from '../data/the-story/index.js';

export default function prelodBigImages() {
  const images = {};
  images.alreadyLoaded = [];

  stories.forEach(chapter => {
    const imageA = new Image();
    const imageB = new Image();
    imageA.src = chapter.attributes.image;
    imageB.src = chapter.attributes.blurredImage;
    images[`chapter-${chapter.attributes.number}-main`] = imageA;
    images[`chapter-${chapter.attributes.number}-blurred`] = imageB;
  });

  home.attributes.preloadTheseImages.forEach(name => {
    const image = new Image();
    image.src = home.attributes[name];
    images[name] = image;

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
