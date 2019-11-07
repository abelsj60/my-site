---
type: reverie
headline: 'Broken browsers: width is height'
date: November 7, 2019
slug: Breaking pixel ratios in mobile
---

Like I said, browsers break a lot.

Here's an example from last night. I was jiggering the algorithm that preloads images. It wasn't working. 

For instance, it selected an image with width 2880px on a 5k monitor. It should have selected the image with width of 5120px. 

Problem was, I'd stopped factoring window.devicePixelRatio into the algorithm. This number tells you how many pixels are packed into every inch of the screen. Standard screens are one, retina screens are 2+, and many screens report back decimals. That's hard to understand.

The theory is width * devicePixelRatio and height * devicePixelRatio will give you the resolution. 

Unfortunately, that doesn't really work in practice. 

You've got a problem when iOS reports a devicePixelRatio in decimals. If you use it, you won't get the right results, according to Apple's tech specs. If, however, you round devicePixelRatio down to the nearest whole number when on iOS, using Math.floor(), you will get the correct screen resolution.

If only it were so easy. 

On Android, the decimals count. Use Math.floor() here, and you'll get the wrong numbers again.

One more thing. 

On iOS, the width is the height and the height is the width. It's the opposite on Android. 

Come again? Hold onto your hats, kids. 

If you hold an iPhone upright ("portrait" mode), window.screen.width refers to the longest edge, which is currently the device's height. Now, hold an Android phone upright, and window.screen.width will refer to its actual width. OK, rotate them. On iOS, width is still the longest edge, but Android swaps the values.

Neat, huh? Yeah, I didn't really think so either.

-j