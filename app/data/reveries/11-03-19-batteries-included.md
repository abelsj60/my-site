---
type: reverie
headline: Extra flair for new users, not old ones
date: November 3, 2019
slug: Two Redirects in a row
---

Always go the extra mile. It makes things stand out — every time. Try this: 

1. An event serves cupcakes from the Little Sunshine Bakery or Shop Right? 
2. A date shows up with wild flowers from a flower store or a rose from a deli? 
3. A new flashlight comes with batteries or it doesn’t. 

Easy. Little Sunshine, wild flowers, and batteries. 

That how I knew I needed to add some extra oomph to the site for new users. They see my name and bio beat three times on the home page. It’s called a heartbeat in the code.

It’s cute — like the lamp from a Pixar film, a low-budget one.

Not enough sites do this sort of thing,  right? They don’t acknowledge Christmas or New Year’s or Halloween or the World Cup. They just sorta pretend there’s no world outside their walls.

There just aren’t enough extra flourishes on the Web. It’s very workmanlike out there. 

We all know why. It’s hard to go the extra mile.

It requires commitment. In our personal lives, you’ve got to add time and emotional energy to whatever you’re doing. In our professional lives, you’ve got to add resources — time and money — in order to create, maintain, and oversee whatever it is. 

These are real stakes. Why bother?

Because it’s so good! 

Of all Google’s enterprises, the Google Doodle screams “quality” the most. 

So I created the aforementioned heartbeat in the name of the Google Doodle. 

The problem with my heartbeat is that it’s great to see once, not twice. So I decided to limit it to the first load. At first, I tried to do it with the browser’s image cache, but that was complicated and surprisingly imprecise. Then I stumbled on localStorage. It’s tied to a domain, meaning it persists between user visits. It’s like a poor man’s database.

My current solution is to add a timestamp to localStorage named “lastHeartbeat.” It’s updated whenever the user hits the site, no matter the section. The heartbeat runs for new users and when the site finds a two-week gap between visits.

I really like this feature because it’s unusual. It shouldn’t be, but it is. 

Now about that cupcake...

-j