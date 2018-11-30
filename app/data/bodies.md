---
sections: [
  home,
  storyLoader,
  projects,
  journalism,
  reverie,
  about
]

routes:
  -
    name: Home
    component: Home
    route: /
    exact: true
    link: /
    display: false
  -
    name: StoryLoader
    component: StoryLoader
    route: /chapter/:title?
    exact: false
    childRoute: [/title1, /title2, /title3, /title4]
    link: /chapter/
    display: true
  -
    name: Projects
    component: Projects
    route: /projects/:projectName?/:projectThumbnail?
    exact: false
    childRoute: [/arrow, /slingshot, /tmmnews]
    grandChildRoute: [/1, /2, /3]
    link: /projects/
    display: true
  -
    name: Journalism
    component: Journalism
    route: /journalism/:publication?/:headline?
    exact: false
    childRoute: [/forbes, /shumagazine, /slate]
    grandChildRoute: [/hedOne, /hedTwo, /hedThree]
    link: /journalism/
    display: true
  -
    name: Reverie
    component: Reverie
    route: /reverie
    exact: false
    link: /reverie/
    display: false
  -
    name: About
    component: About
    route: /about
    exact: false
    link: /about/
    display: true
---
