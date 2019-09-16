export default function testImage(src) {
  const image = new Image();
  image.src = src;
  
  return image.complete;
};
