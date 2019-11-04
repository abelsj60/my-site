---
type: reverie
headline: Magic, artistry, and image fallbacks 1
date: November 3, 2019
slug: Loading story text and illustrations
---

I’ve been told software is like a magic trick. 

“My job is to get you to look over here while I’m doing something over there,” Daniel, my co-founder on TMM, would say. I kept hearing him as I built this site, particularly when I dealt with illustrations. 

There are at least two issues with large, high-quality illustrations. 

First, you may not want to show them at all times.
Second, they may take some time to load.

How do you handle these situations? With care. You’ve got to distract users by hiding the image. And the distraction’s got to be interesting — like magic. There’s no right way to do this, although, I’m sure there are wrong ways. This’ll be obvious from the get go.

Let’s talk specifics.

*Story illustrations when the text is on.*

Each chapter contains three separate images (bottom to top): 

1. The main illustration
2. A blurred version of it 
3. A more highly blurred fallback 

The main illustration is seen when users turn the text off. The blurred image is shown beneath the text when chapter pages load. The fallback is shown when the blurred version hasn’t loaded yet. 

This is how it works — pages that require a lot of data, such as Story, are loaded by the ContentLoader. It can track the state of an image via a local state property named imageLoaded. I use this property to keep watch over the state of the blurredImage. If it isn’t loaded, the fallback image — which lives inside the site as a Data URI — is shown. If it is loaded, the fallback image won’t be shown. 

Fun fact: The fallback is almost always shown when switching site sections on mobile devices, but is almost never shown when switching between them on desktops and laptops. Because mobile’s weird.

*Story illustrations when the main illustration hasn’t loaded yet.*

I use a property on App state to track the state of the main chapter illustrations.

This property, illustrationState, has one of three values:

1. Loaded: > 0 
2. Not loaded: < 0 
3. Not applicable: 0 

For instance, -2 means illustration 2 isn't loaded and 2 means it is. The value is determined by checking the image element’s .complete property. 

If the illustrationState is negative when “Text off” is activated, then illustrationDelay, another property on App state, becomes true. This causes a small loading animation to appear beside the “Text off” button, which is temporarily renamed “Cancel.”

When the main illustration loads, the image element’s onLoad handler will update illustrationState to be a positive number. If illustrationDelay is true when onLoad fires, illustrationDelay will become false, the loader will be removed, the button renamed “Text on,” and the main image will be revealed.

Magic. 

-j