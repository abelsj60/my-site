---
type: reverie
headline: An extra mile for new users
date: November 4, 2019
slug: Two Redirects in a row
---

Quick, pick!

1. An event serves cupcakes from the Buttercup Bake Shop or ShopRight? 
2. A date offers wild flowers from a florist or a rose from the local deli? 
3. A remote control car comes with batteries or it doesn’t. 

Easy, right? Buttercup Bake Shop, wild flowers, and batteries. 

The extra mile always wins. That's why I added a little extra extra oomph for new users. My name and bio beat three times on the home page. A heartbeat. 

It's cute. 

I got the idea from Google. 

Of all its marketing programs, the only thing Google does that actually impresses me as a true cut above is the Google Doodle. All the rest plays like the usual overmarketed hype companies put out.

But the Google Doogle is so unnecessary and fun that it really works.

Now, the problem with my heartbeat is that it’s great to see once, not twice. 

I know! Why not limit the beat to the first load? At first, I tried to do this by testing the browser’s image cache, but that was complicated and surprisingly imprecise. Then I stumbled upon localStorage. It’s tied to a domain, meaning it persists between user visits. It’s like a poor man’s database. So I used it.

I add a timestamp to localStorage named “lastHeartbeat.” It’s updated whenever the user hits the site, no matter the section. The heartbeat runs for new users or if the site finds a two-week gap between a user's visits.

I really like [this feature](https://github.com/abelsj60/jamesabels.net/blob/54f0b67ad19c3c36da105a58775b79cab209e41e/app/App.jsx#L255) because it’s unusual. 

Now about that cupcake...

-j