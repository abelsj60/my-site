---
type: reverie
headline: 'Broken browsers: width is height'
date: November 7, 2019
slug: Breaking pixel ratios in mobile
---

Browsers [break a lot](https://www.jamesabels.net/reverie/adventures-in-the-resize-event).

Here's an example from last night. I was rejiggering the [algorithm](https://github.com/abelsj60/jamesabels.net/blob/54f0b67ad19c3c36da105a58775b79cab209e41e/app/helpers/preloadBigImages.js#L12) that preloads images. It wasn't working. 

For instance, it selected an image with a width of 2880px on a 5k monitor. It should have selected the image with a width of 5120px. 

Problem was, I'd stopped factoring window.devicePixelRatio into the algorithm. This number tells you how many pixels are packed into every inch of the screen. Standard screens are one, retina screens are 2+, and some screens report back decimals, which is hard to understand.

The theory here is that you'll get the proper resolution from: 

- width * devicePixelRatio
- height * devicePixelRatio 

Unfortunately, it isn't that simple. On iOS, the width is the height and the height is the width. Not so on Android.

Come again? [Hold onto your hats](https://github.com/abelsj60/jamesabels.net/blob/54f0b67ad19c3c36da105a58775b79cab209e41e/app/helpers/preloadBigImages.js#L17), kids. 

If you hold an iPhone upright ("portrait" mode), window.screen.width refers to the longest edge, which is currently the device's height. Now, hold an Android phone upright, and window.screen.width will refer to its actual current width. 

OK, rotate them. On iOS, width is still the longest edge, but Android swaps values.

Now, ready for the "new hotness"? 

iPadOS. That's the OS Apple just split off from iOS. It works differently. iPadOS acts like Android. It reports the device's actual width, and it swaps the values when you switch orientation. (Technically, it's working like OS X, Apple's desktop OS.)

Neat, huh? Yeah, I didn't really think so either.

-j