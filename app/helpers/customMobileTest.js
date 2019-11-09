// https://stackoverflow.com/a/58064481

export default (
  /iPad|iPhone|iPod/.test(navigator.platform) 
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  ) && !window.MSStream;
