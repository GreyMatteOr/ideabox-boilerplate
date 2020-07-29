# Idea-organizer
> A [Front-End Project](https://greymatteor.github.io/ideabox-boilerplate/) by [Bret Merritt](https://github.com/bretM9), [Dan Allen](https://github.com/DanielAllen542) and [Matthew Lane](https://github.com/GreyMatteOr)
---
## Contents
1. [Overview and Goals](#overview-and-goals)
1. [Technologies](#technologies)
1. [Features](#features)
1. [Challenges](#challenges)
1. [Wins](#wins)
---

## Overview
We are Module One students at Turing School of Software and Design. Throughout this project, we were focusing on learning three core front-end languages -- HTML, CSS, and JavaScript -- as well as how to use them to implement responsive design strategies and semi-permanent data-storage in a clean, dry way.

The website itself lets users create and organize different ideas they might have. Each of these ideas are stored locally on the user's machine, which allows them to persist between sessions. The ideas are displayed on a constantly resizing grid, that displays appropriately on a variety of screen-sizes.

### Goals

Our goals, listed below in an abbreviated form, are taken directly from the Turing project write-up:

``` Markdown
- Build responsive client-side application
- Implement client-side data persistence using localStorage
- Use a separate data model and DOM model
- Utilize data-* attributes
- Effectively use arrays
- Craft code with clean style
  - small functions (less than ~10 lines)
  - Don't Repeat Yourself (DRY)
  - Single Responsibility Principle (SRP)
```

Some personal goals that we also wanted to include:

- Implement as much of the project as possible
- Use good git-based workflow
- Go to at least Iteration 4 (if possible!)

---

 ## Technologies

  - HTML
  - CSS
  - JavaScript
  - JSON-based local storage
  - Git


 > [Back to the top](#idea-organizer)
---

## Features
+ [Mobile View](#mobile-view)
+ [Desktop View](#desktop-view)
+ [Create an Idea](#create-an-idea)
+ [Favorite an Idea](#favorite-an-idea)
+ [Delete an Idea](#delete-an-idea)
+ [Display only Favorited Ideas](#display-only-favorited-ideas)
+ [Search Ideas](#search-ideas)

> [Back to the top](#idea-organizer)
---
## Mobile View

For our websites base responsiveness, we wanted to cater to the 2 primary screen-sizes: desktop and mobile.

We decided to design our mobile view first, and build off from there. We were given a comp (pictured below on the left) which we were to recreate (pictured right).


<img src="https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile.jpg" alt="comp mobile" width="400"/><img src="./assets/mobile-view.png" alt="attempt mobile" width="400"/>

Notice it is mostly vertically organized, and to conserve space, we implemented a drop-down menu. An overlay dims everything and renders everything unusable.

<img src="https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile-dropdown.jpg" alt="comp mobile with dropdown" width="400"/><img src="./assets/mobile-dropdown.png" alt="attempt mobile with dropdown" width="400"/>

Clicking the overlay also hides the menu and overlay.

> [Back to Features](#features)

## Desktop View

At around 900 pixels, the website snaps in to a desktop view. It has the menu laid out statically on the left, and then the idea creation form and displayed ideas stacked on the right.

<img src="https://frontend.turing.io/projects/module-1/assets/ideabox-group/desktop.jpg" alt="comp desktop" width="400"/><img src="./assets/desktop-view.png" alt="attempt desktop" width="400"/>

Around 1550 pixels, it also enlargens to be easily readable on larger screens.

> [Back to Features](#features)

## Create an Idea

On landing, the page will have no text in either entry field and the save button will be disabled.

<img src="./assets/create-idea1.png" alt="attempt desktop"/>

To create an idea, the user must have some entry in both the title and body input field. Once they both have text, the button to save the idea will become active.

<img src="./assets/create-idea2.png" alt="attempt desktop".>

Clicking the button will

  - Capture the user input
  - Convert that input into an idea with the title and body text
  - Save it to local memory
  - Display it in the idea grid
  - Clear the entry fields

The webpage will look something like this afterwards

<img src="./assets/create-idea3.png" alt="attempt desktop"/>

These ideas will persist through user sessions.

> [Back to Features](#features)

## Favorite an Idea
> [Back to Features](#features)

## Delete an Idea
> [Back to Features](#features)

## Display only Favorited Ideas
> [Back to Features](#features)

## Search Ideas
> [Back to Features](#features)

---
 ## Challenges  
> [Back to the top](#idea-organizer)
---
 ## Wins
> [Back to the top](#idea-organizer)
 ---
