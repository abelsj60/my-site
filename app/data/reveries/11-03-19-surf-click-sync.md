---
type: reverie
headline: Surf. Click. Sync.
date: November 3, 2019
slug: Updating state with internal links
---

How do you keep state in sync in React?

Trick question, right? State's often split between several components. 

This can be nice. It’s often easier to understand what's up when you only have to remember a couple things at a time. But, I find some app-wide state's usually kicking around, too.

It’s often updated in componentDidUpdate(), where infinite loops loom. The fix? Block updates after the first. So, if 1 is added to 1, stop the updates when 1 hits 2. I did this initially to keep the app state in sync as users navigate. 

But it was confusing. So I did something else. 

Visitors navigate the site via links. So I said, "self" — because a friend says I should say "self" when recounting personal adventures — why can't we use the link to trigger resets?

Great idea, I responded. Here goes:

I [modified](https://github.com/abelsj60/jamesabels.net/blob/54f0b67ad19c3c36da105a58775b79cab209e41e/app/shared/CustomLink.jsx#L74) the Link component to accept an update function via props. It's added to the Link’s onClick handler. If the function exists when the Link component gets called, the app state resets itself. 

No componentDidUpdate(), no parent-child supervision, just one smooth update.

It took some fancy footwork at the start to debug weirdness, I don't even remember what it was. But it works and I like it because I can forget it.

-j