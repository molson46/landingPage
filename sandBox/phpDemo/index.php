<?php
  function newLine()  {
    echo("<br><br>");
  }

  function dateTime() {
    date_default_timezone_set("America/Chicago");
    return date('H:i, jS F Y');
  }

  date_default_timezone_set("America/Chicago");

  //echo date('H:i, jS F Y');
  echo "<h1>Todo.txt Viewer</h1>";
  echo "<h3>Date/time: ".dateTime()."</h3>\r\n";
  //newLine();
  $tasks = array("Update Investment Spreadsheets @money @tw  @3", "Review techsoup low cost microsoft products -followup @mg @3", "Work in landscape 2 hours @landscape");
  $arrlength = count($tasks);
  for($x = 0; $x < $arrlength; $x++) {
    echo $tasks[$x];
    echo "<br>";
  }

  echo ("<h3>" . htmlspecialchars($_POST["filter"]). "</h3>\r\n");
?>