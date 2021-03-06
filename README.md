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


<img src="https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile.jpg" alt="comp mobile" width="400"/><img src="https://user-images.githubusercontent.com/65369751/88851388-8df7f980-d1a1-11ea-8aab-f4c8d935f844.png" alt="attempt mobile" width="400"/>

Notice it is mostly vertically organized, and to conserve space, we implemented a drop-down menu. An overlay dims everything and renders everything unusable.

<img src="https://frontend.turing.io/projects/module-1/assets/ideabox-group/mobile-dropdown.jpg" alt="comp mobile with dropdown" width="400"/><img src="https://user-images.githubusercontent.com/65369751/88866891-d07cfe80-d1c0-11ea-80a4-617e8d43dc2b.png" alt="attempt mobile with dropdown" width="400"/>

Clicking the overlay also hides the menu and overlay.

> [Back to Features](#features)

## Desktop View

At around 900 pixels, the website snaps in to a desktop view. It has the menu laid out statically on the left, and then the idea creation form and displayed ideas stacked on the right.

<img src="https://frontend.turing.io/projects/module-1/assets/ideabox-group/desktop.jpg" alt="comp desktop" width="400"/><img src="https://user-images.githubusercontent.com/65369751/88855907-7112f480-d1a8-11ea-939e-53903c3cc9c3.png" alt="attempt desktop" width="400"/>

Around 1550 pixels, it also enlargens to be easily readable on larger screens.

> [Back to Features](#features)

## Create an Idea

On landing, the page will have no text in either entry field and the save button will be disabled.

<img src="https://user-images.githubusercontent.com/65369751/88851311-73258500-d1a1-11ea-9d97-f38d348b55ca.png" alt="create idea1" width="400"/>

To create an idea, the user must have some entry in both the title and body input field. Once they both have text, the button to save the idea will become active.

<img src="https://user-images.githubusercontent.com/65369751/88851320-7751a280-d1a1-11ea-8bf3-7b5c2693bf09.png" alt="create idea2" width="400"/>

Clicking the button will

  - Capture the user input
  - Convert that input into an idea with the title and body text
  - Save it to local memory
  - Display it in the idea grid
  - Clear the entry fields

The webpage will look something like this afterwards

<img src="https://user-images.githubusercontent.com/65369751/88851347-80427400-d1a1-11ea-9495-6f4f88745115.png" alt="create idea3" width="400"/>

These ideas will persist through user sessions.

> [Back to Features](#features)

## Favorite an Idea
> [Back to Features](#features)

+ To favorite an idea, click the gray star in the top left corner of an idea card. The star will then turn red, indicating that the idea has been favorited. Favoriting an idea will make it easier to find (we’ll explain this feature in the [Display only Favorited Ideas](#display-only-favorited-ideas)). This change will carry over even if you reload the page.

<img src="https://user-images.githubusercontent.com/14350203/88855418-0cf42e80-d1b0-11ea-9ead-9a53036fe3ec.png" alt="star-ideas" width="400"/>

+ This change effect not only the displayed page, but also our data model that is being updated behind the scenes. This data model is what gets stored into `local storage`.

## Delete an Idea
> [Back to Features](#features)

+ To delete an idea, click the X in the top right corner of an idea card. This will permanently delete your idea. Deleting an idea even works when you’ve filtered by starred ideas or with a search query! This change will carry over even if you reload the page.

<img src="https://user-images.githubusercontent.com/14350203/88855571-547aba80-d1b0-11ea-8780-08ba9a25b48c.png" alt="star-ideas" width="400"/>

+ This change effect not only the displayed page, but also our data model that is being updated behind the scenes. This data model is what gets stored into `local storage`.

## Display only Favorited Ideas

+ Our display only favorited items section works, pretty smoothly. We created a function that allows us to store all of a users favorited items in one space. When the page re-loads the user isn’t confronted with the issue of all their favorited ideas being removed. It’s pretty easy for the user to hop back between the starred ideas and back to all of the ideas together. While inside of the starred idea section, if the user decides that they no longer want an idea inside, then they can un-favorite the idea and it will be removed the moment the button is clicked.

<img src="https://user-images.githubusercontent.com/63177811/88853082-6fe3c680-d1ac-11ea-91fa-24d3d05f16ed.png" alt="ideas" width="400"/><img src="https://user-images.githubusercontent.com/63177811/88853098-76723e00-d1ac-11ea-98b4-d39f2c3a0361.png" alt="miss-fav" width="400"/>
> [Back to Features](#features)

## Search Ideas
+ Our search ideas portion of our application allows the user to look up all of the saved ideas. To start, click the button, and it’ll remain active while the search is being performed. Only the text matching either the title or the body will pop up. All others will no longer show until the search button is turned back off, or if the character fields input matches whatever is in that specific idea card. Do be warned as of right now the search box is case-sensitive.

<img src="https://user-images.githubusercontent.com/63177811/88853129-81c56980-d1ac-11ea-9e44-8edaa6666144.png" alt="srch-body" width="400"/><img src="https://user-images.githubusercontent.com/63177811/88853115-7d994c00-d1ac-11ea-8e38-91b6fa8abc87.png" alt="Specific-title" width="400"/>
> [Back to Features](#features)

---
 ## Challenges  
 
 +  As relative novices both in working in a group as well as CSS, getting the initial comp was challenging. There was a bug getting our overlay to size properly that took about 2-3 hours to discover what was causing it. To a lesser extent, there were numerous other sizing issues that weren't immediately obvious. Several times, we experimented with flexbox and grid-template-areas, but each time, they became overly-complicated, so we reverted back to grid. We did this enough times that it was a noticeable time-sink. The struggle did eventually unearth gems of knowledge, so in a way we're all glad to happened. Though, those lessons would have been equally memorable with half the effort.
 
+  We had some git conflicts that took some time to sort out. 
We also learned not to copy and paste code directly from our slack messages into our editors. Downloading the plain text would have saved a couple of headaches.
 
+  When we shrink down the page, right before it completeley breaks into mobile view there is a little 'Spot' where the screen comes into contact with our Idea boxes on the right side. We were unable to get the problem solved.
> [Back to the top](#idea-organizer)
---
 ## Wins
 
  + At first, iteration 0 and 1 took a lot of effort and eye-balling to put together. This took more time than we had anticipated We knew we were going to be working under time-constraints and a lot of material we had yet to cover was up ahead. Still, each time we got together, we blasted through a whole iteration in usually 3 hours or less. Even with all of the outside challenges, we came together and got to where we wanted to be with a decent chunk of leftover time. Even some never-before-seen git errors couldn't slow us down for very long!

  + We all are much more comfortable with gridding and formatting a page in CSS. We also have a better understanding of managing the data model along-side of the DOM.

  + We (especially I (danny)) started to really be able to grasp the code towards the end. I feel like this project really allowed me to better connect my html and css, but more importanly which was my end goal in this, I was able to little by little get more comfortable with my javascript. 
  
> [Back to the top](#idea-organizer)
 ---
