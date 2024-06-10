import dayjs from 'dayjs'
const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Current date for formatting the input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Load the current date
selectedDate.value = inputToday

// Defines the minimum date that can be selected
selectedDate.min = inputToday

form.onsubmit = (event) => {
  // Prevent the submit event from reloading the page
  event.preventDefault();

}