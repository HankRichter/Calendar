// Variables
const currentDay = $("#currentDay");
const saveBtn = document.querySelectorAll(".saveBtn");
let calendarArray = JSON.parse(localStorage.getItem("jq-calendar"));

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

  function displayTime() {
    let rightNow = dayjs().format("MMM DD, YYYY");
    currentDay.text(rightNow);
  }

  displayTime();

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

  if (calendarArray !== null) {
    calendarArray.forEach((item) => {
      const wrapper = document.querySelector("#" + item.hourOfDay);
      const textArea = wrapper.querySelector("textarea");
      textArea.value = item.textOfId;
    });
  }
  saveBtn.forEach((button) => {
    button.addEventListener("click", postToLocalStorage);
  });
});
