---
type: reverie
headline: React Transition Group and why I hate it
date: November 3, 2019
slug: Working across sibling components
---

Let’s keep this short. 

I never managed to get React Transition Group to work right.  I tried repeatedly. I lost a lot of time on the thing. I made several studies of its documentation. 

But, no matter what I did, I found it to be nothing but annoying. 

Maybe I was using it wrong. 

The best examples I found had to do with adding an item to a list of items, often a to-do list or grocery list. This meant adding an item to a list of similar items, which is accomplished is accomplished with logic that runs within one Component or in one of its children.

In other words, this example doesn’t cover transitions that run across sibling Components. For instance, the story illustrations occupy space controlled by the Body, Header, and Footer. They’re functionally unrelated siblings who need to run simultaneous animations.

Someone else may call this is a poor use case. Whatever. It's what I'm doing.

From what I can tell, you’d need to have separate React Transition Group components in each of these Components to coordinate animated transitions between all of them. Number one, at no time was this obvious to me. Number two, this sounds like an absolutely horrible time.

So, I handled animations on my own by triggering CSS transitions via changes to App state.

You can see an example of the result in the story when you turn the text on and off. 

-j