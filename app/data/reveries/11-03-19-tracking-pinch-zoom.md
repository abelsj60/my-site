---
type: reverie
headline: Tracking pinch zoom
date: November 3, 2019
slug: Touch events + App state
---

A lot of Stack Overflow posts talk about how to track pinch zoom. 

It isn’t easy. 

Here’s my solution. I did it with onTouchMove. 

If [onTouchMove](https://github.com/abelsj60/jamesabels.net/blob/master/app/App.jsx#L456) receives an event that says two fingers are on screen, a property on App state named isZooming is set to true. This lets me reject resize events in the time it takes to identify zooming and log the pinch zoomed state, which I'll now explain.  

If the page’s X and Y coordinates become >= 0, the pinchZoomed property on App state is set to true. It will be set back to false should they become <= 0. This works because it’s hard to pinch zoom without changing the X, Y offsets. It’s equally hard not to blow past them when undoing pinch zoom. 

Now, if isZooming was true when pinchZoom becomes false, isZooming is [reset to false](https://github.com/abelsj60/jamesabels.net/blob/master/app/App.jsx#L497), too. 

This seems as good as I saw on Stack Overflow.

-j