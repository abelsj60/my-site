---
type: reverie
headline: When styles break
date: April 13, 2019
slug: Styled components are unchangeable 
---

Lost four hours last night.

For some reason, I stopped being able to modify the site's CSS. I was fixing some overflowing header text on my iPhone SE. I practically screamed in public, banged some keys, and felt marginally better. 


Thing was, I was almost done. I was tweaking design and getting production and development 'builds' in order. Basically, this means telling Webpack to generate different types of code based on the build type. Webpack 'bundles' javascript files together so a user's machine can run them.

Anyway, in the middle of all this, my CSS stopped working. Or at least my ability to edit it on the fly did. Chrome just greyed out all the rules. Googling the problem was heartbreaking. Most commentary called it a stylesheet error. There's a workaround, but it's a hack. And, anyway, a portfolio site can't be broken.

So I started futzing about. First I created a bunch of new branches from old code (a branch is a complete set of folders, files, and code that represent my entire project at a given point in time). I hoped to find one where the CSS worked. 

Didn't. 

So then I disabled most of my code and threw a plain box of text on screen. That worked, sorta, so I got suspicous of Styled Components.

Styled Components is an open-source javascript project. It lets me write CSS rules directly inside my javascript, as opposed to putting them in a separate stylesheet. I started the site with one of these stylesheets. I spent half my time maintaining it — debugging it, making stuff work, getting lost inside it at some later date.

I'd like to say I'll never do that again, but I'm sure lots of people still use stylesheets. And suffer. Anyway, I began Googling again for greyed out CSS rules in Chrome when using Styled Components. And I [found my diagnosis](https://stackoverflow.com/questions/51544215/styled-component-styles-are-disabled-in-chrome-devtools).

When in production mode, Styled Components create a type of CSS that can't be edited in Chrome. It can only be edited when in development mode. Remember what I said earlier, I'd been messing around with this very thing the last couple days. So, I changed some code — no joy. 

I changed more code — no joy.

A lot of painful time went by before I had another brainstorm. I'm doing something really smart with my production build. I'm using a "content delivery network" (CDN) to deliver some of the site's dependencies, rather than bundling them all together into a package that I deliver. I'll explain why later (hint: bandwidth usage limits). 

Point is, I told the CDN to deliver a production version of Styled Components. I hard coded it (which devs don't like for a reason). And that's my problem! 

Lessons learned:

1. Managing production and development builds requires thoughtfulness.
2. Clever ideas may not be so clever (remember that scene at the end of "Miracle on 34th Street" when Fred Gailey sees Santa's cane?)
3. Documentation tends to fall down when it comes to the fundamentals — I can't find this issue on the Styled Components site. If it's there, it's hard to find. I think it should be front-and-center in a "Gotchas" section.

Anyway, there's more to say...but I think I've milked this for all it's worth.

-j