<?php
    session_start();
    
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $DB_username = "dbu319t64";
    $DB_password = "?HagemU2";
    $DB_dbServer = "mysql.cs.iastate.edu"; 
    $DB_dbName   = "db319t64";
    $conn = new mysqli($DB_dbServer, $DB_username, $DB_password, $DB_dbName);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        echo "failed";
        exit();
    }
    $sql = "SELECT Password,Librarian FROM users WHERE userName='$username'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        if($row = $result->fetch_assoc()) {
            if(md5($password) == $row['Password']){
                $_SESSION["username"] = $username;
                $_SESSION["librarian"] = $row['Librarian'];
                echo "success";
            } else{
                echo "wrong password";
            }
        }
    } 
	else {
        echo "no such user";
    }
    $conn->close();
?>