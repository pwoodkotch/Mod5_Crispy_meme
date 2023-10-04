// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.





$(document).ready(function () {
//Function that takes the currentDay paragraph element and sets the text to the current date
  function DisplayDate() {
    var uDate = new Date();
    var cDate = uDate.toDateString();
    $("#currentDay").text(cDate);

    
  }
  DisplayDate();//Calling the DisplayDate function so the function occurs when the document is ready
  
  function TimeColor() {//This function sets every timeblock to a certain color based on whether it has past present or future class
    var time = dayjs().hour();
    $('.time-block').each(function () {
      var timeBlock= parseInt($(this).attr('id').split("-")[1]) //saves the variable timeBlock as the number at the end of each id
      if (timeBlock < time) {
        $(this).addClass("past");
        //If the time for the timeBlock is less than the current time, add a class past
       

      }else if (timeBlock === time) {
        $(this).removeClass("past");
        
        $(this).addClass("present");
        //If the time for the timeBlock is equal to the current time, add a class present and remove class past
       

      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        //If the time for the timeBlock is equal to tanything but the first two conditions, add a class future and remove classes past and present
      }
    })

  }
  TimeColor();//Calling timecolor function so the colors appear accordingly when the page loads




  $('.saveBtn').on('click', function () {//ON the click of a save button the sibling wiht the class of description is set to the variable task
    var task= $(this).siblings('.description').val();
    var when= $(this).parent().attr('id').split("-")[1];//The number in the id of the parent div is set to the variable when
    localStorage.setItem(when, task);//Items are saved in local storage with the key being the number in each id and the value is whatever
    //task has been input into the textarea


  }
  )


//lines 62-69 get the items that have been saved in local storage and outputs them in their appropriate textarea
  $("#hour-9 .description").val(localStorage.getItem("9"))
  $("#hour-10 .description").val(localStorage.getItem("10"))
  $("#hour-11 .description").val(localStorage.getItem("11"))
  $("#hour-12 .description").val(localStorage.getItem("12"))
  $("#hour-13 .description").val(localStorage.getItem("13"))
  $("#hour-14 .description").val(localStorage.getItem("14"))
  $("#hour-15 .description").val(localStorage.getItem("15"))
  $("#hour-16 .description").val(localStorage.getItem("16"))
}

)




// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

