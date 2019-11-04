---
type: reverie
headline: Adventures in the resize event
date: November 4, 2019
slug: Haphazard firings are just one browser annoyance
---

Browsers break a lot. 

I discovered this during early site development. I was working to make the Web site look like an app. I wanted the header, footer, and body to stay on screen at all times — a compact little package.

It’s tremendously difficult. 

One problem is the menu bar in iOS Safari. It’s really hard to work with — if your site stretches to the bottom of the screen and the user touches this area, the menu bar will jump into view and stay there, throwing everything off. 

(You may see this behavior if you use the site in landscape mode.)

There were other problems, too. 

I can’t remember half of them. Anyway, I ultimately decided to use JavaScript to explicitly set the height of the site's main body element. I grabbed hold of the browser’s resize event to help me and never let go. 

If only it had been that easy. The resize event is very pokey. 

It fires randomly and inconsistently. It can fire when you change orientation, scroll fast to the top or bottom of the page, or pinch, zoom, and drag the site. There are "hidden fires," too. In iOS Safari, resize fires after the page loads because it paints the screen without the menu bar, then repaints it with the menu bar. 

There's no rhyme or reason here. I hope to never think about any of it again.

But I did. The site can now calculate and re-calculate height on load, orientation change, and changes to window size. I block the calculation when the the site is pinch-zoomed, and I added an extra little bit of CSS for a few milliseconds when the user changes orientation in iOS Safari because of some mobile nuttiness.

Also, turns out that height is just as maddening as the resize event. 

Different browsers and devices implement height values differently, seemingly at random — window.innerHeight, document.documentElement.clientHeight, test it all and hope you get it right! Who new height would give you such grief...?

Anyway, my algorithm almost always seems to work. 

All’s well that ends well...

-j