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

    return images;
}
