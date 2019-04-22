---
type: reverie
headline: When stumpy elements stump, two
date: April 18, 2019
slug: React lies too sometimes
---

I raised the white flag last time.

A stumpy element stumped me, and I decided that virtual machines aren't always right. Now we talk React. Here's the question from last time.

II. Does React always understand what browsers are doing?

React is a free javascript framework from Facebook that makes it easy for Web developers to build very slick software. It lets them use javascript to generate HTML and update it on the fly as users interact with their programs. 

React comes with a lot of opinions about how to program software.

(It comes with an army of people with equally strong opinions about that too. I'll belabor the whole thing as soon as I know enough to have an opinion about why it's so horrible to have an opinion.)

Anyway, people refer to React's opinions as "the React way." Sticking to it seems to be a good idea most of the time, as fighting it leads to trouble. But sometimes, the React way isn't good enough.

That's where "refs" come in. 

React's official documentation calls them an "escape hatch." They offer a way to look under the surface of React in order to get information about HTML elements directly from the browser. Lots can be said about them.

For now, here's what's important. React basically sits between your code and what people see on screen. The Web page React generates isn't React at all, it's React's shadow. Makes sense, right? React is constantly calculating things, then "painting" them to screen when it's done.

Well, the ref represents what React knows BEFORE the painting.

This is a problem for me. Let's talk about it.

I'll use Internet Explorer 11 on Windows XP as my example because it's shocking. According to developer tools, the overflow element has an extra 17 pixel gap (the width of a scrollbar) that shouldn't be there. 

After pecking about, I realized I could get rid of it by checking if the width of the line at the top of the footer is greater than the width of the overflow element. If yes, I could remove the phantom scrollbar by reducing the overflow element's padding, which is currently 25px:

25 - (footerLineWidth - overflowRefWidth) = 17 (or whatever)

Easy peasy! Um. But. OK. I added a ref to both of my elements, then I checked their offsetWidth and getBoundingClientRect().width. But. Hm.

Both techniques report that the overflow element is the right size. 

Unfortunately, when I look on screen, I can see this isn't true. And, when I look at the computed width in developer tools, I can see this isn't true. So what gives?!

Remember the "paint" I mentioned earlier? Yeah, that gives.

React generates HTML behind the scenes before painting it to screen. The width is right at the time of generation. Problem is, React doesn't know what happens AFTER painting. If something weird happens, neither React nor I know.

I got this from Stack Overflow. A guy with a similar issue asked about it, which helped me sort it out. The suggestion is to check the width after calling requestAnimationFrame, a built-in browser function.

Why? Apparently, the browser runs it after HTML appears on screen. The delay ought to let me get the true width of the overflow ref. If only.

I'm still told it's the right width, even though the computed value in developer tools, and my eyes, say otherwise. When I highlight the element, of course, an element of the right size is shown. Nevertheless, the information conflicts. In essence, the element's the right size, but its content is shrunk by 17px to allow for a phantom scroll bar. Great. No help here.

So, after messing about, I tried to fix it again, this time by detecting the width of an element that sits inside the overflow container. First, I used refs, but that grew very complicated, so I decided to simplify by adding a custom class name to my Styled Components, and then using getElementsByClassName to find them. This most certainly is not the React way, but it's easy.

Guess what? 

The fix worked in a virtualized version of IE 11, but not in modern versions of Firefox and Chrome. By worked, I mean that the browser reported content element's width as being smaller than desired. And yet, virtualized versions of Chrome and Firefox swore the same width was not too small, even though I could see it with my own eyes and in developer tools. 

This was a fourth day of work. So many options, so much fuss.

I have firmly decided something. I learned a lot here, but it's time to give up, for really reals. I removed all the new code, tip my hat to the ghost in the virtual machine, and am letting the chips fall where they may. Enough.

-j
