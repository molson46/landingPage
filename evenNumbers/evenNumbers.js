//
//	evenNumbers.js: Display even numbers
//  Marv Olson
//	Tuesday, June 10, 2014
//

////////////////////////////////////////////////////////////////////////
// $: convenience function to get address of an element id
////////////////////////////////////////////////////////////////////////
var $ = function (id) {
	return document.getElementById(id);
} // end of function "$"

////////////////////////////////////////////////////////////////////////
// doCalculate: function to calculate & display area and perimeter
////////////////////////////////////////////////////////////////////////
var displayEvenNumbers = function () {
//alert("Display even numbers function invoked");
    var myStart = parseFloat($("start").value);
	var myStop = parseFloat($("stop").value);
    var numbers = "";
    
// Check for valid start and end. If not valid just print and error.
// If valid then do the calculations and display the area and perimeter.	
	if( isNaN(myStart)  || ((myStart % 2) != 0)) {
		alert("Start must be an even number");
		$("start").select();
	} else if(isNaN(myStop)  || ((myStop % 2 != 0)) || myStop <= myStart) {
		alert("Stop must be an even number greater than Start");
		$("stop").select();
	} else {
        for( i = myStart; i <= myStop; i = i + 2) 
            numbers += i + " ";
        $("displayNumbers").value = numbers;
    }
} //end of displayEvenNumbers

////////////////////////////////////////////////////////////////////////
// onLoad: when user clicks on the calculate button 
// execute "doCalculate
////////////////////////////////////////////////////////////////////////
window.onload = function() {
    $("doIt").onclick = displayEvenNumbers;
    $("start").value = "";
    $("stop").value = "";
    $("displayNumbers").value = "";
    $("start").focus();
} //end of windows.onload