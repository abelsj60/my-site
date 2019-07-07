---
type: reverie
headline: JavaScript bullies and private methods
date: June 17, 2019
slug: It's my code, I can do what I want to
---

In "developer world," how do you ebb and flow between your natural predisposition and the realities of what others want?

This question hit me in the face recently. I'd done something with my JavaScript that I liked. Then I read that other people don't. 

Basically, I wanted to make some of my code's methods and properties "private," meaning limit them to certain places. For instance, my Location class has a "path" property that should only be used inside of it. So, I took some Stack Overflow advice and put an underscore in front of "path", creating "_path", to remind myself not to use it outside the Location class. Works for me.

But not for everyone. 

I recently [ran into a discussion](https://www.crockford.com/code.html) that said JavaScript developers shouldn't use the underscore because it looks amateurish. The reason is that it doesn't work. Not really. JavaScript doesn't care if I break the promise and use "_path" outside the Location class. Apparently, some langauges do.

To be clear, JavaScript's loosy goosy nature doesn't really bother me.

But, what if most developers are underscore haters? 

I figured I should check myself before I wreck my site fixing something that isn't broken. So I emailed Omri Bernstein, my Fullstack instructor, to get his take. His response was so good I'm including an edited version here:

>The Web site you sent me [about "underscore prefixing" doesn't seem](https://www.crockford.com/code.html) to be talking about ES5 JavaScript....

>Anyways, I think that using closures instead of prefixed underscores is a viable option in some circumstances, but classes in particular (e.g. a "private" class methods) don’t really lend themself to such a solution, including ES5 classses. I mean you can, but it either doesn’t [involve prototype methods at all](https://stackoverflow.com/a/55637), [looks kinda yucky](https://modernweb.com/private-variables-in-javascript-with-es6-weakmaps/), or is [not-yet-fully-agreed-upon](https://github.com/tc39/proposal-private-methods)....

>My feeling is that "underscore prefixing" is a reasonable convention for class methods. And if you’re going to break the "no-underscore prefixing" rule for classes, my feeling is you might as well not have the rule at all. That being said, a "better" (in my opinion) version of underscore prefixing is to [use symbols for private methods](http://2ality.com/2016/01/private-data-classes.html) (number four). It’s technically not private, but is difficult to accidentally access outside the class definition....

More homework — symbols. Oh well. Thanks Omri!

-j