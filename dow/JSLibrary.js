//Initialize ChildSong Array
var childSongArray = new Array(7);
childSongArray[0] = "\'s child is bonny and blithe and good and gay";
childSongArray[1] = "\'s child is fair of face";
childSongArray[2] = "\'s child is full of grace";
childSongArray[3] = "\'s child is full of woe";
childSongArray[4] = "\'s child has far to go";
childSongArray[5] = "\'s child is loving and giving";
childSongArray[6] = "\'s child works hard for a living";

// Iniitialize day of week array
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// helper or library functions
var $ = function(id) {
    return document.getElementById(id);
} // end of $ function

/*
    Most years divisible by 4 are Leap Years (i.e. 1996)
    However, most years divisible by 100 are not (i.e. 1900)
    Unless they are also divisible by 400, in which case they are leap years (i.e. 2000)
*/
function isLeapYear(xYear) {
    // year must be divisible by 4 to be a leap year
    if (xYear % 4 == 0) {
        if (xYear % 100 != 0) {
            return true;
        } else {
            var isLeap = (xYear % 400 == 0) ? true : false;
            return isLeap;
         }    
    }
    return false;  // year was not divisible by 4 so not a leap year
}  // end of isLeapYear function 

// Function to log to the console
var myLog = function() {
    if (typeof console == "object" && console.log ) {
        console.log.apply(console, arguments);
    }
}