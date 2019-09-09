import bio from '../data/home/home.md';
import stories from '../data/the-story/index.js';

export default function prelodBigImages() {
    const images = {};

    stories.forEach(chapter => {
        const bigImageName = `chapter-${chapter.attributes.number}-main`;
        const blurredImageName = `chapter-${chapter.attributes.number}-blurred`;
        const imageA = new Image();
        const imageB = new Image();

        imageA.src = chapter.attributes.image;
        imageB.src = chapter.attributes.blurredImage;
        images[bigImageName] = imageA;
        images[blurredImageName] = imageB;
    });

    bio.attributes.preloadTheseImages.forEach(name => {
        const image = new Image();

        image.src = bio.attributes[name];
        images[name] = image;
    });

    const businessCardSrc = 'https://user-images.githubusercontent.com/30417590/64480217-8696be80-d191-11e9-994f-b8bd71243766.png';
    const businessCardImage = new Image();
    businessCardImage.src = businessCardSrc;
    images.businessCardImage = businessCardImage;

    return images;
}
