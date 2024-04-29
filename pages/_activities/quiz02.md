---
layout: two-column
title: Quiz 2
draft: 0
due_date: 2024-04-29
---

<style>
    img.preview {
        max-width: 60%;
        min-width: 500px;
    }
</style>


<a href="/spring2024/course-files/quizzes/quiz02.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>

## 1. Required: DOM Manipulation (38 Points)
Open the `exercise01` folder and complete the three tasks described in the picture below: 

<img class="large" src="/spring2024/assets/images/quizzes/quiz02/dom-manipulation.gif" />


## 2. Optional: Functions & Loops (Replaces Question 7 & 8 if you do well)

{:.blockquote-no-margin}
> If you're worried about the paper portion of the exam and would like to show your JavaScript knowledge via code, try implementing the following task described below. Completing this task won't count against you, but will help your score if you accidentally messed up a a question in the paper-based exam.


Open the `exercise02-optional` folder and examine all of the files. Inside of `main.js`, there is a `fetchCourses` function (already built for you) that fetches all of the UNCA course offerings for Fall, 2024: (<a href="https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2024/fall/">here</a>). Note that by modifying the year or term in the URL string, you can also view course offerings from previous semesters. 

### Your job
1. Modify the *function body* of the `displayResults(courses)` function so that it outputs to the `#results` element only courses that offered within the **CSCI department.** You may use any kind of loop that you like.
2. Ensure that your HTML snippet displays the following information for each course (using a template literal like we're doing in `HW6`):
    * Title
    * Location
    * Days (i.e., which days does the course meet?)
3. Location and Days may be `null`. That's OK for this exercise (though in real life, you'd probably want to output a friendlier message).

<img class="large frame" src="/spring2024/assets/images/quizzes/quiz02/courses.png" />

**Hints**
* Loop through the `courses` array.
* If the current course's `Department` property is "CSCI", then insert an HTML representation of the course into the `<div class="results"></div>` container. 
* Partial credit will be given.
* A sample of the HTML representation of a course is shown below, and also in `exercise02-optional/template.html`:

```html
 <section class="course">
    <h3>NM 101.001: Digital Design Principles</h3>
    <ul>
        <li>Location: OWE 305</li>
        <li>Days: MW</li>
    </ul>
</section>
```

## What to Submit
**Please read carefully:** Doublecheck your work to make sure you've completed the first task (the second task is optional). Then, update your homepage by adding a link to `quiz02/exercise01` (required) and a link to `quiz02/exercise02-optional` (optional).

After committing and syncing your changes to GitHub, paste a link to your **homepage** on GitHub pages under the Quiz 2 submission section. If your GitHub is not working for whatever reason, just zip your **COMPLETED** `quiz02` folder and upload it to the Moodle.