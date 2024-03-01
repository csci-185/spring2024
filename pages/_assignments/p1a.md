---
layout: assignment-two-column
title: "First Deliverable"
abbreviation: Project 1a
type: project
due_date: 2024-03-08
ordering: 5
points: 30
draft: 0
---

<style>
    img.small-float {
        max-width: 200px;
        margin: 0;
    }

    img.large {
        min-width: 80%;
        margin: 0;
    }
    
    img.small {
        max-width: 300px;
        margin: 0;
    }

    img.medium {
        max-width: 60%;
        margin: 0;
    }

    .frame {
        border: solid 1px black;
    }
</style>

## 1. Project Overview
For your first project in this class, you are going to create a 1-page website. 

### What kind of website can I build?
You have the freedom to make whatever you want. Some potential website ideas could include:

* Making a portfolio of your work (for job searches, etc.).
* Making a website on a topic of interest (e.g., music, art, sports, cars, current events, fan page).
* Replicating an existing website that you admire (like what we did with the Taco Temple website).
* Redesigning the homepage of an existing website (to make it more organized, engaging, etc.).
{:.compact}

### How will I be assessed?

#### 1. Code Requirements
Your website must...

1. Be **responsive**: Use Flex, Grid and/or Media Queries to implement two layouts:
    * A desktop layout
    * A mobile layout
    {:.compact}
1. Be **accessible**, meaning:
    * You must use semantic tags (header, main, footer, article, section, etc.) to organize your content.
    * It needs to pass the Wave accessibility checker
    {:.compact}
1. Use at least 1 **Google Font**.
1. Use at least 1 **advanced CSS technique** from [Topic 8](../lectures/topic08), such as:
    * Image filters / fixed background
    * Transitions + pseudo-classes
    * Keyframes
    {:.compact}


