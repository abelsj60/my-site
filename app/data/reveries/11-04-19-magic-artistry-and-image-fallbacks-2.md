---
type: reverie
headline: Magic, artistry, and image fallbacks 2
date: November 4, 2019
slug: Loading home-page illustrations
---

The home page has a magical portal on it. 

The top-level image is of me, a fairy, and a lot of computer monitors. They're transparent, showing the world I'm creating beneath them. This world can be swapped with another by tapping a sequence of five active Charms in a row. This "spell" is simple, but neat (says me...).

Here's how I distract users while the images load. It's a doozy.

I start out with a white screen. A loading animation sits at center. As soon as the blurred versions of the foreground boy and forrest background load, the forrest fallback image fades into view. When the un-blurred versions load (beneath it), the fallback fades out of view, leaving the full versions on screen in all thier glory. 

Here’s how it works. 

I added a property to the Home component’s "this" value named loadLevel. It holds an array, length seven. Each index stands for a different illustration: 

    [fallback, blurredBoy, blurredForrest, blurredNyc, boy, forrest, nyc]. 

Indices start at 0. [They're incremented](https://github.com/abelsj60/jamesabels.net/blob/54f0b67ad19c3c36da105a58775b79cab209e41e/app/home/Home.jsx#L163) as they load, and in some cases, when thier opacity finishes transitioning (via onTransitionEnd). 

I added the array to "this", not state, because I didn't want to change the on-screen state of the app every time an individual image loads or transitions. I've found that running setState during CSS transitions can be problematic. Sometimes it breaks things (event in React 16+ w/Fibre), so I wanted to minimize this.

Now here's the magic. 

Each time an element of the array changes, I run an [updateLoadLevel](https://github.com/abelsj60/jamesabels.net/blob/54f0b67ad19c3c36da105a58775b79cab209e41e/app/home/Home.jsx#L281) function. It sums different sets of values within the array to decide where we are in the loading process. As certain milestones are hit, the loadLevel on state is incremented from 0 to 1 to 2 to 3 (on initial load). The changes to loadLevel are managed on state because they trigger on-screen changes in the app.

Bonus points: I use the browser's online/offline events to check for a network connection. The value's stored on App state. If 'offline' is false, I show the Fallback, no matter the load level.

Abracadabra...

-j