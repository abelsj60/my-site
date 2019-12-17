---
type: reverie
headline: React Transition Group and why I hate it
date: November 3, 2019
slug: Working across sibling components
---

Let’s keep this short. 

I never managed to get React Transition Group to work right.  I tried repeatedly. I lost a lot of time on the thing. I made several studies of its documentation. 

No matter what I did, I found it nothing but annoying. 

Maybe I used it wrong. 

Most of the examples I found came from adding an item to a list of items, like a to-do list or grocery list. This generally entails animating the child of a parent component. For instance, an Item is animated in and out of the List. 

Easy peasy, right? 

Maybe. But I needed to animate elements that were "unrelated siblings." For instance, the Header, Footer, and Body contained elements that had to be animated simultaneously.

Try as I might, I couldn't get React Transition Group to do it. 

Now, in my defense, I wouldn't call the React Transition Group docs complete. And I don't personally think it's that intuitive, but dem's de breaks. 

So I did it myself. 

I passed state to my Styled Components, then used transitions and keyframes to animate them. You can see the results when you reveal the chapter illustrations. 

You know what they say. All's well that...

-j