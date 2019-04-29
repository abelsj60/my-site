---
type: reverie
headline: Virtual reality is light on reality, two
date: April 18, 2019
slug: React lies too sometimes
---

Let's talk React now that I've decided that virtual machines aren't always right.

II. Does React always understand what browsers are doing?

React is a free javascript framework from Facebook that makes it easy for Web developers to build very slick software. It lets them use javascript to generate HTML and update it in real time as users interact with their programs. 

React comes with a lot of opinions about how to program software.

(It comes with an army of people who have equally strong opinions about that too. I'll belabor the whole thing as soon as I know enough to have an opinion about why it's so horrible to have an opinion.)

Anyway, people refer to React's opinions as "the React way." 

Sticking to it seems to be a good idea. Fighting it often leads to trouble. 

Sitll, the React way isn't always good enough. That's where "refs" come in. 

React's official documentation calls "refs" an "escape hatch." They offer a way to look under React's hood. 

Basically, React sits between your code and the Web page people see on screen. The page is React's shadow. Kinda makes sense — React calculates values, then uses them to "paint" results to screen (really, the browser) when done.

Problem is, the ref represents what React knows BEFORE painting.

Let's use Internet Explorer 11 on Windows XP as an example. 

According to IE 11 developer tools, my overflow element has an empty gap of 17px between the content and the scroll bar. This gap is the expected width of an IE11 scroll bar. Basically, IE (and a bunch of other browsers) is adding space for a second scroll bar. (It's empty space, no scroll bar, just space for one.)

After pecking about, I realized I could get rid of it by checking to see if the gap existed via the following equation: 

    if (mainElementRefWidth > overflowRefWidth) {
        25 - (mainElementRefWidth - overflowRefWidth) = 17 (or whatever)
    }

Easy peasy! Um. But. OK... 

I added "refs" to of my elements, then checked their width via .offsetWidth and .getBoundingClientRect().width. Unfortunately, they both report that the offending element has the right width. 

I can see this isn't true when I look at the screen and the computed width of the element in developer tools. 

So what gives?!

Remember the "paint" I mentioned earlier? That gives.

React generates HTML behind the scenes before painting it to screen. The width is right at the time of generation. Problem is, React doesn't seem to see what happens AFTER it paints. React doesn't know about this, though.

I realized this while perusing Stack Overflow. A guy with a similar issue asked, and even linked to a React team issue on Github talking about it. It was suggested that he check element width after calling requestAnimationFrame(), a built-in browser function that runs AFTER HTML the browser paints elements to screen.

(React paints, then, I think, the browser paints. Everyone likes the word "paint.")

This delay ought to let me get the true width (the one with the gap). 

If only. I still got the wrong number. (My eyes still tell me it's wrong.) 

At this point, I tried a whole of bunch things. The long and short it is that the best I could do was an unstable fix. It worked in some virtualized browsers, but not others, and the problem wasn't always React.

Given the last post's virtualization question, I've decided to chalk this up to a virtualization bug. After four days of work, I now believe in ghosts.

Who you gonna call?

-j
