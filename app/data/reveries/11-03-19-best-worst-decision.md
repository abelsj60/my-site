---
type: reverie
headline: My best worst design decision
date: November 3, 2019
slug: Two Redirects in a row...
---

I officially did something with code that I’m sure is bad. 

Or, at least, not great. And I don’t care. I may change it some day. But it works, it’s easy to understand, it’s predictable, and it’s so integral to the site that changing it will be a pain. 

Some people will call this technical debt, but that’s kind of judgmental. Me? 

I think it’s part of the site’s personality. Here it is:

Site sections that contain dynamic content, such as journalism, projects, and the story, are loaded through a component named ContentLoader. This is the gist of how it works. 

It decodes the content the user wants by breaking down the url and looking through its params. Great. Thing is, if the url is short, meaning the user is requesting a section without specifying params, then the ContentLoader will set a property on its local state called needsRedirect. 

When this property is true, the ContentLoader activates a Redirect component. This component  sends users to a fictitious route called /i, which invokes the ReloadRoute component. It looks at the Body component’s local state (where’s Body? Between Header and Footer) in order to add params to the URL before redirecting the user back to ContentLoader. 

Catch that? Two Redirects, one after the other. 

They’re used when a user loads the site via a naked url, i.e., www.jamesabels.net/chapter, or when the user clicks on certain links in the Header and Footer. Both rely on this feature. 

The good: This means the App component doesn’t have to track this content and the Header and Footer can rely on naked links for navigation (e.g., www.jamesabels.net/chapter). 

The bad: This means that it’s harder to think about what React is doing at any given time. The reason is that the user may be going to-or-fro /i. That’s a lot of opaque re-rendering.

Now, I dealt with it by watching the results in the console and debugging the problems by hand. While I know this isn’t the best way to control React, fact is, it’s in place and fully functional. 

(I think there may be a better way to do it with keys. Food for thought another day.)

Bottom line, the code’s got some personality. 

 -j