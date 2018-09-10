<?php
include('config.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$_POST = json_decode(file_get_contents('php://input'), true);

try {
    $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $statement = $conn->prepare('SELECT * FROM users WHERE user_email = :email');
    $statement->execute(array(
        "email" => $email,
    ));
    $row = $statement->fetch(PDO::FETCH_ASSOC);

    if(!$row)
    {
      $statement = $conn->prepare("INSERT INTO users(user_login, user_email, user_password)
          VALUES(:username, :email, :password)");
      $statement->execute(array(
          "username" => $username,
          "email" => $email,
          "password" => $password
      ));

      echo true;

    } else {

      echo false;

    }

  }
catch(PDOException $e)
    {
      echo "Connection failed: " . $e->getMessage();
    }

?>
