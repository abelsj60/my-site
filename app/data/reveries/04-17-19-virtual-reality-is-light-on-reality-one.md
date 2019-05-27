---
type: reverie
headline: Virtual reality is light on reality, one
date: April 17, 2019
slug: Virtual machines may lie, really
---

White flag!

BrowserStack says my design is breaking on some old machines. It took a long time, but I finally realized that a second, hidden scrollbar is being added to the right side of the screen. This element allows users to scroll content when it's too long for the page. 

The hidden scrollbar creates an ugly gap, and brings up two questions: 

1. Are virtual machines always true to reality?
2. Does React always understand what browsers are doing?

Now, I don't know anything much about anything much. Worse, sometimes I find out that I'm wrong. But I'm pretty sure the answer is no, no, it depends, and, at least occasionally, no. Always cover your bets.

I. Are virtual machines always true to reality?

A virtual machine allows you to run an entire computer that isn't yours on top of your computer. So, for example, I can run Windows XP in a virtual machine while also running OS X on my Mac.

This allows me to test a lot of browsers without spending bazillions on equipment. I'm not doing this directly. BrowserStack has made a whole bunch of virtual machines for me (or, at least, this is my understanding of what's going on). That's what $39/month gets you.

So the question is, can I trust what these machines are telling me about my site's design? Most of the time, "yes," but not always.

Proof, right? 

After seeing the hidden scrollbar on a whole bunch of virtual machines running Mac OS and Windows, I tried one running Chrome 73 on Mac OS X High Sierra. 

Sure enough, the hidden scrollbar appeared.

Except— my real-life computer is a Macbook Air running OS X High Sierra and Chrome 73. There's no hidden scrollbar on it.

NONE. ZERO. ZILCH!

Methinks the virtual machine doth protest too much. Hard to tell because I can't buy all these machines to test them. Still, the world's funny: I had the original Macbook Air and I read once that Apple built a special version of OS X for it. This version had its own quirks (sadly — it was a lousy machine).

Maybe I'm confronting the same situation here, my 13'ers little quirk.

But...I've a feeling its a nonexistent problem.

Time'll tell.

-j
