// import { isIOS } from 'react-device-detect';

// On images: https://images.guide
// WebP support: https://stackoverflow.com/a/54631141
// Google's detection method: https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp

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

    return true; // default size when nothing fits (5120)
  });

  images.width = imageWidth;
  images.height = Math.ceil((2985 / 5116) * imageWidth);

  return images;
}
