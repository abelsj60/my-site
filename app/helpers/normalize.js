export default function normalize(text) {
  return text
    .replace(/\s+/g, '-')
    .replace(/\./g, '')
    .replace(/'+/g, '')
    .replace(/,+/g, '')
    .replace(/:/g, '')
    .replace(/\//g, '-')
    .replace(/\?/g, '')
    .toLowerCase();
}
