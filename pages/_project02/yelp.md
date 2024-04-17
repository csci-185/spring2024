---
layout: two-column
title: "Project 2 Option: Yelp Interface"

---

To get more practice working with Internet data, this project involves creating an interface to interact with Yelp! A few notes:

{:.compact}
* You will be using the API Tutor proxy server so that you don't have to deal with authentication.
* You will allow your user to ask the API questions (via a web form), and then you will display the resulting data to the user as an HTML representation of the data.

## Yelp Endpoint Documentation & Examples

{:.compact}
* <a href="https://docs.developer.yelp.com/reference/v3_business_search" target="_blank" target="_blank">Documentation</a>
* Actual Endpoint: **https://api.yelp.com/v3/businesses/search**<br>(won't work unless you get an API key from Yelp and pass it as an HTTP header)
* Proxy Server (with simplified data):
    * Endpoint: **https://www.apitutor.org/yelp/simple/v3/businesses/search** (needs query parameters)
    * Example:  <a href="https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,+NC&limit=5&term=pizza" target="_blank">https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,+NC&limit=5&term=pizza</a>
    {:.compact}

## Your Task
You will allow your user to input both a search `term` and a `location` (just like Spotify).

* Sample Query: <a href="https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,%20NC&term=pizza&limit=15" target="_blank">https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,%20NC&term=pizza&limit=15</a>

You will then display the data (photo, name, address, rating, price) as an HTML representation (using template literals).

## Demo

<img class="frame" src="/spring2024/assets/images/projects/project02/yelp.gif" />

## What to Submit
* See [Project 2 instructions](.)