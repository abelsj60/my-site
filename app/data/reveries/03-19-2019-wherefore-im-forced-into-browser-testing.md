---
type: reverie
headline: Wherefore I'm forced to browser test
date: March 19, 2019
slug: Browser testi
---

I was forced into browser testing today. Why?

I tried to run the site on an old iPad Mini (iOs 8, Safari 8) around 8 last night. Disaster. It wouldn't load. I eventually realized the problem — Safari 8 didn't understand some of my code (something like: 'meMyselfAndI'.includes('me')). 

So I polyfilled it (meaning I used a plugin to add the missing method) via Bowser and Webpack. And I learned my lesson — with this much work in, browser testing is not optional.

So there I am talking to myself at all hours of the night, running my first test with Endtest. It's a browser-testing platform. You give it a URL, it takes a screenshot on whatever machine and browser you specify. I got a test running — one of their free ones. I liked the results, but Endtest wants $138 per month for the platform. Not for me. 

So I Googled competitors and settled on BrowserStack because I've heard of them, their product's comprehensive, and, frankly, I found the $39 a month (if you go monthly) palatable. I think I only need a month's testing. 

(BrowserStack has a freelancer rate, but you can't do screenshots with it. Worthless.)

A review's next, but I'll say this now — love what they're trying to do.

-j






