---
type: reverie
headline: When stumpy elements stump, one
date: April 17, 2019
slug: Virtual machines may lie, really
---

White flag!

BrowserStack says my design is breaking on some old machines. It took a long time, but I finally realized that a second hidden scrollbar is being added to an element that allows uers to scroll content too long for the page. This creates an ugly gap, and brings up two questions: 

1. Are virtual machines always true to reality?
2. Does React always understand what browsers are doing?

Now, I don't know anything much about anything much. Worse, sometimes I find out that I'm wrong. But I'm pretty sure the answer is no, no, it depends, and, at least occasionally, no. Always cover your bets.

I. Are virtual machines always true to reality?

A virtual machine allows you to run an entire computer that isn't yours on top of your computer. So, for example, I can run Windows XP in a virtual machine while also running OS X on my Mac.

This allows me to test a lot of browsers without spending bazillions on equipment. I'm not doing this directly. BrowserStack has made a whole bunch of virtual machines for me. That's what $39/month gets you.

So the question is, can I trust what these machines are telling me about my site's design? Most of the time, "yes," but not always.

Proof, right? 

After seeing my layout problem on a range of Mac OS and Windows machines, I used a virtual machine to run Chrome 73 on Mac OS X High Sierra. 

Sure enough, my layout problem reared its ugly head.

Except— my real-life computer is a Macbook Air running OS X High Sierra and Chrome 73. There's no layout problem. Let me say that again.

NONE. ZERO. ZILCH!

Methinks the virtual machine doth protest too much. Hard to tell because I can't buy all these machines to test them. Still, the world's funny: I had the original Macbook Air and I remember reading that Apple built a special version of OS X for it, which came with its own quirks.

Maybe it's the same situation here, my 13'ers little quirk.

But...I've noticed a number of oddities with virtual machines, so I can believe they get it wrong sometimes. (Part two has more on why.)

Time'll tell.

-j
