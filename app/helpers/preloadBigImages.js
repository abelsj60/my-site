import home from '../data/home/home.md';
import stories from '../data/the-story/index.js';
import urlPrefix from './urlPrefix';

import fallbackBlurOne from '../../docs/assets/images/convert-to-data-uri/chapter-1-ink-50x50-53.png';
import fallbackBlurTwo from '../../docs/assets/images/convert-to-data-uri/chapter-2-ink-50x50-53.png';
import fallbackBlurThree from '../../docs/assets/images/convert-to-data-uri/chapter-3-ink-50x50-53.png';
import fallbackBlurFour from '../../docs/assets/images/convert-to-data-uri/chapter-4-ink-50x50-53.png';

/* Notes on image use: 

  A guide: https://images.guide
  WebP support: https://stackoverflow.com/a/54631141
  Google's detection method: https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp

  Also: 
    Megapixel limits may exist in iOS. They did in the past, but current status is currently unknown. Megapixel 
    is (the decoded size of the image, not its file size). This doesn't seem to be a direct problem as to displaying 
    images, but it may be a hindrance in terms of image use and animations on lower-end devices... 

  See:
    https://stackoverflow.com/questions/22039534/ios-browser-crashes-due-to-low-memory?rq=1
    https://sealedabstract.com/rants/why-mobile-web-apps-are-slow/

  Usage:
    This preloader sets image elements to an object and put it on appState. This allows us to use .complete later
    w/o problem. I've tried just adding the .src to an array, however, have found that I do not get an accurate
    response when appending it to a new Image and checking its .complete property. There's probably an async
    issue. However, I don't think this significant for my purposes b/c these images have been called.

    Therefore, if I test the original image, I should get a true response as to availability by reference 
    regardless of whether or not the downstream Image element is the same as this one (I don't think it 
    is), particulalry as the .complete tests are only run on desktop browsers, which seem more robust.
*/

export default function preloadBigImages() {
  const images = {};
  const timesPixelRatio = dimension => Math.floor(window.devicePixelRatio * dimension);
  // Desktops get it right, mobile may not — check if height is bigger than width
  // Note, 11/9/19: We need the customMobileTest to catch the new iPadOS. Remember, we need
  // to know the widest possible width in order to select an image that always looks great.
  const widthType = window.screen.height > window.screen.width ? 'widthIsHeight' : 'widthIsWidth';
  const screenWidth = widthType === 'widthIsHeight' ? window.screen.height : window.screen.width;
  const screenHeight = widthType === 'widthIsHeight' ? window.screen.width : window.screen.height;
  const resWidth = timesPixelRatio(screenWidth);
  const resHeight = timesPixelRatio(screenHeight);
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
      // Equation: (originalHeight / originalWidth) * imgWidth = imgHeight
      const imgHeight = Math.ceil((2985 / 5116) * imgWidth);
      return imgWidth >= resWidth && imgHeight >= resHeight;
    }

    return true; // default size when there's nothing smaller (5120)
  });

  home.attributes.preloadUrls.forEach((imagePath, idx) => {
    const image = new Image();
    const isBoy = imagePath.includes('boy');
    const isBlur = imagePath.includes('blur');
    const filePrefix = isBoy
      ? 'boy'
      : imagePath.includes('forrest')
        ? 'forrest'
        : 'nyc';
    let source;

    if (isBlur) {
      source = `${urlPrefix}/${imagePath}/${filePrefix}-ink-blur-0x15-160.${isBoy ? 'png' : 'jpg'}`;
    } else {
      // Manually skip boy-...-2880.png b/c the next level seems to look a lot nicer on screen
      // File size is roughly comparable, so only wasting compute cycles. I'm OK with that.

      source = `${urlPrefix}/${imagePath}/${filePrefix}-imc-main-101419-${
          !isBoy ? imageWidth < 2880 ? 'q90-' : 'q50-' : ''
        }${
          isBoy && imageWidth >= 2880 && imageWidth <= 3000 ? '3000' : imageWidth
        }.${
          isBoy ? 'png' : 'jpg'
      }`;
    }

    image.src = source;
    images[home.attributes.imageNames[idx]] = image;
  });

  stories.forEach(chapter => {
    const { number } = chapter.attributes;
    const imageA = new Image();
    const imageB = new Image();
    const illSource = `${urlPrefix}/chapter-${number}/chapter-${number}-imc-main-101419-q${
      imageWidth < 2880 ? '90' : '50'
    }-${imageWidth}.jpg`;
    const blurredSource = `${urlPrefix}/chapter-${number}/blurred/chapter-${number}-ink-blur-0x15-160.jpg`;
    imageA.src = illSource;
    imageB.src = blurredSource;
    images[`chapter-${number}-main`] = imageA;
    images[`chapter-${number}-blurred`] = imageB;
  });

  [
    fallbackBlurOne,
    fallbackBlurTwo,
    fallbackBlurThree,
    fallbackBlurFour
  ].forEach((img, idx) => {
    const image = new Image();
    image.src = img;
    images[`chFallbackImg-${idx + 1}`] = image;
  });

  images.width = imageWidth;
  images.height = Math.ceil((2985 / 5116) * imageWidth);

  return images;
}
