// export default const startup = // Single Page Apps for GitHub Pages
// https://github.com/rafrex/spa-github-pages
// Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
// ----------------------------------------------------------------------
// This script checks to see if a redirect is present in the query string
// and converts it back into the correct url and adds it to the
// browser's history using window.history.replaceState(...),
// which won't cause the browser to attempt to load the new url.
// When the single page app is loaded further down in this file,
// the correct url will be waiting in the browser's history for
// the single page app to route accordingly.

module.exports = (function(l) {
  console.log('window.location.href:', window.location.href);
  console.log('window.location.pathname:', window.location.pathname);
  if (l.search) {
    console.log('enter');
    const q = {};
    l.search.slice(1).split('&').forEach((v) => {
      const a = v.split('=');
      q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
    });
    if (q.p !== undefined) {
      const newUrl = l.pathname.slice(0, -1) + (q.p || '') +
        (q.q ? ('?' + q.q) : '') +
        l.hash;
      console.log('oldUrl:', l.pathname);
      console.log('newUrl:', newUrl);
      window.history.replaceState(null, null,
        newUrl
      );
    }
  }
  console.log('exit');
}(window.location));
