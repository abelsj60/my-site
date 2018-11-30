module.exports = (() => {
  const context = require.context('./', true, /\.md$/);
  const keys = context.keys();
  return keys.map(key => context(key));
})();
