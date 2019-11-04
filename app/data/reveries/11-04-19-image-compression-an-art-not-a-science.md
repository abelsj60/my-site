---
type: reverie
headline: Image compression, an art, not a science
date: November 4, 2019
slug: Recompressing a compressed image
---

Image compression is maddening. 

The problem is this — the only way to really understand compression is to sit around staring at the renditions that your settings produce. Every variation, or rendition, has to be compared to every other variation in the set, as well as the original. And, as it turns out, there’s really no single answer. Your settings may be stellar for image A, but less than stellar for image B.

I’m not surprised. I remember that the quality of video compression varied by the type of video. At the same settings, a tranquil field could compress differently than a fast-paced football play.

Few image compression discussions talk about subjective quality these days. They instead seem to focus on how to run the compression process. It all sounds very scientific. The underlying algorithms may be, their use is not.

If you're using them right — with care — you'lll always have to use your eyes to get a good result.

I’ll give you an example. 

Many people tell you not to compress a compressed image, particularly a .jpg. The .jpg format is “lossy” meaning it deletes details like mad, so a recompression can be really really ugly.

My site’s chapter illustrations need to be at least as wide as each user’s device. At the narrowest widths, 640 px to, say, 1366 px, a quality level of >= 90 was needed for good quality renditions at a reasonable file size when going from a lossless .tiff to a .jpg. At wider widths, though, say 2880 px, the same quality level, 90, resulted in unreasonably large file sizes. 

So I decreased the quality level by ten again and again: 80, 70, 60, 50. All the results were poor in terms of quality when making the wide-sized files. How so? Well, for example, the veins in the fairy’s lower wings in the chapter one illustration were always obliterated. No good.

The .png format, a generally lossless format, didn’t work either. Too big!

My next move was a Hail Mary. I compressed the original .tiff to a .jpg at full size and a quality level of 100. Then I resized the big .jpg and compressed it at a quality level of 50. 

The result was inexplicable. 

At larger widths, the recompressed and resized .jpg was of much higher quality and similar file size as the rendition produced by the same settings on the original .tiff. I know what you’re thinking. I tried it with a .png, too, but .jpg re-compression seemed better.

Someone smarter than me can sort out why, if indeed there’s even a reason mere humans can understand. My best guess is that compression is just a step in the “artistic process,” and the tools of an artist — in this case compression algorithms — simply do not produce objective results. And why should they? Every image is different.

To me, compression is analogous to Rembrandt mixing paint. 

Don’t let anyone tell you it’s science — including the people who write the algorithms. A lot of people design cars, but they don’t race them. If you care about your images, you’ll have to use your peepers and stare at a lot of renditions to get a sense of what works and what doesn’t. 

-j