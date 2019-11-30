export default function offlineImageToggle(internet, realSrc) {
  return !internet ? realSrc : '';
}
