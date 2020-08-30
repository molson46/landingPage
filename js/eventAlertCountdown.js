
/////////////////////////////////////////////////////////////////////////////
//
// eventAlertCountdown
//
// Displays the days until an event given 'eventYear', 'eventMonth', 'eventDay',
// and 'eventTitle" are defined.
//
// todo: a better way to obtain the event information, perhaps reading from a 
// database?
//
/////////////////////////////////////////////////////////////////////////////

console.log("eventAlertCountdown: Entering");

var difference = daysUntil(eventYear, eventMonth, eventDay);

if ( difference >= 0) {
    document.write(difference + " days until " + eventTitle + "<p>");
}
else {
    document.write( eventTitle + " has passed! <p>");
}
