---
type: reverie
headline: Adventures in the resize event
date: November 4, 2019
slug: Haphazard firings are just one browser annoyance
---

Browsers break a lot. 

I discovered this during early site development. I was working to make the Web site look like an app. I wanted the header, footer, and body to stay on screen at all times — a compact little package.

It’s really hard. 

One problem is the menu bar in iOS Safari. If your site stretches to the bottom of the screen and the user touches this area, the menu bar will jump up into view and stay there, throwing everything off. 

(You'll see this behavior if you use the site in landscape mode on a narrow screen.)

There were other problems, too. 

I can’t remember half of them. Anyway, I ultimately decided to use JavaScript to explicitly set the app's full height. I grabbed hold of the browser’s [resize event](https://github.com/abelsj60/jamesabels.net/blob/54f0b67ad19c3c36da105a58775b79cab209e41e/app/App.jsx#L469) and never let go. 

If only it were that easy. The resize event's very pokey. 

It fires randomly and inconsistently. It'll fire when you change orientation, scroll up and down the screen really fast, pinch, zoom, and drag the site, or breathe. There are "hidden fires," too. In iOS Safari, resize seems to fire twice during page load (I think), perhaps because the browser first paints the screen without the menu bar, then repaints it with the menu bar. Hard to say.

It's completely stupid, even if necessary. 

Anyway, I forced my way through the thicket. The site can calculate and re-calculate height on load, orientation change, and changes to window size (on desktops and laptops). I even add an extra bit of CSS for iOS 12+ for just a beat so the browser's height measurements will reflect the full height of the page, sans address and menu bars. 

This last part was another maddening discovery. 

Bottom line:

Different browsers and operating systems implement height values differently — window.innerHeight, document.documentElement.clientHeight, window.screen.height, it's all different in different places.

Well, all’s well that ends well...

-j