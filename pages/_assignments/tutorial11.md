---
layout: assignment-two-column
title: Practice Quiz
type: tutorial
abbreviation: Tutorial 11
draft: 0
points: 6
num: 11
start_date: 2024-04-19
due_date: 2024-04-22
---

## Introduction
The intent of this tutorial is to give you a sense of what Quiz 2 will cover and the types of questions that will be on it. The quiz will consist of two parts: 

1. **Code reading and interpretation.** This part will be completed in class, on paper. A sample of the questions you will be asked can be found <a href="https://docs.google.com/presentation/d/1-qgi3wDjfDs8S3vqIZurNZRI4aKuZWeaK35s9k8L4SM/edit?usp=sharing" target="_blank">here</a>.
2. **Code writing.** This part will involve writing programs to accomplish various tasks, which we'll be practicing today.

### How to Study
To study for this quiz, please see the [Quiz 2 Study Materials](quiz-02).

Please download the starter files and save them in your `csci185/tutorials` folder:

<a href="/spring2024/course-files/tutorials/tutorial11.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a> 

## Code Writing Practice Questions

### 1. DOM Manipulation
Open the `exercise01` folder and add event handlers to all of the buttons. When a button is clicked, the color of the box below it should change to the color of the box (see demo below).

<img class="small frame" src="/spring2024/assets/images/tutorials/tutorial11/exercise01.gif" />

### 2. Functions
Open the `exercise02` folder and create a function called `drawShape` that draws two concentric circles of different colors (as shown below). The function should have the following parameters defined (in order):
1. `x` -- the x-coordinate of the center of the circle(s).
2. `y` -- the y-coordinate of the center of the circle(s).
3. `size` -- the diameter of the larger circle. 
4. `color1` -- the color of the larger circle.
5. `color2` -- the color of the smaller circle, which is 1/2 the diameter of the larger circle.

When I invoke your function as follows (within the `setup()` function)...

```js
drawShape(100, 100, 150, '#db5461', '#102e4a');
drawShape(200, 200, 75, '#102e4a', '#8093f1');
drawShape(100, 325, 100, '#8093f1', '#7fb285');
drawShape(250, 375, 125, '#7fb285', '#0bc9cd');
drawShape(450, 200, 250, '#0bc9cd', '#db5461');
```

...the image pictured below should be drawn to the screen:

<img class="small frame" src="/spring2024/assets/images/tutorials/tutorial11/exercise02.png" />

### 3. Loops
Open the `exercise03` folder. Inside of `main.js`, write a program, using any kind of loop you want, to output all of the restaurant names to the `<main id="output"></main>` tag of the `index.html` file. If you are successful, your screen should look like this:

<img class="small" src="/spring2024/assets/images/tutorials/tutorial11/exercise03.png" />

### 4. Loops + Conditionals

Open the `exercise04` folder. Inside of `main.js`, write a program, using any kind of loop you want, to output only the names of **pizza restaurants** to the `<main id="output"></main>` tag of the `index.html` file. You will have to filter your list by the `category` property of each restaurant. If you are successful, your screen should look like this:

<img class="small" src="/spring2024/assets/images/tutorials/tutorial11/exercise04.png" />

## What to Submit
Please commit and push your changes. Then, paste a link to your code repository (e.g., [https://github.com/vanwars/csci185-coursework](https://github.com/vanwars/csci185-coursework)) to the course Moodle under **Tutorial 11**.
