<!DOCTYPE html>
<html>
<body>

<h1>Email from Server Test</h1>

<?php    
// echo "Welcome 2nd try". $_POST['name']. "<br />";
?>
    
Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

    
    
<?php
    echo "<p>Hello World!</p>";
    echo "<p>Testing email</p>";
    mail("molson46@gmail.com","email from the server","You shoot your eye out kid");
    
    $x = $_POST['name'];
    echo "<p>Testing php variables: " . $x . "</p>";
    $address = "molson46@yahoo.com";
    mail( "molson46@yahoo.com", "Testing PHP Mail". "Howdy big guy");

?>

</body>
</html>