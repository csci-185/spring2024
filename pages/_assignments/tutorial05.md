---
layout: assignment-two-column
title: CSS Flexbox Practice
type: tutorial
abbreviation: Tutorial 5
draft: 1
points: 6
num: 5
start_date: 2023-09-29
due_date: 2023-10-02
---

<style>
    img.xsmall {
        max-width: 250px;
        width: 60%;
    }
    img.large {
        max-width: 100%;
        width: 100%;
    }
</style>

## Overview
The goal of this week's homework is to give you practice with CSS Grid and Flexbox. To do this, you will complete 3 exercises, which you will have time to work on during Tutorial 5 this week. 

### References
To complete this homework, you will likely need to consult some CSS references (or Google for information). Below, I have provided a link to some of the references that I believe will be most helpful to you:

#### Media Queries

{:.compact}
* <a href="../css-reference/media-queries/">Media Queries</a>    

#### Flex

{:.compact}
* <a href="../css-reference/flexbox/">Flexbox</a>  
* <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a>.<br>Please try to complete at least the first 10 levels
* <a href="https://university.webflow.com/lesson/flexbox-vs-grid" target="_blank">When to use Flex versus CSS Grid?</a>      
* <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">CSS Tricks: A Complete Guide to Flexbox</a>
* <a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank">W3 Schools Flexbox Guide</a>    



## Your Tasks
<a href="/fall2023/course-files/homework/hw04.zip" class="nu-button">HW04 Starter Files <i class="fas fa-download"></i></a>

Download the `hw04.zip` file, unzip it and move the unzipped `hw04` folder into the `csci185/homework` folder.


### 1. Flexbox Froggy
Please complete **levels 1-13** of <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a> and take a screenshot of your completed levels (like the screenshot shown below, but with the first thirteen levels completed). When you're done, save your screenshot in the `hw04/01-flexbox-froggy` folder. 
* You can earn **2 points extra credit** if you complete all 24 levels.

<img class="frame medium" src="/fall2023/assets/images/tutorials/tutorial05/exercise01.png" />


### 2. Center-align elements within a container

Open `02-flex` and create the layout shown below by editing the CSS file. You should not need to edit the HTML.

<img src="/fall2023/assets/images/tutorials/tutorial05/exercise02.gif" />

Please ensure that the following criteria are met:

{:.compact}
* The height of each `section` should be the same as the height of the browser window.
* The content inside of each `section` tag should be centered horizontally and vertically.
* Each `section` should have a different background color.
* The content in each `section` should be stacked vertically

### 3. Create a Navigation Bar
Open `03-navbar`, and try to make the following layout using flex. The navigation bar should also be anchored to the top so when you scroll, the nav bar stays fixed.

<img class="frame large" src="/fall2023/assets/images/tutorials/tutorial05/exercise03.png" />

Hints:

{:.compact}
* Both the `nav` and `ul` elements will need to be put into flex mode.
* Use the Chrome inspector to adjust the alignment properties.
* To turn the bullets off, set the `list-style-type` property to `none`.
* To create a fixed menu, see <a href="https://codepen.io/vanwars/pen/LYBdyzJ?editors=0100" target="_blank">this code sample</a>: 


## What to turn in
Please read carefully: To turn in Tutorial 5, please link to all 3 tasks on your homepage. See Sarah's homepage to see an example of what your homepage should look like:
* <a href="https://vanwars.github.io/csci185-coursework/" target="_blank">https://vanwars.github.io/csci185-coursework/</a>

When you're done, paste the following links into the Moodle under the Tutorial 5 submission section:

1. A link to your **homepage** on GitHub pages, which should link to all 3 parts of this tutorial.
2. A link to your GitHub **code repository** (where your code files are stored).