export default (() => {
  const context = require.context('./', true, /\.md$/);
  const keys = context.keys();

  return keys.map(key => context(key)).sort((a, b) => {
    return a.attributes.number - b.attributes.number;
  });
})();
