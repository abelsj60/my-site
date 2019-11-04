---
type: reverie
headline: Tracking pinch zoom
date: November 3, 2019
slug: Touch events + App state
---

A lot of Stack Overflow posts talk about how to track pinch zoom. 

It isn’t easy. Here’s my solution. I did it with onTouchMove. If onTouchMove receives an event that says two fingers are on screen, the isZooming property on App state becomes true. This tells us something is happening. 

If the page’s X and Y coordinates become >= 0 while isZooming is true, the pinchZoomed property on App state is set to true. It’s set back to false should they become <= 0. This works because it’s hard to pinch zoom without changing the X, Y offsets. It’s equally hard not to blow past them to undo it.

Finally, isZooming becomes false onTouchEnd, if it was true. 

Good as I saw on Stack Overflow.

-j