<?php
include('config.php');
header('Access-Control-Allow-Origin: *');

try {
    $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sth = $conn->prepare(" SELECT * FROM news ");
    $sth->execute();
    $News = $sth->fetchAll(PDO::FETCH_ASSOC);

    $sth = $conn->prepare(" SELECT * FROM league_table ");
    $sth->execute();
    $League = $sth->fetchAll(PDO::FETCH_ASSOC);

    $result = array('news' => $News, 'league' => $League);

    if(empty($result)){
      echo "Wrong request";
    } else {
      echo json_encode($result);
    }

  }
catch(PDOException $e)
    {
      echo "Connection failed: " . $e->getMessage();
    }

?>
