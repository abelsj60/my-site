---
type: reverie
headline: At SantaCon, a new certainty on code
date: December 14, 2019
slug: Good design is a five-minute fix
---

I tested the site in Grand Central earlier. 

The Apple Store was packed with holiday traffic. The air buzzed with conversation while salespeople in red shirts flit between tables and customers. Say what you want about the holidays, good cheer and warm tidings were everywhere. 

Unfortunately, my own faded quickly. 

I loaded the site on a big iPad Pro and saw the saddest sight of all.

Inconsistency. Sometimes the home-page headline faded into place, as it should, sometimes it half faded, then skipped done, sometimes it just skipped done.

Oh boy. 

So I headed to Perk, a little coffee shop in Murray Hill, darting between throngs of elves — out tripping to SantaCon's light fantastic — so I could debug. 

I soon realized my problem. 

The home-page loading sequence didn't explicitly wait for the headline to finish fading. It just assumed the fade would be done by the time the cover image disappeared. 

Theoretically, yes. Practically, no. Sometimes the cover animation ran slow. 

So, I decided to explicitly track the headline's fade-in state. 

I added a new element to the loadLevels array, factored it into the algorithm that pushes the loadLevel from one to two to three, and created an onTransitionEnd handler that sets the new element to one after the headline fades into place. 

It took all of five minutes. I felt a new certainty about code as I rejoined all the Santas on the street — good design is easy to debug. Bad design is not. 

A very merry Christmas indeed.

-j
