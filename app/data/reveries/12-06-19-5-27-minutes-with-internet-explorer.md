---
type: reverie
headline: '5.27 minutes with Internet Explorer'
date: December 6, 2019
slug: Internet Explorer won't stop animating my Charms!
---

5.27 minutes is all it takes to crash into Internet Explorer. 

That's when you'll read a Stack Overflow post complaining about it. Why? I'll give you an example. 

The magic spell on the home page (revealed by clicking my name) leads to three Charms. The active Charm is animated. It pulses and spins. Tap it, it'll stop, and the next active Charm'll take over. It's dumb fun. And it works great on every browser I've used, up to my cutoffs.

Then I sat down with Internet Explorer at a FedEx Kinko's to test it live. It worked fine on BrowserStack, but that's not 100% reliable. Kinko's — FedEx Office now — has IE 11 on its computers. 

So...I fire it up, load the site, and find that while the active Charm animates, the now inactive Charm won't stop spinning. Pretty soon, I've got one active spinner, and two phantom spinners. (And sometimes I don't.)

It just looks broken. 

So I checked my code. Seems to be updating and telling the browser to stop the spinning. Internet Explorer's just ignoring the instruction because it's a pain in the neck. 

So, I futzed about on Google for awhile and some guy on Stack Overflow files an answer with a solution at the very bottom of a long page. 

When his animation is done, he forces Internet Explorer to stop by going beyond merely removing the animating class. He actually adds a class with a "motionless animation" in it. Internet Explorer then forgets the old animation and runs the new one, which has no motion! Great idea! It works!

This guy deserves a medal. Internet Explorer does not.

-j
