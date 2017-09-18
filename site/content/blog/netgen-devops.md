---
title: "Netgen Devops"
date: 2017-08-15T10:34:53+10:00
description: "Always precise spacing and perfect font size"
bref: "Typography is perhaps one of the most important and most visible things on a web page. Even slightest imperfection can ruin otherwise perfect website. With Kube, you will have perfect typography with ideal spacing, font sizes and proportions, regardless of the exact style or font you choose for your site."
draft: true
---
We all rely on technology, from checking our e-mails to reading this site. Every aspect of our lives is rapidly becoming integrated in ways our forefathers would dream of. But this doesn't mean it has to be hard, overly complex or lock into specific vendors.

At Taylored Technology we developed one of the fastest WordPress hosting platforms in the world, and we did it by systematically taking apart every moving piece of what made the WordPress ecosystem; analysing it under the microscope tuning and tweaking at a microscopic level; introducing new and old technology replacements into the newer ecosystem and then subjecting it to a massive amount of pressure. 2.5 Billion page views to be precise…

But then our client base grew, we were seen on Australia's Channel 10, 11, One, & even 'The Project'. Our clients demands grew to the point that one site required 160 plugins [lovethemes-amp] over 160,000 lines of code. Our infrastructure held and we introduced zero downtime updates on a daily basis for all our clients.

Lets think about that for a second... multiple WordPress sites, all running different plugins, some massive, some small rolling out the latest stable plugins available in the WordPress ecosystem daily with zero downtime. A challenge point for most enterprise world wide...

We could do it, not just because the infrastructure was built from the ground up, but because we had a strict policy that all of our continuous integration & continuous development systems were 100% in the cloud and running on a new technology called Docker (which at this time had only been available to the public for a month).

It wasn't that Docker was anything fundamentally new, LXC containers had been round for a long time, but it enabled a rapid prototyping and scaling environment that we just couldn't achieve on a private cloud with CHEF & Puppet scripts. We had specifically chosen not to build out platform on any of the largest cloud providers because at the time they all offered the same gigantic monolithic approach to infrastruture. Use large servers, or slightly smaller Virtual Machines (VM) that are the right size for your application.

But what if you don't know your application requirements in advance? Your forced to develop, slam into a server out of memory or CPU wall, rebuild from scratch and start again... Or spend a crazy amount of massive servers gradually downsizing as the bill shock shows up.

Sure, if we'd have used a large cloud provider they have plenty of tools available to help transition to a larger server, but the underlying problem is still there.

With Docker, and containerization in general your able to strip away all the non-essentials, providing a smaller attack vector for the security concious amongst us but. But fundamentally you get better resource usage and the ability to blanket profile your microservice without spending weeks in performance testing. In fact, Containerization in general is to Cloud what Kanban is to Agile.
