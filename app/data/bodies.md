---
sections: [
  home,
  theStory,
  projects,
  journalism,
  reverie,
  about
]

routes:
  -
    name: Home
    componentName: Home
    route: /
    link: /
    display: false
  -
    name: TheStory
    componentName: TheStory
    route: /chapter
    childRoute: [/title1, /title2, /title3, /title4]
    link: /chapter/
    display: true
  -
    name: Projects
    componentName: Projects
    route: /projects
    childRoute: [/arrow, /slingshot, /tmmnews]
    grandChildRoute: [/1, /2, /3]
    link: /projects/
    display: true
  -
    name: Journalism
    componentName: Journalism
    route: /journalism
    childRoute: [/forbes, /shumagazine, /slate]
    grandChildRoute: [/hedOne, /hedTwo, /hedThree]
    link: /journalism/
    display: true
  -
    name: Reverie
    componentName: Reverie
    route: /reverie
    link: /reverie/
    display: false
  -
    name: About
    componentName: About
    route: /about
    link: /about/
    display: true
---
