# jamesabels.net

![cover image](https://repository-images.githubusercontent.com/130377112/87b38b00-16af-11ea-8b61-b01c307d0254)

## About

This is my personal Web site. 

It includes a few of my software projects, some of my writing, and a whole lot of my spirit. It also includes seven high-quality, full-page illustrations, a children's book for adults, a hidden magic spell, and a personal blog. 

## Technical details

This site does not use any blog templates, frameworks, or themes.

It was made with ♥️ in N.Y.C. using React, React Router, and Styled Components. 

The entry point is [index.js](https://github.com/abelsj60/jamesabels.net/blob/master/app/index.js). Control logic is split between [React components](https://github.com/abelsj60/jamesabels.net/tree/master/app) and traditional [classes](https://github.com/abelsj60/jamesabels.net/tree/master/app/classes), which determine location and handle many user events. Site data is in [/data](https://github.com/abelsj60/jamesabels.net/tree/master/app/data), media assets in [/docs](https://github.com/abelsj60/jamesabels.net/tree/master/docs), and a dev server in [/server](https://github.com/abelsj60/jamesabels.net/tree/master/server).

Here are a few more interesting points:

##### ∙ App state v. Component state

This site was built around the idea of "theatrical Web design."

Timed animation sequences tell a story about the entry, exit, and use of major creative elements.  

This caused the [component state in App.jsx](https://github.com/abelsj60/jamesabels.net/blob/c53a0c70ec6a084ec9727f4df0301fa825c8e28e/app/App.jsx#L286) to be larger than expected, as functionally unrelated children (i.e., siblings) have to track animation sequences in order to join them. A move to React Hooks or Redux might condense this code.

##### ∙ Compression stepping

A preloader for big images can be found in [/helpers](https://github.com/abelsj60/jamesabels.net/blob/master/app/helpers/preloadBigImages.js). 

It uses a custom algorithm to summon full-screen illustrations when the site loads. 

Images < 2880px in width are compressed at quality level 90, the rest at 50. The more highly compressed images are of roughly the same clarity as their less compressed siblings and file sizes increase at a roughly constant rate across the group. As a result, the algorithm skips from 1366px to >= 2880px in width when selecting full-screen images. 

The transparent home-page image considers additional factors.

##### ∙ Data storage

Data is stored in files that mix Markdown with [front matter](https://jekyllrb.com/docs/front-matter/). Each sub-directory's index.js automatically groups these files into an array during the build process. Webpack [converts the front matter](https://www.npmjs.com/package/yaml-frontmatter-loader) to JSON and React handles the Markdown.

##### ∙ Home-page heartbeat

The name and bio on the home page pulse on the site's initial load. 

While a nice, dramatic effect once, this animation grows tiresome over multiple loads. 

As a result, the animation only runs on initial load or if the user hasn't visited for more than two weeks. This is achieved by storing a time stamp in the user's browser, i.e., in localStorage for the site's domain. The starting point as to how is [here](https://github.com/abelsj60/jamesabels.net/blob/c53a0c70ec6a084ec9727f4df0301fa825c8e28e/app/App.jsx#L261).

---

© 2019, James Abels LLC. All rights reserved. ∙ hello@jamesabels.net