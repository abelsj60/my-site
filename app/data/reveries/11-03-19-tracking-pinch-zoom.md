---
type: reverie
headline: Tracking pinch zoom
date: November 3, 2019
slug: Touch events + App state
---

Stack Overflow tells me that pinch zoom is well-nigh impossible to track. 

I needed to do it so the site's height wouldn't change while zoomed. I developed my own solution to do it. It worked until it didn't. I'll tell you why. It's a sad tale.

# The theory 

We can use touch events to identify pinchZooming. 

Zoom on

- If a touch is sensed (via onTouchStart), we'll begin looking for a zoom session (via onTouchMove).
- If touch is moving, we can draw some conclusions about whether we're in the midst of a zoom session.
- If touch completely stops during a zoom session (via onTouchEnd), we can conclude that we're in a pinchZoomed state.

Zoom off

- Same as above, except the moving part. 
- If touch is moving (via onTouchMove) and pinchZoomed is true, we can draw some conclusions about our zoom session. 
- When this touch session stops (via onTouchEnd), we can reset the zoom state by setting pinchZoomed to false.

# The code

[The code](https://gist.github.com/abelsj60/d3b5fac857c3378a7f93f4614302572d). It worked in my testing. 

# The rant 

iOS and Android do things differently, which causes trouble. 

In this case, iOS updates window.pageXOffset and window.pageYOffset (conventionally known as the top left corner of the screen) as users zoom (). But Android doesn't, (or at least, this is what I found while using BrowserStack for testing). If you glance at the code, you'll see I need them to decide about zoom. 

The best I can say is that Apple and Google are big companies with really smart people, which means it's impossible to say either approach is right or wrong. 

It really just comes down to a roll of the dice.

-j