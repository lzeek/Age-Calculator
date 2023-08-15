let dayInputValue = document.getElementById("day");
let monthInputValue = document.getElementById("month");
let yearInputValue = document.getElementById("year");
let dateInput = document.querySelectorAll("[require]");
let getAgeBtn = document.getElementById("new-age");
let showYear = document.getElementById("years--show");
let showMonth = document.getElementById("month--show");
let showDay = document.getElementById("day--show");
let dayError = document.getElementById("day--error");
let monthError = document.getElementById("month--error");
let yearError = document.getElementById("year--error");
let dateError = document.querySelectorAll(".error--text");

//make sure inputs are numbers
const dayInputIntValue = Number(dayInputValue.value);
const monthInputIntValue = Number(monthInputValue.value);
const yearInputIntValue = Number(yearInputValue.value);

// get present date and store variables
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

getAgeBtn.addEventListener("click", () => {
  if (
    dayInputValue.value === "" &&
    monthInputValue.value === "" &&
    yearInputValue.value === ""
  ) {
    console.log("Hey baby");
    dateError.forEach((element) => {
      element.classList.add("error--text--show");
    });
  }
});
