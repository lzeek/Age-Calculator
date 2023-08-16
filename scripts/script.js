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

//make sure inputs are numbers
const dayInputIntValue = Number(dayInput.value);
const monthInputIntValue = Number(monthInput.value);
const yearInputIntValue = Number(yearInput.value);

// get present date and store variables
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

dayInput.addEventListener("input", (e) => {
  let dayInputValue = e.target.value;
  console.log(dayInputValue);
});

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
  }
});
