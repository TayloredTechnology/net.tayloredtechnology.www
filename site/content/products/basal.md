---
title: "Basal"
date: 2017-09-18T13:27:22+10:00
draft: true
---

> quest for optimal Containerization

## Purpose

… A suite of containers utilizing the best practices for running & scaling applications in secure os independent cloud & Internet of Things ways.

## Why create it

Linux Containers were first released in 2008, and there have been many different approaches to actually enabling containerization with the most powerful being *Docker* & *Rocket*.

From an OS Vendor perspective, there has been a very strong move to providing support for containers both in being able to run them and producing slimmer smaller OS versions to run inside containers. With some of the brave souls using **Linux From Scratch** only to run their containerized applications (here's looking at you *GO Binaries*). But running an application & being able to do everything that's necessary to make that application perform in a first class citizen manner are two different things.

Containerization environments such as Kubernetes & MesoSphere place strong restrictions on containers running within their ecosystem for security, compliance and reliability so when things go wrong, it may not be as simple as executing into a container, installing software and debugging.

Additionally, containers are supposed to be agnostic, and while ideally they should run only one process the reality is they often need to run mulitiple secondary processes to support the one running process.

Internet of Things further complicates the mix as containers should now also be portable to on any container capable OS.

Basal overcomes these (and many other) challenges in its quest for the perfect approach running services in containerization.

## Get Started & Find out More

[Full Documentation Available](https://basal.tayloredtechnology.net)

## Availability & License

- Open Source under *Mozilla Public License Version 2.0*
- GitHub @ [Basal Suite](https://github.com/TayloredTechnology/basal)
