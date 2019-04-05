export default (() => {
  const context = require.context('./', true, /\.md$/);
  return context.keys().map(key => context(key)).sort((a, b) =>{
    const dateA = new Date(a.attributes.date);
    const dateB = new Date(b.attributes.date);

    return dateB - dateA;
  });
})();
