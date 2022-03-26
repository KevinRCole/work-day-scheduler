// save reference to important DOM elements
var dateDisplayEl = $('#time-display');

// displayDate();

var dateDisplayEL = $('#date-display');
var event9amInput = $('#event-9am');
var event10amInput = $('#event-10am');
var event11amInput = $('#event-11am');
var event12pmInput = $('#event-12pm');
var event1pmInput = $('#event-1pm');
var event2pmInput = $('#event-2pm');
var event3pmInput = $('#event-3pm');
var event4pmInput = $('#event-4pm');
var event5pmInput = $('#event-5pm');

// var table = document.querySelector(".table");

var event9amBtn = document.getElementById("btn9");
var event10amBtn = document.getElementById("btn10");
var event11amBtn = document.getElementById("btn11");
var event12pmBtn = document.getElementById("btn12");
var event1pmBtn = document.getElementById("btn1");
var event2pmBtn = document.getElementById("btn2");
var event3pmBtn = document.getElementById("btn3");
var event4pmBtn = document.getElementById("btn4");
var event5pmBtn = document.getElementById("btn5");

function displayDate() {
  var dateToday = moment().format('MMM DD, YYYY');
  dateDisplayEl.text(dateToday);
}

event9amBtn.addEventListener("click", function(event) {
  // event.preventDefault();

  var event9am = document.querySelector("#event-9am").value;
  // console.log(event9am);
  localStorage.setItem("event9am", event9am);

});

event10amBtn.addEventListener("click", function(event) {
//   // event.preventDefault();

  var event10am = document.querySelector("#event-10am").value;
  // console.log(event10am);
  localStorage.setItem("event10am", event10am);

});

event11amBtn.addEventListener("click", function(event) {
  //   // event.preventDefault();
  
    var event11am = document.querySelector("#event-11am").value;
    // console.log(event10am);
    localStorage.setItem("event11am", event11am);
  
  });

  event12pmBtn.addEventListener("click", function(event) {
    //   // event.preventDefault();
    
      var event12pm = document.querySelector("#event-12pm").value;
      // console.log(event12pm);
      localStorage.setItem("event12pm", event12pm);
    
    });

  event1pmBtn.addEventListener("click", function(event) {
      //   // event.preventDefault();
      
        var event1pm = document.querySelector("#event-1pm").value;
        // console.log(event1pm);
        localStorage.setItem("event1pm", event1pm);
      
      });

  event2pmBtn.addEventListener("click", function(event) {
        //   // event.preventDefault();
        
        var event2pm = document.querySelector("#event-2pm").value;
          // console.log(event2pm);
        localStorage.setItem("event2pm", event2pm);
        
        }); 

  event3pmBtn.addEventListener("click", function(event) {
          //   // event.preventDefault();
          
          var event3pm = document.querySelector("#event-3pm").value;
            // console.log(event2pm);
          localStorage.setItem("event3pm", event3pm);
          
        }); 
  
  event4pmBtn.addEventListener("click", function(event) {
          //   // event.preventDefault();
          
          var event4pm = document.querySelector("#event-4pm").value;
            // console.log(event2pm);
          localStorage.setItem("event4pm", event4pm);
          
        }); 

  event5pmBtn.addEventListener("click", function(event) {
          //   // event.preventDefault();
          
          var event5pm = document.querySelector("#event-5pm").value;
            // console.log(event2pm);
          localStorage.setItem("event4pm", event4pm);
          
        }); 
     


    



function displayStoredEvents() {

$(event9amInput).val(localStorage.getItem("event9am"));
$(event10amInput).val(localStorage.getItem("event10am"));
$(event9amInput).val(localStorage.getItem("event11am"));
$(event10amInput).val(localStorage.getItem("event12pm"));
$(event9amInput).val(localStorage.getItem("event1pm"));
$(event10amInput).val(localStorage.getItem("event2pm"));
$(event9amInput).val(localStorage.getItem("event3pm"));
$(event10amInput).val(localStorage.getItem("event4pm"));
$(event9amInput).val(localStorage.getItem("event5pm"));

};

displayDate();
displayStoredEvents();

// console.log(dateDisplayEL);

 

  // alert ("Hello World!");



