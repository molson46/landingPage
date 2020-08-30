/////////////////////////////////////////
// dayOfWeek.js: Calculates the day of the week given the "month", "day", and "year"
// as inputs and displays the day of the week along with a line from an old
// children's nursery rhyme for that day of the week.
//
// Marv olson
//
//  June 20, 2014: Created
/////////////////////////////////////////

///////////////////////////////////////////
// validateDate validates the input month, day, and year. It displays an alert
// message is any are invalid, and exits.
//
var isDateValid = function (month, day, year) {
    myLog("isvalidateDate: entered");
    // Validate Month
    if ( isNaN(month) || month < 1 || month > 12 ) {
        alert("month must be a number between 1 and 12");
        $("month").select();
        return false;
    }
    
    // Validate Year
    if ( isNaN(year) || ( year < 1000) || (year > 9999)) {
            alert("year must be a 4 digit number");
            $("year").select();
            return false;
    }
    
    // Validate Day
    var isValidDay = false;
    myLog("isDateValid: entered day check");
    if (isNaN(day) || (day < 1)) {
        alert("day must be a 2 digit number valid for the entered month");
        $("day").select();
        return false;
    } else {
        myLog("isDateValid: day is not alpa and is > 0");
        // validate the number of days is correct for the month
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                myLog("validateDate: month with 31 days ", month, day);
                 if (day < 32) { isValidDay = true; }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                myLog("validateDate: month with 30 days ", month);
                if (day < 31) { isValidDay = true; }
                break;
            case 2:
                myLog("validateDate: February ", month);
                if(isLeapYear(year)) {
                    myLog("validateDate: leap year");
                    if (day < 30 ) {isValidDay = true;}
                } else {
                    myLog("validateDate: not leap year");
                    if (day < 29) {isValidDay = true;}
                }
                break;
            default:
                myLog("validateDate: switch default entered: should never happen");
        }
    if (!isValidDay) {
        alert("day must be a 2 digit number valid for the entered month");
        $("day").select();  
    }
    return isValidDay;
    }
} // end isDateValid

///////////////////////////////////////////
// clearEntry just clears the input fields
var clearEntry = function () {
    myLog("clearEntry entered");
    $("month").value = "";
    $("day").value = "";
    $("year").value = "";
    $("message").value= "";
} // end ClearEntry

/////////////////////////////////////////
// calcualteDay is the main function for the dayOfWeek web page. It gets the
// inputs, invokes "validateDate" to validate the inputs, and
// displays the answer.
var calculateDay = function () {
    myLog("caculateDay entered");
    
    // Get and validate input
    var myMonth = parseInt($("month").value);
    var myDay = parseInt($("day").value);
    var myYear = parseInt($("year").value);
    myLog ("Inputs", myMonth, myDay, myYear);
    
    if (isDateValid(myMonth,myDay,myYear)) {
        // date is valid
        myLog("calculateDay: date valid");
        // get day of the week and display the message for the day of the week
        var myDate = new Date(myYear, myMonth -1, myDay, 0, 0, 0, 0);
        var dow = myDate.getDay();
        var message = weekday[dow] + childSongArray[dow];
        // $("message").innerHTML = message;
        $("message").innerHTML = message;
        //$("message").value = message;       
    } else {
        myLog("calculateDay: date not valid");
    }
}  // end calculateDay

///////////////////////////////////////////
// init runs when the window has finished loading
var init = function () {
	myLog("init entered");
    $("submit").onclick = calculateDay;
	$("clear").onclick = clearEntry;
	$("month").focus();
}

/////////////////////////////////////////
// don't do anything until the window loads
window.onload = init;

