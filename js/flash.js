
// Function to log to the console
var myLog = function() {
    if (typeof console == "object" && console.log ) {
        console.log.apply(console, arguments);
    }
}
// blink: blinks an element using the fadeOut/FadeIn jquery function
// to blink at a different rate change the speed of the fadeIn/fadeOut function
function blink(selector){
    myLog("blink entered");
$(selector).fadeOut('slow', function(){
    $(this).fadeIn('slow', function(){
        blink(this);
    });
});
}

$(document).ready(function() {
	myLog("dcoument ready");
    blink("#underconstruction");
});
