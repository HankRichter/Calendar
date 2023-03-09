// Variables
const currentDay = $("#currentDay");
const textArea = $("textarea");
const idNumber9 = $("#hour-9");
let idNumber10 = $("#hour-10");
let idNumber11 = $("#hour-11");
let idNumber12 = $("#hour-12");
let idNumber13 = $("#hour-13");
let idNumber14 = $("#hour-14");
let idNumber15 = $("#hour-15");
let idNumber16 = $("#hour-16");
let idNumber17 = $("#hour-17");
idNumber9a = 9;
// idNumber10 = 10;
// idNumber11 = 11;
// idNumber12 = 12;
// idNumber13 = 13;
// idNumber14 = 14;
// idNumber15 = 15;
// idNumber16 = 16;
// idNumber17 = 17;

// $(function () {)
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  if (idNumber9a == dayjs().hour()) {
    idNumber9.addClass("present");
  } else if (idNumber9a > dayjs().hour()) {
    idNumber9.addClass("future");
  } else {
    idNumber9.addClass("past");
  }
});

// https://api.jquery.com/addclass/

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.✅

function displayTime() {
  let rightNow = dayjs().format("MMM DD, YYYY");
  currentDay.text(rightNow);
}

displayTime();
