//
// calculateCoins.js: calulates the change in quarters, dimes
// nickles, and pennies given input of 0-99.
//
// Marv Olson
// 16 June 2014: Created
// 18 jUNE 2014: Converted to jQuery

var $log = function() {
    if (typeof console == "object" && console.log ) {
        console.log.apply(console, arguments);
    }
}

$(document).ready(function() {
    $log("Document really ready");
    ///////////////////////////////////////////////////////////////////
    //Code to hide/show warning is npPennies checkbox is not-checked/checked
     $("#explain").css("display","none");  //default is hidden
    // Add onclick handler to checkbox w/id noPennies
	   $("#noPennies").click(function(){

		// If checked
		if ($("#noPennies").is(":checked"))
		{
			//show the hidden div
			$("#explain").show("fast");
		}
		else
		{
			//otherwise, hide it
			$("#explain").hide("fast");
		}
	  });
    
    ///////////////////////////////////////////////////////////////////
    // On "calculate" button click make the change
    $("#calculate").click(function() {
        $log("calculate button cllicked");
        
        var myCents = parseInt($("#cents").val());
        $log("cents is: %d", myCents);
        
        // Clear out change made display;
        $("#quarters").val("");
        $("#dimes").val("");
        $("#nickels").val("");
        $("#pennies").val("");
        
        $("#cents").focus();
        // Check for input erros - not numeric and <0 || >99 
        if( isNaN(myCents)  || (myCents < 0)  || (myCents > 99)) {
            // Error ask user to enter valid data
            alert("Must be an integer between 0 and 99");
            $("#cents").select();

        }  else {
            // not errors - Calculate change
            $log("Calculate change");
            var quarters = dimes = nickels = pennies = 0;
            
            if (!$('#noQuarters').is(':checked') ) {
                $log("noQuarters is not checked");
                quarters = Math.floor(myCents/25);
                myCents = myCents - (quarters *25);
                }
            
            if (!$('#noDimes').is(':checked') ) {
                $log("noDimes is not checked");
                dimes = Math.floor(myCents/10);
                myCents = myCents - (dimes *10);
            }
            if (!$('#noNickels').is(':checked') ) {
                $log("noNickels is not checked");
                nickels = Math.floor(myCents/5);
                myCents = myCents - (nickels *5);
            }
            if (!$('#noPennies').is(':checked') ) {
                pennies = myCents;
                $log("noPennies is not checked");
            }    
        }
        
        //Display the change made
        if (quarters > 0) {$("#quarters").val(quarters);}
        if (dimes > 0) {$("#dimes").val(dimes);}
        if (nickels > 0) {$("#nickels").val(nickels);}
        if(pennies > 0) {$("#pennies").val(pennies);}
    
        $("#cents").focus();
    
    });
});
