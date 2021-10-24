// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


//  display date and time using dayjs format  
 dayjs().format('MMMM DD YYYY, h:mm:ss a')
 console.log(dayjs().format('MMMM DD YYYY, h:mm:ss a'))

var headerTimeTitle = document.getElementsByClassName("headerTimeTitle")[0];

 headerTimeTitle.textContent=dayjs().format('MMMM DD YYYY, h:mm:ss a')


$(document).ready(function() {
// create event listener on save button 
    $(".saveBtn").on("click", function() {
// set varible for text and time.
// .sibling select description sibling attr from html applies changes/ Same for .parent with HTML id attribute 
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
// setting items in local storage 
        localStorage.setItem(time,text);
    })

// accesses saved dates and coverts time from miltiary to regular time 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    
    // function to get track current hour using dayjs

    function timeTracker() {
        
    // varible for current hour 
        var currentHour = dayjs().hour();

        // time block loops
        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log(hourBlock, currentHour)

            // creating conditions.

            // passed the hour add past class
            if(hourBlock < currentHour) {
                $(this).addClass(".past");
                $(this).removeClass(".future");
                $(this).removeClass(".present");
            }
            // on the current hour add present class
            else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            // if not the passed hour or current hour add future class 
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    timeTracker();
})

