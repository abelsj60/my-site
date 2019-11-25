---
type: reverie
headline: My best worst design decision
date: November 3, 2019
slug: Two Redirects in a row...
---

I officially did something with code that is bad. 

I don’t care. I may change it some day. But it works, it’s easy to understand, it’s predictable, and it’s so integral that changing it would be a pain. 

Some people call this last issue 'technical debt.' Seems a little judgmental.  

Let's call it 'personality.' 

Here's the issue: Dynamic content, such as for the journalism or projects sections, is loaded through a component named ContentLoader. 

It builds a page for the user by breaking down each url. If the url's short, such as by being just '/chapter' or '/projects,' (meaning it has no parameters, like chapter title) the ContentLoader will make make the needsRedirect property on its internal state true. 

This triggers a Redirect component. It sends the user to a fictitious route called /i, which invokes the ReloadRoute component. The ReloadRoute component looks at the Body's local state (Body sits between the Header and Footer) and build a new URL with parameters reflecting the last known location. Then it redirects users back to ContentLoader.

Catch that? Two Redirects, one after the other! 

The good: The App component doesn’t have to track this content and the Header and Footer can make use of 'naked links' for navigation (e.g., /chapter as opposed to /chapter/a-magic-quest). 

The bad: It’s harder to think about what React is doing at any given time. The fictitious '/i' route can make things hard-to-understand because of all the re-rendering.

This may not be the best way to control React — there may be a better way with keys — but, this is in place and fully functional.

Like I said, personality... 

 -j