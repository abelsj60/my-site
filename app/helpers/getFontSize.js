// This algorithm comes courtesy of https://github.com/kennethormandy/react-fittext
// It's cribbed from his source. Kenneth's component didn't like to re-render when 
// pinchZoomed was turned off after an orientation change. This simplified ver.
// has no such problems because it works directly off appState.width.

// Note: The result of the Math.min/.max equation is multiplied by two for 
// unknown reasons other than it's necessary. Kenneth set font-size to a 
// div/parent that read 1/2 of the current equation's result. I took 
// the simple approach and multiplied it by two to produce the 
// expected result (albeit w/different compressor values).

export default function getFontSize(width, compressor) {
  return Math.max(
    Math.min(width / (compressor * 10))
  ) * 2;
}
