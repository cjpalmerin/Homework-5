# READ ME

This application displays the current date and time inside of the jumbotron. From there you can see what time of day it is based on the coloring of the different rows in the application. Grey rows will show when that time of day has already passed, a red row will show you the current hour slot, and green rows will show the future. Users can input their own data into the rows and, through local storage, can see their inputs even after leaving or refreshing the page.

The first task I took on was the clock. Knowing from the demo I immediately tried figuring out how the time worked before realizing we had to use a library. I had existing code using the Date function but used Moment.js to work how to display the time in the jumbotron. From there I was able to figure out how to change the color of the rows based on the hour of the day by using if else statements. The if else statements keep track of whether or not the current time is past, present, or future in relation to the current time of day.

Next I stored every value from the text areas and the buttons into variables that would be used during onclick events to trigger the setItem and getItem functions related to local storage. These functions are what behind the persistance of the app.



# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
