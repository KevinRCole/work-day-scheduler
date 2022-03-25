// save reference to important DOM elements
var dateDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

// handle displaying the time
// function displayDate() {
//   var dateToday = moment().format('LL');
//   dateDisplayEl.text(dateToday);
// }

// displayDate();

var dateDisplayEL = $('#date-display');

function displayDate() {
  var dateToday = moment().format('MMM DD, YYYY');
  dateDisplayEl.text(dateToday);
}

displayDate();
console.log(dateDisplayEL);

