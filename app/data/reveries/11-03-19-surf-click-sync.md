---
type: reverie
headline: Surf. Click. Sync.
date: November 3, 2019
slug: Updating state with internal links
---

How do you keep state in sync in React?

Bit of a trick question, right? After all, you often split state between many components. This can be nice, as it’s often easier to understand what’s going on when you only have to think of a few things at a time. But, there’s inevitably some app-wide state that needs to be tracked.

It’s often handled in React’s componentDidUpdate lifestyle hook. Nothing wrong with that, that’s what it’s there for. Still, for my purposes (this site) I found it to be a bit of a drag. 

It was confusing to constantly add conditionals to setState in componentDidUpdate. 

(Why did I have to do this? To avoid infinite loops...computers really are dumb.)

So I came up with an alternate approach. My users navigate the site via React Router’s Link component. (It’s actually a custom version of it, but let’s leave that for another day.)

I took advantage of this. 

I modified the Link component to accept an update function via props. It ends up on the Link’s onClick handler. The end result is that App state stays in sync as users surf the site. 

There isn’t too much more to say about this. I think it’s a fairly clean idea, although, it took some work at the outset to debug some bizarre behavior. I can’t even remember what it was. 

-j