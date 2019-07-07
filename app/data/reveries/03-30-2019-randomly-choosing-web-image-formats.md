---
3ype: reverie
headline: A groan about Web image formats
date: March 30, 2019
slug: Randomly choosing Web images
---

File Web images under life's great mysteries.

I wanted my icon files — which I use for chapter and menu buttons — to be as small as possible. According to Google's guide to Web images, the best format for them is JPG. See the picture under ["Selecting the right image format"](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization).

Google says that among rasters (files that encode color values for every pixel), JPG is great for images with few details and small color palettes.

Now, let's look at practical reality. 

The chapter icon (a filled-in circle image) is eight pixels by eight pixels and uses one color. This results in the following file sizes:

* SVG (Inkscape): 2 kilobytes
* SVG (Optimized): 722 bytes (Inkscape-specific data is stripped out)
* JPG: 966 bytes (Exported from a PNG using the worst quality setting in a Mac's "Preview" app)
* PNG: 674 bytes

I went with PNG, obviously. 

So, firstly, knowing what's best upfront may be clearer with more knowledge and experience. 

Secondly, look at the SVG. It uses plain English to describe how images should look (like HTML does for Web pages). Its two kilobytes no matter the image's size. If it got bigger, this format would be great becuse the file would still be two kilobytes. In this case, the image is fixed at eight pixels, so I don't think it matters. 

Anyway, point is that it all basically came down to guessing. Who needs the article?

-j
