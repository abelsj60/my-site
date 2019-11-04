---
type: reverie
headline: Magic, artistry, and image fallbacks 2
date: November 4, 2019
slug: Loading home-page illustrations
---

Remember what I said, software is like a magic trick. 

You’ve got to get users to look over here while you’re doing something over there. I’ve already explained how I did that with the story illustrations. Now I’ll talk a little about the home-page illustrations.

The home page loads with two major illustrations in view: the boy foreground and forrest background.

Like all high-quality, full-page illustrations, they can take a little while to load. So I needed to do something to hide that fact. Whatever I did had to look good and hold interest for, say, a minute.

My current solution is to allow the site to load with a white screen. A loading animation sits center stage. As soon as blurred versions of the foreground boy and forrest background load, I fade them into place by transitioning opacity from 0 to 1. When the un-blurred versions load, I transition opacity back to 0, leaving the full versions on screen in all their glory. 

The drama of going from white screen to blurred image (which is fast) should hold user attention. Now that we have blurred images, users should be willing to wait a little to see whatps up. 

Here’s how I did it. 

I added a local property to the Home component’s state named loadLevel. This property holds an array, length four. Each index stands for a different illustration: [blurredBoy, blurredForrest, boy, forrest]. 

Indices start at 0. The first two indices are incremented by one when each blurred image loads. When their sum is 2, I fade them into view. These indices are then incremented to 2 when the fade’s done. 

Meanwhile, indices three and four will increment to 1 as soon as the boy and forrest illustrations are loaded. When all four indices add up to 6, I fade the main illustrations into view.

Bonus points:

I noticed that, after the initial load on mobile browsers, I would see an unpleasant white screen when navigating back to the home page from another section. Why? The images weren’t instantly loaded. 

Desktop and laptop browsers don’t do this. Something weird about mobile browsers again. 

But, as it turns out, the Home component’s onLoad image handlers run every time a user navigates back to the home page. So I created a white sheet that covers the screen when users navigate home on mobile devices (after the initial load). And I transition it off as soon as the sum of the array elements hit the magic number (4). It works well, especially as I didn’t want to repeat the initial loading sequence.

There may be a sleeker, cooler way to distract users while the home-page illustrations load. But I think what I’ve got works nicely, it’s quick and easy to maintain, and it isn’t outright boring or ugly. 

Abracadabra...

-j