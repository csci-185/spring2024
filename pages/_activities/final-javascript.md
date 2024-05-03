---
layout: two-column
title: Final Exam (JavaScript)
draft: 0
points: 20
due_date: 2024-05-03
---

<style>
    img.preview {
        max-width: 60%;
        min-width: 500px;
    }
</style>

After completing the paper-based exam, please complete **two of the four exercises** below (pick any two that you want). If you complete any additional exercises, you can earn up to 15 points extra credit.

<a href="/spring2024/course-files/final-exam/javascript-final-exam.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>

## 1. DOM Manipulation
Open the `exercise01` folder and add click event handlers to all of the div tags. When a div element is clicked, its background should change color (pick any color you like). When you’re done, your page should look like the demo shown below:


<img class="medium frame" src="/spring2024/assets/images/final-exam/exercise01.gif" />

## 2. Dynamically Adding Images
Open the `exercise02` folder and add event handlers to the "Add Cat" and "Add Dog" buttons so that animal images get appended to the **`<section id="animals"></section>`** element, as shown in the animation below:

<img class="medium frame" src="/spring2024/assets/images/final-exam/animal-additions.gif" />

### Hints
Within each of your function definitions...
1. Create an HTML img using the template literal (backticks):<br> **``let snippet = `<img src="dog.jpg" />`; ``**
2. Use the section's built-in `insertAdjacentHTML()` function to append the snippet to the appropriate container (like we did during the last two weeks of class).

## 3. Concentric Squares
Open the `exercise03` folder and preview `index.html` in the browser. Note that it shows the following image...

<img class="medium frame" src="/spring2024/assets/images/final-exam/squares-before.png" />

Your job is to modify the `drawSquares(...)` **function definition** so that it honors the parameters. If you did it correctly, your picture should look like the image below:

<img class="medium frame" src="/spring2024/assets/images/final-exam/squares-after.png" />


## 4. Functions & Loops
Open the `exercise04` folder and examine all of the files. Inside of `main.js`, there is a `fetchCourses` function (already built for you) that fetches all of the UNCA course offerings for Fall, 2024: (<a href="https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2024/fall/">here</a>). Note that by modifying the year or term in the URL string, you can also view course offerings from previous semesters. 

### Your job
1. Modify the *function body* of the `displayResults(courses)` function so that it outputs to the `#results` element only courses that offered within the **CSCI department.** You may use any kind of loop that you like.
2. Ensure that your HTML snippet displays the following information for each course (using a template literal like we did in `HW7`):
    * Title
    * Location
    * Days (i.e., which days does the course meet?)
3. Location and Days may be `null`. That's OK for this exercise (though in real life, you'd probably want to output a friendlier message).

<img class="large frame" src="/spring2024/assets/images/final-exam/courses.png" />

**Hints**
* Loop through the `courses` array.
* If the current course's `Department` property is "CSCI", then insert an HTML representation of the course into the `<div class="results"></div>` container. 
* Partial credit will be given.
* We went over this in Lectures 22-24 (and there are lecture videos that you can even follow along with).
* A sample of the HTML representation of a course is shown below, and also in `exercise03/template.html`:

```html
 <section class="course">
    <h3>NM 101.001: Digital Design Principles</h3>
    <ul>
        <li>Instructor: Cosette, Ashe</li>
        <li>Location: OWE 305</li>
        <li>Days: MW</li>
    </ul>
</section>
```

## What to Submit
**Please read carefully:** Doublecheck your work to make sure you've completed at least two of the 4 tasks. Then, update your homepage by adding a linking to the exercises you completed. After committing and syncing your changes to GitHub, paste a link to your **homepage** on GitHub pages into the Moddle.

* If your GitHub is not working for whatever reason, just zip your **COMPLETED** `javascript-final-exam` folder and upload it to the Moodle.