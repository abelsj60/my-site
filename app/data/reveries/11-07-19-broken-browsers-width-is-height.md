---
type: reverie
headline: 'Broken browsers: width is height'
date: November 7, 2019
slug: Breaking pixel ratios in mobile
---

Like I said, browsers break a lot.

Here's an example from last night. I was jiggering the [algorithm](https://github.com/abelsj60/jamesabels.net/blob/master/app/helpers/preloadBigImages.js#L13) that preloads images. It wasn't working. 

For instance, it selected an image with width 2880px on a 5k monitor. It should have selected the image with width of 5120px. 

Problem was, I'd stopped factoring window.devicePixelRatio into the algorithm. This number tells you how many pixels are packed into every inch of the screen. Standard screens are one, retina screens are 2+, and some screens report back decimals, which is hard to understand.

The theory here is that you'll get the proper resolution from: 

- width * devicePixelRatio
- height * devicePixelRatio 

Unfortunately, this doesn't totally work in practice.

On iOS, the width is the height and the height is the width. Not so on Android.

Come again? Hold onto your hats, kids. 

If you hold an iPhone upright ("portrait" mode), window.screen.width refers to the longest edge, which is currently the device's height. Now, hold an Android phone upright, and window.screen.width will refer to its actual width. OK, rotate them. On iOS, width is still the longest edge, but Android swaps the values.

Great— ready for the "new hotness"? iPadOS. That's the OS  Apple just split off from iOS. Guess what, it's different. iPadOS acts like Android. It reports the device's actual width, and it swaps the values when you switch orientation. 

Neat, huh? Yeah, I didn't really think so either.

-j