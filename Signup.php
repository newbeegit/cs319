<?php
    $DB_username = "dbu319t64";
    $DB_password = "?HagemU2";
    $DB_dbServer = "mysql.cs.iastate.edu"; 
    $DB_dbName   = "db319t64";
    $username = $_REQUEST['postname'];
    $password = md5($_REQUEST['postpassword']);
    $email = $_REQUEST['postemail'];
    $phone = $_REQUEST['postphone'];
    $librarian = 0;
    if($_REQUEST['postcheck'] == "true"){
        $librarian = true;
    }
    $firstName = $_REQUEST['postfirstname'];
    $lastName = $_REQUEST['postlastname'];
//echo $username . " " . $password . " " . $email . " " . $phone . " " . $librarian . " " . $firstName . " " . $lastName;
$conn = new mysqli($DB_dbServer, $DB_username, $DB_password, $DB_dbName);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo "failed";
    exit();
}
$sql = "SELECT userName FROM users WHERE userName='$username'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "user exists";
    $conn->close();
    exit();
}
$sql = "INSERT INTO users VALUES ('$username', '$password', '$email', '$phone', '$librarian', '$firstName', '$lastName')";
if ($conn->query($sql) === TRUE) {
 //   echo "New record created successfully<br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
echo "success";
?>