const dayInputValue = document.getElementById("day");
const monthInputValue = document.getElementById("month");
const yearInputValue = document.getElementById("year");
const dateInput = inputs.querrySelectorAll("[require]");
const getAgeBtn = document.getElementById("new-age");
const showYear = document.getElementById("years--show");
const showMonth = document.getElementById("month--show");
const showDay = document.getElementById("day--show");
const dayError = document.getElementById("day--error");
const monthError = document.getElementById("month--error");
const yearError = document.getElementById("year--error");
const dateError = document.querySelector(".error--text");

//make sure inputs are numbers
const dayInputIntValue = Number(dayInputValue.value);
const monthInputIntValue = Number(monthInputValue.value);
const yearInputIntValue = Number(yearInputValue.value);

// get present date and store variables
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

const form = document.querySelector("form");
form.addEventListener("submit", () => {
  console.log("submit something");
});

//Here what happens when button is clicked
// getAgeBtn.addEventListener("click", function() => {
//   console.log("clicked");
//   let recquiredField = "This field is recquired";

//   console.log(`Whats in day: ${dayInputValue}`);
//   //validation
//   if (dayInputValue === "" && monthInputValue === "" && yearInputValue) {
//     dayError.textContent = dayInputValue.classList.add("error-text");
//   }
// });
