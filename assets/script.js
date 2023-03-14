// Variables
const currentDay = $("#currentDay");
const saveBtn = document.querySelectorAll(".saveBtn");
let calendarArray = JSON.parse(localStorage.getItem("jq-calendar"));

$(function () {
  // Changes the color of the hour section of the calendar depending on the day.
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
  // Display the month, day and year at the top of the page.
  function displayTime() {
    let rightNow = dayjs().format("MMM DD, YYYY");
    currentDay.text(rightNow);
  }
  displayTime();

  // Posts what the user inputs into a specific time block and saves it to localStorage.
  function postToLocalStorage(e) {
    const parentEl = document.querySelector(
      "#" + e.currentTarget.parentElement.id
    );
    const textArea = parentEl.querySelector("textarea");
    const calendarEntry = {
      hourOfDay: parentEl.id,
      textOfId: textArea.value,
    };
    if (calendarArray) {
      calendarArray.push(calendarEntry);
      localStorage.setItem("jq-calendar", JSON.stringify(calendarArray));
    } else {
      calendarArray = [];
      calendarArray.push(calendarEntry);
      localStorage.setItem("jq-calendar", JSON.stringify(calendarArray));
    }
  }

  // This conditonal only works if calenderArray is not null, it will then take the value of the key that matches the hour ID and post it to the correct hour textarea.
  if (calendarArray !== null) {
    calendarArray.forEach((item) => {
      const wrapper = document.querySelector("#" + item.hourOfDay);
      const textArea = wrapper.querySelector("textarea");
      textArea.value = item.textOfId;
    });
  }

  // Event listener to post to localStorage and makes each button function for its hour ID only.
  saveBtn.forEach((button) => {
    button.addEventListener("click", postToLocalStorage);
  });
});
