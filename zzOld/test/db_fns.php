<?php

function db_connect() {
   $result = new mysqli('localhost', 'myadminr', 'LivingEarth', 'retiree');
   if (!$result) {
     throw new Exception('Could not connect to database server');
   } else {
     return $result;
   }
}

?>
