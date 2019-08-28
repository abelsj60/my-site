import React from 'react';
import bio from '../data/home/home.md';
import stories from '../data/the-story/index.js';

export default function ImageLoader(props) {
    stories.forEach(item => {
        const imageA = new Image();
        const imageB = new Image();
        imageA.src = item.attributes.image;
        imageB.src = item.attributes.blurredImage;
    });

    [
        bio.attributes.boyInForegroundImageBlurred,
        bio.attributes.boyInForegroundImage,
        bio.attributes.fantasyImageBlurred,
        bio.attributes.fantasyImage
    ].forEach(src => {
        const image = new Image();
        image.src = src;
    });

    return <div />;
}
