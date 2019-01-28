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

    -Interfaces:
      https://stackoverflow.com/a/1022060

    Old Scale:
      const scrollSpot = this.scrollTop / 3900;
    const imageScale = 6 - scrollSpot * 6;


     * Old: 0 - 4000
     * New: 6 - 1
     *
     * Number:


    console.log('iS:', scrollSpot * 6);

    Note: Passing as string reduces jank, using
    * numbers (via parseInt()) is a disaster


    const failSafe = Math.max(1, imageScale);
    const scaleAsString = failSafe.toString();
    const magicScale = scaleAsString.slice(0, 6);

    this.setState({
      magicScale
    });

/**
 * At 2200, it's 0
 * At 3223, it's 1
 *
 * At 2200, it's 0
 * At 3223, it's 1
 */

/** Temp notes
 *  At 0, it's 6
 *  At 3223, it's 1
 */

// <section style={believeStyle}>
// <h2>Still believe in magic?</h2>
// </section>

// const believeStyle = {
//   zIndex: '1',
//   fontSize: '5rem',
//   transform: `scale(${this.state.scale})`,
//   opacity: this.state.opacity
// };

// https://stackoverflow.com/questions/19057731/scrolltop-on-page-reload-doesnt-work-possible-script-conflict

// https://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
// https://github.com/philipwalton/flexbugs#flexbug-1
// https://github.com/jonathantneal/fitie
// https://stackoverflow.com/questions/18778020/cant-get-scrolltop-to-work-in-both-chrome-firefox

// https://stackoverflow.com/questions/36143767/react-js-communicating-between-sibling-components
// https://stackoverflow.com/questions/5371139/window-scrolltop-vs-document-scrolltop
// https://stackoverflow.com/questions/38387609/why-cant-i-get-the-domnodes-style-scrollheight-in-the-react-componentdidmoun
// https://css-tricks.com/working-with-refs-in-react/
// https://stackoverflow.com/questions/33748967/change-scrolltop-in-reactjs
// https://stackoverflow.com/questions/38638303/react-set-scroll-position-before-component-mount
