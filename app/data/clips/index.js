export default (() => {
  const context = require.context('./', true, /\.md$/);
  const keys = context.keys();

  return keys.map(key => context(key)).sort((a, b) => {
    if (b.attributes.position > a.attributes.position) {
      return 1;
    }

    if (b.attributes.position < a.attributes.position) {
      return -1;
    }

    return 0;
  });
})();
