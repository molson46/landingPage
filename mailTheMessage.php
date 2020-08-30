<?php

  $name = $email = $message  = "";
  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {    
    $name = test_input($_POST["name"]);
    $subject = test_input($_POST["subject"]);
    $email = test_input($_POST["email"]);
    $message = test_input($_POST["message"]);
    $msg = "Email from: " . $name . ", -- subject: " . $subject . ", -- email: " . $email . ", -- Message is: " . $message ;
    $messagelength = strlen($message); 
    $http = "http";
    $lowercaseMessage = strtolower($msg);
    $pos = strpos($lowercaseMessage, $http);
    if (($messagelength > 6) && ($pos === false)) {
//      echo "<h1>" . $msg . "</h1>";
        mail("me@marvolson.com","landingPage contact",$msg);
    } else {
//        echo "<h1>Don't email; Bad Message</h1>";
        $date = date("Y-m-d h:i:s A");
        $errormsg = "+++ " .$date . " -- " . $msg . "\r\n";
        $ef = fopen("errors.txt", "a");
        fwrite($ef, $errormsg);
        fclose($ef);
    } 
    echo "<script>";
    echo "window.location.href ='./ThanksForTheFeedback.html' ";
    echo " </script> ";
  }
?>
    
