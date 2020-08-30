//
//	area_and_perimeter example. Javascript class day 2
//  Marv Olson
//	11:06 AM 6/4/2014
//

////////////////////////////////////////////////////////////////////////
// $: convenience function to get address of an element id
////////////////////////////////////////////////////////////////////////
var $ = function(id) {
	return document.getElementById(id);
} // end of function "$"

////////////////////////////////////////////////////////////////////////
// doCalculate: function to calculate & display area and perimeter
////////////////////////////////////////////////////////////////////////
var doCalculate = function() {
	var myLength = parseFloat($("length").value);
	var myWidth = parseFloat($("width").value);

		$("area").value = "";
		$("perimeter").value="";
// Check for valid length and width. If not valid just print and error.
// If valid then do the calculations and display the area and perimeter.	
	if( isNaN(myLength)  || myLength <= 0) {
		alert("Lenght must be a number greater than 0");
	} else if(isNaN(myWidth)  || myWidth <= 0) {
		alert("Width must be a number greater than 0");
	} else {
//		window.alert (myLength + " " + myWidth);  //debug
		var myArea = myLength * myWidth;
		$("area").value = myArea.toFixed(2);
		var myPerimeter = 2 *(myLength + myWidth);
		$("perimeter").value = myPerimeter.toFixed(2);
	}
} //end of doCalculate

////////////////////////////////////////////////////////////////////////
// onLoad: when user clicks on the calculate button execute "doCalculate
////////////////////////////////////////////////////////////////////////
window.onload = function() {
	$("calculate").onclick = doCalculate;
	$("length").focus();
	$("length").value = "";
	$("width").value = "";
	$("area").value = "";
	$("perimeter").value="";
} //end of windows.onload