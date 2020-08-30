/////////////////////////////////////////////////////////////////////////////
// daysUntil
//
// Function to return the number of days until and event passed as 'year',
// 'month', and 'day' (all integers)
/////////////////////////////////////////////////////////////////////////////

function daysUntil(year, month, day) {
    ////////////////////////////////////////////////////////////////////////
    // This function provides the number of days an event
    // is in the future.
    //
    // Input parameters are: year, month, day in numerical format
    //
    // The funciton returns the number of days the event is in the future
    // If the event date is passed then “-1” is returned.
    ////////////////////////////////////////////////////////////////////////
    
    console.log("daysUntil: Entering");
    
    //Initialize dates in milliseconds since sometime in 1970
    var today = new Date();
    //new Date(year, month, day, hours, minutes, seconds, millisecond
    var event = new Date(year, month - 1, day + 1, 0,0,0,0);
    
    //If the event has not already passed return the number of days to the event
    //If the event has passed return a negative number representing the number
    //of days since the event.
    //If the event is today return zero
    var difference = 0;
  
    difference = event.getTime() - today.getTime();
    difference = Math.floor(difference / ( 1000 * 60 * 60 *24));
    console.log("daysUntil: Difference: " + difference);
    return difference;
}