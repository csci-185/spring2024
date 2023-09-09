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
The goal of this week's homework is to give you practice with CSS Grid and Flexbox. To do this, you will complete 7 exercises, which you will have time to work on during Tutorial 5 this week. 

Homework 4 can be completed individually or in pairs. If you decide to work in pairs, you can discuss solutions and share code with your partner. That said, both people should still complete all of the exercises, commit their own files to GitHub, and and submit to the Moodle separately. If you collaborated with someone, you will just make a note of who you worked with in the comments section.

### References
To complete this homework, you will likely need to consult some CSS references (or Google for information). Below, I have provided a link to the mes relevant reference:

#### Media Queries

{:.compact}
* <a href="../css-reference/media-queries/">Media Queries</a>    

#### CSS Grid

{:.compact}
* <a href="../css-reference/css-grid/">CSS Grid</a>  
* <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a> <br>Please try to complete at least the first 10 levels 
* <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS Tricks: A Complete Guide to Grid</a>
* <a href="https://www.freecodecamp.org/news/learn-css-grid-by-building-5-layouts/" target="_blank">Learn CSS Grid by Building 5 Layouts in 17 minutes</a>

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

<img class="frame medium" src="/fall2023/assets/images/homework/hw04/exercise01.png" />


### 2. Center-align elements within a container

Open `02-flex` and create the layout shown below by editing the CSS file. You should not need to edit the HTML.

<img src="/fall2023/assets/images/homework/hw04/exercise02.gif" />

Please ensure that the following criteria are met:

{:.compact}
* The height of each `section` should be the same as the height of the browser window.
* The content inside of each `section` tag should be centered horizontally and vertically.
* Each `section` should have a different background color.
* The content in each `section` should be stacked vertically

### 3. Create a Navigation Bar
Open `03-navbar`, and try to make the following layout using flex. The navigation bar should also be anchored to the top so when you scroll, the nav bar stays fixed.

<img class="frame large" src="/fall2023/assets/images/homework/hw04/exercise03.png" />

Hints:

{:.compact}
* Both the `nav` and `ul` elements will need to be put into flex mode.
* Use the Chrome inspector to adjust the alignment properties.
* To turn the bullets off, set the `list-style-type` property to `none`.
* To create a fixed menu, see <a href="https://codepen.io/vanwars/pen/LYBdyzJ?editors=0100" target="_blank">this code sample</a>: 
