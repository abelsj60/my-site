/* NOTES

  1. Use setState() instead of links in most nav locations?
    https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router
    https://tylermcginnis.com/react-router-programmatically-navigate/
  2. Style
  3. Browser testing, polyfills, etc
  4. When navigating away from home, reset scrollTop to 0 ?
  5. Image storage / bundling?
  x 6. When using menu to navigate away from Menu, shut off menu
  7. Remove useless last-child spaces
  8. Refactor StateManagement (tighten?)
  x 9. Identify active project and thumbnail?
  10. Header timeout is broken
  11. Map out home page illustration
  12. Further styling of text and fonts?
  x 13. Implement markdown and frontmatter for content
  14. Timetravel feature for Reverie blog
  15. Editing and pictures...

  -Animate:
    https://swizec.com/blog/declarative-d3-transitions-react/swizec/8323
    https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0
    https://github.com/FormidableLabs/react-animations
    https://medium.com/gronda/the-illusion-of-speed-loading-states-with-react-1c676ccce484

  -Markdown:
  https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component
  AND https://www.npmjs.com/package/react-markdown

  -Debouncing: https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js

  -Rendering:
  https://robots.thoughtbot.com/react-rendering-misconception

  -Scrolling:
  https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

  -ScrollToTop?:
  https://github.com/Jinksi/netlify-cms-react-starter/blob/master/src/components/ScrollToTop.js

  -CMS
    CMS must get ahold of files to use them.
    For example, if on local file system, you might 'walk' the right director, build an array of files, parse them for formatting, add them to a data structure, then display them.

    The boys and girls of nozzle put together a good exmaple for react-static here:

    https://github.com/nozzle/react-static/blob/master/examples/netlifycms/static.config.js
    https://github.com/nozzle/react-static/blob/master/examples/netlifycms/static.config.js

    Note: This isn't instantly transferable b/c react static is a static site generator, which builds a live picture of pages and then serves them with all resources attached. With a live site, you need to use an api to "grab" files if they aren't bundled with the site directly.

    https://www.npmjs.com/package/klaw
    https://www.npmjs.com/package/gray-matter
    https://www.npmjs.com/package/react-markdown

    -LifeCycle
    http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    -Links
      https://stackoverflow.com/a/43986829/9215718

    -Test params/routes
      https://pshrmn.github.io/route-tester/#/
      ANSWER: https://stackoverflow.com/a/35604855/9215718

    -Wes bos transcripts:
      https://github.com/wesbos/React-For-Beginners-Transcriptions
*/
