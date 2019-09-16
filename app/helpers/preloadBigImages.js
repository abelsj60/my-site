import home from '../data/home/home.md';
import stories from '../data/the-story/index.js';

export default function prelodBigImages() {
  const images = {};

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

    if (images.alreadyLoaded === undefined) {
      images.alreadyLoaded = [];
    }

    if (image.complete) {
      images.alreadyLoaded.push(1);
    }
  });
  
  const businessCardSrc = 'https://user-images.githubusercontent.com/30417590/64480217-8696be80-d191-11e9-994f-b8bd71243766.png';
  const notFoundSrc = 'https://user-images.githubusercontent.com/30417590/64972267-ff270a80-d876-11e9-8af9-552472d29216.png';
  const businessCardImage = new Image();
  const notFoundImage = new Image();

  businessCardImage.src = businessCardSrc;
  notFoundImage.src = notFoundSrc;
  images.businessCardImage = businessCardImage;
  images.notFoundImage = notFoundImage;

  return images;
}
