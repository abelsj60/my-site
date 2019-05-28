---
type: reverie
headline: Virtual reality is light on reality, two
date: April 18, 2019
slug: React lies too sometimes
---

Now it's React's turn. This was a mind-boggling trip through "The Twilight Zone."

II. Does React always understand what browsers are doing?

React is a free javascript framework from Facebook that makes it easy for Web developers to build slick software. It makes it easy to use javascript to generate HTML and update it in real time as users interact with a program. This makes it feel less like CNN.com more like Microsoft Word.

React has a lot of opinions about how to program software.

(It also has an army of followers who have equally strong opinions about it. I'll belabor the whole thing as soon as I know enough to have an opinion about why it's so horrible to have an opinion.)

Anyway, people refer to React's opinions as "the React way." 

Sticking to it seems to be a good idea. Fighting it often leads to trouble. 

Still, the React way isn't always good enough. That's where "refs" come in. 

React's official documentation calls them an "escape hatch." They give you a way to reach under React's hood and work with HTML directly. The general idea is that React sits between your code and the Web page. React calculates values, imagines the result, and then paints the completed picture to screen when done.

Unfortunately, I ran into weird and bizarre problems with this. Remember my problem:

According to my eyes, there's a 17px gap between page content and the on-screen scroll bar. This gap shouldn't be there. I believe it represents a second hidden scrollbar that only shows up on BrowserStack's virtual machines. My initial idea was to identify these "narrow" elements and force them to widen by dynamically calculating the missing width so I could add it back into the element.

So I added "refs" to my elements, and examined their .offsetWidth and .getBoundingClientRect() properties to determine their width. 

Here's the problem — both properties reported that the offending element was correctly sized. My eyes tell me this isn't true. Sigh.

So what gives?! I'm not entirely sure.

I think it's a painting problem. React generates HTML behind the scenes, imagines the results, then paints it to screen. The width is right at the time of generation. Unfortunately, React doesn't seem to see what happens AFTER the paint.

I'm pretty sure because someone on StackOverflow lead me to this [issue on the React development site](https://github.com/facebook/react/issues/2659). 

Someone suggested trying to use requestAnimcationFrame() as an alternative. It runs after HTML has been painted to screen by the browser. 

Suffice it to say, this didn't work. Neither did any of the other things I tried over the course of, what, a two week period of time?

Given the last post's conclusion on virtual machines, I've decided to chalk this up to a ghost in the machine.

After all, who you gonna call?

-j
