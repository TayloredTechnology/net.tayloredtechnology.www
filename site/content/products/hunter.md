---
title: "Hunter"
date: 2017-09-18T13:27:11+10:00
draft: true
---

> proactively stealthy dependency management for Containers

## Purpose

… Monitor external container dependencies for new releases ensuring that the latest is always available and deployed into the *container pipeline*

## Why create it

… Containers changed things in the relationship between infrastructure and development, the empowered developers and released infrastructure to focus on more important tasks. But there is a continual challenge to manage external dependencies:

- **OS Packages** - managed via the OS Package manager i.e. *APK* or *APT*
- **Application Code** - managed by CI/CD pipeline and build process of the actual container
- **Application Code Dependencies** - managed by CI/CD pipeline * build process of the actual container
- **Upstream Container Updates** - typically unmanaged by normal deployment
- **External codebases** - typically unmanaged by normal deployment unless bundled into CI/CD dependency
- **External Container Dependencies** - unmanaged

50% of the above list was unmanaged, and in a world where things move rapidly for multi-daily production deploys this was unacceptable. New versions of dependency for any software should be propogated quickly and rapidly for security, stability and reliability.

*Hunter* was created to address this, everything, including GitHub GO Binaries can now be kept current and slipped into the regular CI/CD or in the new world *container pipeline* when available automatically.

## Get Started & Find out More

[Full Documentation Available](https://hunter.tayloredtechnology.net)

## Availability & License

- Open Source under *Mozilla Public License Version 2.0*
- GitHub @ [Basal Suite](https://github.com/TayloredTechnology/hunter)
