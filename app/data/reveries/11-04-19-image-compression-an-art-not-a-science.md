---
type: reverie
headline: Image compression, an art, not a science
date: November 4, 2019
slug: Recompressing a compressed image
---

[Image compression](https://github.com/abelsj60/jamesabels.net/blob/master/image-scripts.txt) is maddening. 

The problem is this — the only way to really understand compression is to sit around staring at the renditions your settings produce. Every variation, or rendition, has to be compared to every other variation in the set, as well as the original. And, turns out, there’s no one set of settings that work best. 

Settings may be stellar for image A, but not for image B.

I’m not surprised. I remember that the quality of video compression varied by the type of video. At the same settings, a tranquil field could compress differently than a fast-paced football game.

Few image compression discussions talk about subjective quality these days. They seem to focus on how to run the compression process. It's all made to sound very scientific. The underlying algorithms may be, their use is most certainly not.

I’ll give you an example. 

Many people tell you not to compress a compressed image, particularly a .jpg. The .jpg format is “lossy” meaning it deletes details like mad, so a recompression can be very ugly.

My site’s story illustrations need to be at least as wide as each user’s device. At narrow widths, 640px to, say, 1366px, I needed a quality level of >= 90 to transform a .tiff (a huge, lossless file) into a good quality .jpg. At wider widths, though, say 2880px, the same quality level, 90, resulted in unreasonably large file sizes. 

So I kept decreasing the quality level by ten: 80, 70, 60, 50. All the results were poor in terms of quality when making the wide-sized files. For example, the veins in the fairy’s lower wings in the first chapter's illustration were obliterated. No good.

The .png format, a generally lossless format, didn’t work either — too big!

My next move was a Hail Mary. 

I compressed the original .tiff to a .jpg at full size and a quality level of 100. Then I resized the big .jpg and compressed it to, say 2880px, at a quality level of 50. 

The result was absolutely inexplicable. 

At larger widths, the recompressed and resized .jpg was of much higher quality and a similar file size as the rendition produced by the same settings on the original .tiff. I tried it with a .png, too. .jpg re-compression still won.

Someone smarter than me can sort out why, if there’s even a reason. 

My conclusion is that compression is analogous to Rembrandt mixing paint. It's a just another step in the “artistic process,” and the tools of an artist — in this case compression algorithms — simply do not produce objective results. And, really, why should they? Every image is different.

Bottom line, don't let anyone tell you compression is a science, not even the people who write the algorithms. A lot of people design cars, but they don’t race them. If you care about your images, you’ll just have to use your peepers and stare at renditions to figure out what works best. 

-j