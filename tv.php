<!DOCTYPE html>
<html lang="en">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Todo Viewer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap and jQuery links-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <!-- my styles -->
    <link rel="stylesheet" href="./style.css" type="text/css"/>
</head>

<body>
<!-- Header ---------------------------------------------->

<header class="container" id="siteHeader">
<div class="row" "col-lg-12">
<div class="text-center">
  <div id="homeHeader">
    <div id="siteTitle">Todo.txt Viewer</div>
  </div>
</div>
<div class="text-right">
  <div id="siteSubTitle">
    <?php
      function hhmmss() {
        date_default_timezone_set("America/Chicago");
        return date('H:i:s');
      }
      date_default_timezone_set("America/Chicago");
      echo hhmmss();
    ?>
  </div>
</div>
</div>
</header>
<!-- End Header-->

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<!-- Display the todo.txt tasks                               -->
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<article class="container">
<div class="row" "col-lg-12">
<?php
/////////////////////////////////////////////////////////////////
// functions
//
/////////////////////////////////////////////////////////////////
  function newLine()  {
    echo("<br><br>");
  }

  function dateTime() {
    date_default_timezone_set("America/Chicago");
    return date('H:i, jS F Y');
  }

/////////////////////////////////////////////////////////////////
//
// Main - Open the todo.txt file and display it line by line
// on the web page.
//
/////////////////////////////////////////////////////////////////
    date_default_timezone_set("America/Chicago");
    newLine();
    $line = 0;

    $filter =  $_POST['filter'];
    $taskfile = fopen("https://www.dropbox.com/s/tz2a5l18s0vvp8s/todo.txt?dl=0", "r") or die("Unable to open file!");

/////////////////////////////////////////////////////////////////

    echo "<table class=\"table table-striped\" >";
    echo "<thead class=\"thead-dark\">";
    echo "<tr> <th> Line </th> <th> Task </th> </tr>";
    echo "</thead>";

    // Output one line until end-of-file
    while(!feof($taskfile)) {
      $onetask = fgets($taskfile);
      ++$line;

      if ((substr($filter,0,1) == "*") and (!trim($onetask)) == '')  {
        echo "<tr> <td>" . $line  .  "</td> <td>" .  $onetask .  "</td> </tr>";
      }
      elseif ((strpos($onetask, $filter) !== false)  and (!trim($onetask)) == '') {
        echo "<tr> <td>" . $line  .  "</td> <td>" .  $onetask .  "</td> </tr>";
      }
    }
    fclose($taskfile);

    echo "</table>";

?>

</div>
</article>
 <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<!-- Footer -->
<footer id="footer" class="container">
<div class="row col-lg-12 cneter-text"> 
	&bull;Be the Change&bull;
</div>
</footer>

<!-- End Footer ---------------------------------------------------------------->

</body>
</html>
