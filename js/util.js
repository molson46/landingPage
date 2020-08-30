// function to log message along with arguments to the console
var $log = function() {
    if (typeof console == "object" && console.log ) {
        console.log.apply(console, arguments);
    }
}

// Logs failure message "description" if "outcome" is false
var assert = function(outcome, description) {
    if (!outcome) {
        $log("FAIL: " + description);
    }
}
