let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let dateInput = document.querySelectorAll("[require]");
let getAgeBtn = document.getElementById("new-age");
let showYear = document.getElementById("years--show");
let showMonth = document.getElementById("month--show");
let showDay = document.getElementById("day--show");
let dayError = document.getElementById("day--error");
let monthError = document.getElementById("month--error");
let yearError = document.getElementById("year--error");
let dateError = document.querySelectorAll(".error--text");

//to store input values if valid
let dayInputValue;
let monthInputValue;
let yearInputValue;
// valid date or not
let isValidDay = false;
let isValidMonth = false;
let isValidYear = false;

// get present date and store variables
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

//DAY IN PUT
dayInput.addEventListener("input", (e) => {
  if (e.target.value < 0 || e.target.value >= 31) {
    dayError.textContent = "Must be a valid day";
    dayError.classList.add("error--text--show");
  } else {
    dayError.classList.remove("error--text--show");
    dayInputValue = Number(e.target.value);
    isValidDay = true;
  }
});

//MONTH INPUT
monthInput.addEventListener("input", (e) => {
  if (e.target.value < 0 || e.target.value >= 12) {
    monthError.textContent = "Must be a valid month";
    monthError.classList.add("error--text--show");
  } else {
    monthError.classList.remove("error--text--show");
    monthInputValue = Number(e.target.value);
    isValidMonth = true;
  }
});

//YEAR INPUT
yearInput.addEventListener("input", (e) => {
  if (e.target.value > currentYear) {
    yearError.textContent = "Must be in the past";
    yearError.classList.add("error--text--show");
  } else if (e.target.value < 0) {
    yearError.textContent = "Year can't be negative";
    yearError.classList.add("error--text--show");
  } else {
    yearError.classList.remove("error--text--show");
    yearInputValue = Number(e.target.value);
    isValidYear = true;
  }
});

//LISTEN TO BUTTON
getAgeBtn.addEventListener("click", () => {
  if (
    dayInput.value === "" &&
    monthInput.value === "" &&
    yearInput.value === ""
  ) {
    dateError.forEach((element) => {
      element.classList.add("error--text--show");
      dayError.textContent = "This field is recquired";
      monthError.textContent = "This field is recquired";
      yearError.textContent = "This field is recquired";
    });
  } else if (isValidDay && isValidMonth && isValidYear) {
    showDay.textContent = `${
      currentDay > dayInputValue
        ? currentDay - dayInputValue
        : dayInputValue - currentDay
    }`;
    showMonth.textContent = `${
      currentMonth > dayInputValue
        ? currentMonth - monthInputValue
        : monthInputValue - currentMonth
    }`;
    showYear.textContent = `${currentYear - yearInputValue}`;
  }
});
