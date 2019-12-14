---
type: reverie
headline: At Santa Con, my new certainty about code
date: December 14, 2019
slug: Good design is a five-minute fix
---

Tested the site in Grand Central earlier. 

The Apple Store was packed with holiday traffic. The air buzzed with conversation while salespeople in red shirts flit between tables and customers. Say what you want about the holidays, good cheer and warm tidings were everywhere. 

Unfortunately, my own faded quickly. 

I loaded the site on a big iPad Pro and saw the saddest sight of all.

Inconsistency. Sometimes the home-page headline faded into place, as it should, sometimes it half faded, then skipped done, sometimes it just skipped done.

Oh boy. 

So I headed to Perk, a little coffee shop in Murray Hill. I threaded the throngs of Elves tripping Santa Con's light fantastic, then sat down to debug. 

I quickly realized my problem. 

The loading sequence doesn't explicitly wait for the headline to finish fading in. It just sort of assumes that it'll be done by the time the cover image fades off screen. 

Theoretically, yes. Practically, no. Sometimes the animation runs slow. 

So, I decided to explicitly track the headline's fade-in state. 

This meant adding an index to the loadLevels array, incrementing the values that cause the loadLevel to advance from one to two to three, and adding an onTransitionEnd event handler to the headline. 

It took five minutes, and it worked. I felt a new certainty about code as I rejoined all the Santas on the street — it's easy to debug good design. 

A Merry Christmas indeed.

-j
