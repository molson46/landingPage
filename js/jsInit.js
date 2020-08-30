$( document ).ready(function() {
    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    alert("document is ready");
    $initializeClock('clockdiv', deadline);
});
