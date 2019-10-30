# jamesabels.net

![cover image](cover-img.png)

## About

This is my personal Web site. 

It includes a few of my software projects, some of my writing, and a whole lot of my spirit. It also includes seven high-quality, full-page illustrations, a children's book for adults, a hidden magic spell, and a personal blog. 

Here's the full story behind it: [The Magic Leap that lead to a creative’s code](www.google.com).

#### Technical details

This site does not use any blog templates, frameworks, or themes.

It was made with ♥️ in N.Y.C. using React, React Router, and Styled Components. 

The code's entry point is [index.js](https://github.com/abelsj60/jamesabels.net/blob/master/app/index.js). Control logic is split between [React components](https://github.com/abelsj60/jamesabels.net/tree/master/app) and traditional [classes](https://github.com/abelsj60/jamesabels.net/tree/master/app/classes), which determine location and handle many user events. Site data is in [/data](https://github.com/abelsj60/jamesabels.net/tree/master/app/data), media assets in [/docs](https://github.com/abelsj60/jamesabels.net/tree/master/docs), and a dev server in [/server](https://github.com/abelsj60/jamesabels.net/tree/master/server).

Here are a few interesting points:

##### a) Data storage

Data files are automatically grouped during build via code in each subdirectory's index.js. Each file mixes Markdown with front matter, which Webpack loads via the [yaml-frontmatter-loader](https://www.npmjs.com/package/yaml-frontmatter-loader). This allows for clean, centrally located data.

##### b) Compression stepping

A preloader for big images can be found in [/helpers](https://github.com/abelsj60/jamesabels.net/blob/master/app/helpers/preloadBigImages.js). 

It uses a custom algorithm to summon full-screen illustrations when the site loads. 

Images < 2880 px in width are compressed at quality level 90, the rest at 50. Nevertheless, the more highly compressed images are of roughly the same clarity as their less compressed siblings and file sizes increase at a roughly constant rate across the group. Thus, the algorithm skips from 1360 px to >= 2880 px in width when selecting full-screen images. 

The transparent home-page image considers additional factors.

##### c) Home-page hearbeat

The name and bio on the home page pulse on the site's initial load. 

While a nice, dramatic effect once, this animation grows tiresome over multiple loads. 

As a result, the animation only runs on initial load or if the user hasn't visited for more than two weeks. This is achieved by storing a time stamp in the user's browser, i.e., in localStorage for the site's domain. The starting point as to how is [here](https://github.com/abelsj60/jamesabels.net/blob/master/app/App.jsx#L242).

##### d) App state v. Component state

This site was built around the idea of 'theatrical Web design.'

This means that major creative elements rely on timed animation sequences to add drama to their entry, exit, and use. 

As a result, the [App component state](https://github.com/abelsj60/jamesabels.net/blob/master/app/App.jsx#L295) is larger than it might otherwise be so functionally unrelated sibling Components can track and participate in the animation sequence. A move to Redux or React Hooks might tighten this code.


---

Contact: hello@jamesabels.net ∙ © 2019, James Abels LLC. All rights reserved.