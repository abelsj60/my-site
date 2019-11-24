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

Most of the examples I found came from adding an item to a list of items, like a to-do list or grocery list. This generally entails animating the child of a parent component. For instance, an < Item > is animated in and out of the < List >. 

Easy peasy, right? 

Maybe. But I needed to animate elements that were in siblings. For instance, I had to animate elements of the < Header >, < Footer > and < Body >. 

Should be as easy as the examples, right? I'm still triggering the animation via the state of a shared parent component. 

Right. I never got it to work. 

Now, I wouldn't call the docs complete. And I'm not sure the components are as intuitive as everyone says, but, them's the breaks. 

I came up with an alternative. I did it myself. 

I used Styled Components and passed the relevant state to the animating elements via props. You can see the results in the story when you turn its text on and off. The background animates, as does the text shadow on header and footer elements. 

Done.

-j