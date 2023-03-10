// Variables
const currentDay = $("#currentDay");
const saveBtn = document.querySelectorAll(".saveBtn");
let calendarArray = JSON.parse(localStorage.getItem("jq-calendar"));
console.log(calendarArray);

// $(function () {)
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  currentHour = dayjs().hour();
  for (let i = 9; i < 18; i++) {
    if (i < currentHour) {
      $("#hour-" + i).addClass("past");
    } else if (i > currentHour) {
      $("#hour-" + i).addClass("future");
    } else {
      $("#hour-" + i).addClass("present");
    }
  }
});

function displayTime() {
  let rightNow = dayjs().format("MMM DD, YYYY");
  currentDay.text(rightNow);
}

displayTime();

function postToLocalStorage(e) {
  console.log(e.currentTarget.parentElement.id);
  console.log(e);
  const parentEl = document.querySelector(
    "#" + e.currentTarget.parentElement.id
    );
  const textArea = parentEl.querySelector("textarea");
  console.log(parentEl);
  console.log(textArea);
  const calendarEntry = {
    hourOfDay: parentEl.id,
    textOfId: textArea.value,
  };
    if (calendarArray) {
        calendarArray.push(calendarEntry);
        localStorage.setItem("jq-calendar", JSON.stringify(calendarArray));
    }else{
        calendarArray = [];
        calendarArray.push(calendarEntry);
        console.log(calendarEntry);
        localStorage.setItem("jq-calendar", JSON.stringify(calendarArray));
      }
}

if(calendarArray !== null){
  calendarArray.forEach((item) => {
    const wrapper = document.querySelector("#" + item.hourOfDay);
    console.log(wrapper);
    const textArea = wrapper.querySelector("textarea");
    console.log(textArea); 
    textArea.value = item.textOfId
  });
}
      
saveBtn.forEach((button) => {
  button.addEventListener("click", postToLocalStorage);
});
console.log(saveBtn);
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
// current hour in 24-hour time????
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.???
