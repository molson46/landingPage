
// daysToEvent: Javascript function to display the number of days to 
// a specified event.

    // Define Eventdate
    var eventYear = 2014;
    var eventMonth = 2;
    var eventDay = 3;
    var eventTitle = "Web design class starts";
    
    //Initialize dates in milliseconds since sometime in 1970
    today = new Date();
    event = new Date();
    event.setFullYear(2014);
    event.setMonth(eventMonth - 1);
    event.setDate(eventDay);
    

    //If the event has not already passed, compute the
    //number of milliseconds between now and then, then
    //convert this to a number of days and print a message.
    var difference = 0;
    if (today.getTime() < event.getTime()) {
        difference = event.getTime() - today.getTime();
        difference = Math.floor(difference / ( 1000 * 60 * 60 *24));
        document.write(difference + " days until " + eventTitle + "<p>");
    }
