//
// calculateCoins.js: calulates the change in quarters, dimes
// nickles, and pennies given input of 0-99.
//
// Marv Olson
// 16 June 2014

var $ = function(id) {return document.getElementById(id);}

var makeChange = function() {
    // alert("makeChange: entered");
    var myCents = parseInt($("cents").value);
    
    // Clear out change made display;
    $("quarters").value = "";
    $("dimes").value = "";
    $("nickels").value = "";
    $("pennies").value = "";
    
    $("cents").focus();
    
    // alert("User entered " + myCents); 
    if( isNaN(myCents)  || (myCents < 0)  || (myCents > 99)) {
		// Error ask user to enter valid data
        alert("Must be an integer between 0 and 99");
		$("cents").select();
    } else {
        // Calculate change
        var quarters = 0;
        var dimes = 0;
        var nickels = 0;
        var pennies = 0;
        //alert("makeChange: passed error checking");
        var noQuarters = $("noQuarters").checked;
        if (!noQuarters) {
            while (myCents >= 25) {
                myCents -= 25;
                quarters++;
            }
        }
        var noDimes = $("noDimes").checked;
        if (!noDimes) {
            while (myCents >= 10) {
                myCents -= 10;
                dimes++;
            }
        }
        var noNickels = $("noNickels").checked;
        if (!noNickels) {
            while (myCents >= 5) {
                myCents -= 5;
                nickels++;
            }
        }
        var noPennies = $("noPennies").checked;
        if (!noPennies) {pennies = myCents;}
        // alert ("quarters: " + quarters + " dimes: " + dimes + " nickels: " + nickels + " pennies: " + pennies);    
    }
    //Display the change made
    if (quarters > 0) {$("quarters").value = quarters;}
    if (dimes > 0) {$("dimes").value = dimes;}
    if (nickels > 0) {$("nickels").value = nickels;}
    if(pennies > 0) {$("pennies").value = pennies;}
    
    $("cents").focus();

}  // end function makeChange

// Initialization after page loads
var init = function() {
	$("calculate").onclick = makeChange;
    alert("if you want to exclude types of coins click the exclude checkboxes.  If you exclude pennies you may not receive the correct change");
} // end init function

// onload - invoke "init" function
window.onload = init;