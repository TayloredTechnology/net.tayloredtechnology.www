---
title: "Continuous Mobile Delivery"
date: 2017-08-15T10:15:47+10:00
draft: false
---

## Clients enabled
- Australia: INGDirect, NAB, Vodafone Hutchinson, Coles, Telstra
- Asia Pacific: CIMB (Malaysia), NTT Docomo (Japan), NTT Data (Sapporo Japan), IBM (Japan), Acrodea (Japan)
- USA: DeutscheBank

## Project Information
Each of the clients had similar challenges in that they were actively developing and deploying mobile applications to multi platform phones. They had various security requirements such as Two Factor Verification, new user registration, root detection, phone number identity, and push notifications that all required the introduction of a ‘Stabilizing’ phase into their software development life-cycles slowing product delivery and increasing the risk of customer facing escaped defects.

## Business Transformation
- Primarily a 6 month involvement in each organization to achieve acceleration
- The ‘Stabilizing’ phase (either officially named as such or factored into estimates of other parts of the application life-cycle); the application would be tested via partners, bugs reported, prioritized and if necessary spiked before submission to app stores, where such tests would be unable to be handled via any existing automation framework.
- The scope of impact of this ‘Stabilizing’ phase exponentially increased proportional to the number of delivered applications and was especially problematic for NTT Data as they were responsible for over 400 Applications across 100 different Android mobile phone types with major updates to the underlying OS introduced each quarter.
- In NTT Data’s case prior to introduction it required 10 people 2 weeks of two shifts a day to test application updates on one device. After implementation the same work was completed in 3 days and could be run on 10 devices simultaneously.
- NTT Docomo after seeing the success of their sister company NTT Data requested the same approach and system be implemented in the customer monitoring center in Tokyo.
- Proactive monitoring of applications in production was also introduced where critical path application interactions could be executed in a multi-geolocation context (including international) to ensure consistent and reliable customer access to services such as video streaming, money transfer and logins in a timely manner.

## NextGen Delivery
- We introduced a new workflow model and treated mobiles as software in secure banking compliant cloud data-centers where developers & testers could interact with physical phones & their sensors in the cloud via automated Operating System Control. Effectively resulting in bringing every outsourced test back in-house as part of the Continuous Delivery Pipeline.
- Splunk powered dashboards demonstrating throughput errors, uptime and geo-location were implemented where required with a backed alerting-framework notifying customers within 2 minutes of downtime and / or creeping response times.
- Multiple phone networks, in multi geo-locations were all implemented as required.
