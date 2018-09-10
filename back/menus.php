<?php
include('config.php');
header('Access-Control-Allow-Origin: *');

try {
    $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sth = $conn->prepare(" SELECT * FROM menus WHERE menu_status = 1 ");
    $sth->execute();
    $Menus = $sth->fetchAll(PDO::FETCH_ASSOC);

    $result = array('menus' => $Menus);

    if(empty($result)){
      echo "Connection failed";
    } else {
      echo json_encode($result);
    }

  }
catch(PDOException $e)
    {
      echo "Connection failed: " . $e->getMessage();
    }

?>
