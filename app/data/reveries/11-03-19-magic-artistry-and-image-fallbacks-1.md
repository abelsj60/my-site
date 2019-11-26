---
type: reverie
headline: Magic, artistry, and image fallbacks 1
date: November 3, 2019
slug: Loading story text and illustrations
---

I’m told software's like a magic trick. 

“I've got to get you to look over here while I’m doing something over there,” Daniel would say while building Arrow for TMM. I heard him a lot as I built this site, particularly when dealing with illustrations. 

There are at least two issues with large, high-quality illustrations. 

- You may not want to show them at all times.
- They can take some time to load.

Both require distraction, or magic. Here's mine.

*1. Story illustrations when the text is on.*

Each chapter contains three separate images (bottom to top): 

1. Bottom layer: The main illustration
2. Middle layer: A blurred version of the main illustration
3. Top layer: A more highly blurred version of the main illustration

This is how it works — pages that require a lot of data, such as Story, are loaded by the ContentLoader. It tracks the state of an image via its own state. This allows me to keep watch over the status of the blurredImage. If it isn’t loaded, the Fallback image — which lives inside the site as a Data URI — is shown. 

Fun fact: The Fallback is always shown when navigating internally on mobile devices, but almost never when  navigating on desktops and laptops. 

Why? I can't get the browser to acknowledge that the illustration is already loaded when internally navigating on iOS. So, I cut bait and always show the Fallback first. 

*2. Story illustrations when the main illustration hasn’t loaded yet.*

The main App component has a property named illustrationState on its state: 

1. Image is loaded: > 0 
2. Image is not loaded: < 0 
3. There's no image on this page: 0 

So, -2 means illustration 2 isn't loaded and 2 means it is. 

The value is determined by checking the image element’s .complete property. 

What happens when a user wants to see the illustration before it's loaded? A property on App state named illustrationDelay is set to true. This causes a small loading animation to appear beside the button, which is now named “Cancel.”

When the main illustration loads, its onLoad handler updates illustrationState to a positive number. If illustrationDelay is true when this happens, it becomes false, the loader is removed, the button is renamed “Text on,” and we start the animation to reveal the main image.

Magic. 

-j