#### 2. Design Requirements
Your website must...
1. Apply the **[principles of composition](https://docs.google.com/presentation/d/1JpCMCvj4hJtJ_gsVXRd-5IQDOzFz4-fUYp_3fJg6VsM/edit?usp=sharing)** effectively (using proximity, alignment, contrast, asymmetry, color, and repetition to build hierarchy and enhance usability). This includes:
    * Giving sufficient margin and padding to your sections to group related content
    * Making sure that the site is organized and has hierarchy -- that the most important things are emphasized, and the details are de-emphasized.
    {:.compact}
2. Select **appropriate colors and fonts**. This includes:
    * Selecting an appropriate font for the header and body copy.
    * Ensuring that there are no more than 12-15 words per line (makes things easier to read).
    * Ensuring that the colors you selected complement one another and don't make your website difficult to read. ***Hint:*** Use a color picker website and don't use system colors
    {:.compact}  

#### 3. Citations and Acknowledgements  
You must cite your sources:

* To cite your sources, **add a comment in your code** that includes the link to the website you got it from. If you used ChatGPT, please elaborate on the prompt that you used. 

Not including where various coding ideas came from is a serious academic integrity violation. It is important to give credit to the people (or bots) that helped us to create our website.



## 2. Your First Deliverable (due Friday, March 8)
For deliverabe 1, you will need to submit the following:
1. A wireframe
1. A desktop and mobile layout, implemented using HTML & CSS
1. The answers to the summary / reflective questions
1. A link to your work on GitHub

### 1. [5pts] Wireframe
Draw a **wireframe** of your desktop layout and mobile layout on paper or using a wireframing tool:

An example wireframe is shown below (Source: taken from this website: <a href="https://www.flux-academy.com/blog/20-wireframe-examples-for-web-design" target="">https://www.flux-academy.com/blog/20-wireframe-examples-for-web-design</a>):

<img src="https://assets-global.website-files.com/5f4bb8e34bc82700bda2f385/606de887c67c16e1a860bf31_5GXNnjGoajCOnoleOrYm8CfYNnTr5vVDUiCh0xlb2kn6ryQuFpzS6ZWDexQ586QgxG07ua9CSVHce46MwclXOwq4nKh89-OoxQD5ZboBCZI_0KFdD1m58SLrN_dBJrlWPEWwsHTj.png" class="medium">

### 2. [15pts] HTML & CSS Files
#### Set Up
Please follow the folder naming conventions exactly as they are described here:
1. Create a new folder called `projects` inside of your `csci185` folder.
1. Inside of projects, create a folder called `project01a`.
1. Open your entire `csci185` folder in VS Code.
1. Within VS Code, create two files inside of your `projects/project01a` folder: 
    * `index.html`
    * `styles.css`
1. Create an HTML skeleton in your `index.html` page (feel free to use VS Code's `html:5` template generator).

#### HTML Tasks
Implement your HTML page:
1. Start by adding all of your semantic tags (e.g., `header`, `nav`, `main`, `section`, `article`). Note that everyone's structure will be different, and you may not need to use all of the semantic tags -- just some of them. If you don't remember how to do this, refer to the <a href="https://htmlandcssguidebook.com/html/html5-semantic/" target="_blank"> reading from Homework 2</a>.
2. When you're done adding the semantic tags, add additional HTML to fill in the actual content (e.g., images, headings and subheadings, links, videos, etc.). Recall that this was the process you used in Quiz 1 (see the image below), except that your structure will be different, depending on your particular page layout.<br><img class="medium" src="/spring2024/assets/images/quizzes/quiz01/tree.png">.

When you're done with this part, there should only be content (no styling yet).

#### CSS Tasks
> **Pro Tip:** Do not underestimate the time it takes to do layouts. Please give yourself enough time to deal with the challenges of working with CSS Grid and the box model.

Link your `index.html` file to your `styles.css` stylesheet using a `link` tag (like we've been practicing all semester). Then, add the following style rules to your `styles.css` page:

1. Add borders (or background colors) to all of the semantic tags of your webpage. This will allow you to visually inspect the various regions of your website. If you're confused about what I mean by this, take a look at the screenshots below, where Sarah has decided to replicate the Spotify website.
2. Use CSS Grid to create your page layout.
    * Think about the overall grid structure (columns and rows), and then how to assign child elements to various grid regions.
    * Feel free to refer to your HW4 solutions to get a sense of how you might do this.
3. Add additional borders, styling, margins, padding, etc. to any additional elements (see screenshot below for an example) to further refine your layout.
4. Add a media query to the end of your CSS file that adjusts your grid to create a mobile-friendly version of your web page.

In the sample layouts below, note that only style rules for the CSS Grid (overarching layout), borders, and padding have been applied. All other styling will happen in your second deliverable.

**Sample Desktop Layout**

<img src="/spring2024/assets/images/projects/project01/wireframe-desktop.gif" class="frame large">

**Sample Mobile Layout**

<img src="/spring2024/assets/images/projects/project01/wireframe-mobile.gif" class="frame small">


### 3. [5pts] Short answer questions
When you're done with parts 1 & 2, answer the following 3 questions in the submission textbox on Moodle:

1. What are you making (2-3 sentences)?
    * If you are drawing inspiration from an existing website, include the link to the website and explain specifically what you are hoping to emulate from the site.
1. What was the biggest challenge that you faced when submitting this deliverable?
1. What are you most proud of?

### 4. [5pts] Link to Homepage
When you're done with everything:
1. Update your homepage (that you made during Tutorial 3) by adding a new section for Projects inside of your `index.html` file
1. Within the "Projects" section, add the following links:
    1. One to the `index.html` page that you just made
    1. One to the desktop wireframe that you made (which should also be saved in the `project01a` folder)
    1. One to the mobile wireframe that you made (if both the desktop and mobile wireframes are in the same file, then you'll just include 1 link)
1. Commit and sync your changes to GitHub
1. Paste a link to your GitHub homepage and your answers to the three short-answer questions in the Moodle submission



## 3. Your Second Deliverable: Due Wednesday, March 27

See the [deliverable 2](p1b) page.
