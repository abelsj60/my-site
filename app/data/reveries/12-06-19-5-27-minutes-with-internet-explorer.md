---
type: reverie
headline: '5.27 minutes with Internet Explorer'
date: December 6, 2019
slug: Internet Explorer won't stop animating my Charms!
---

You'll run into this 5.27 minutes after you start writing front-end code:

"...because Internet Explorer is the devil's playground..." 

Why do people feel that way? I'll give you an example. 

The magic spell on the home page (revealed by clicking my name) leads to three Charms. The active Charm is animated. It pulses and spins. Tap it and it'll stop so the next active Charm can take over. It's dumb fun. And it works great on every browser I've used, up to my cutoffs.

Then I sat down with Internet Explorer at a FedEx Kinko's to test it live. It worked fine on BrowserStack, but that's not 100% reliable. Kinko's — FedEx Office now — has IE 11 on its computers. (It says it has Edge, too, but it won't load. Very frustrating.)

Anyway, I'm digressing. 

So...I fire up IE 11, load the site, and find that while active Charm animate, inactive Charms won't stop animating. They just keep spinning. Pretty soon, you've got one active spinner, and two phantom spinners. (And sometimes you don't.)

It literally looks broken. 

So I checked my code. Seems to be working fine. It's updating and telling the browser to stop the spinning. Internet Explorer's just ignoring the instruction because it's the devil's playground. 

So, I futzed about on Google for awhile and some guy on Stack Overflow files an answer with a solution. 

When his animation's done, he forces Internet Explorer to stop it by going beyond merely removing the animating class. He actually adds a class with a "motionless animation" in it. Internet Explorer can then forget the old animation and run the new one (which has no motion in it!). Great idea — I think it'll work. 

This man deserves a medal.

-j
