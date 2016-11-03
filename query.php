<?php
    session_start();
	date_default_timezone_set('America/Chicago');
    $DB_username = "dbu319t64";
    $DB_password = "?HagemU2";
    $DB_dbServer = "mysql.cs.iastate.edu"; 
    $DB_dbName   = "db319t64";
    $conn = new mysqli($DB_dbServer, $DB_username, $DB_password, $DB_dbName);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        echo "failed";
        exit();
    }
    
	if($_REQUEST['op'] == "shelfs"){
        query_shelfs($conn);
    }	
	else if($_REQUEST['op'] == "addBook"){
        query_addBook($conn);
    }
	else if($_REQUEST['op'] == "checkborrow"){
        query_checkborrow($conn);
    }
	else if($_REQUEST['op'] == "borrow"){
        query_borrow($conn);
    }
	else if($_REQUEST['op'] == "return"){
        query_return($conn);
    }
	else if($_REQUEST['op'] == "delete"){
        query_delete($conn);
    }
	else if($_REQUEST['op'] == "displayHistory") {
		query_display($conn);
	}
	
	function query_display($conn) {
			$users = array();
			$sql = "SELECT loanHistory.* FROM loanHistory";
            $result = $conn->query($sql);
            while($r = $result->fetch_assoc()) {
				$users[] = array("UserName"=>$r["UserName"], "BookId"=>$r["BookId"], "BorrowDate"=>$r["DueDate"], "ReturnedDate"=>$r["ReturnedDate"]);
			}
			echo json_encode($users);
			$conn->close();
	}
	
    function query_shelfs($conn){
        $shelfs = array();
        $i = 0;
        while($i < 4){
            $books = array();
			
             $sql = "SELECT books.* FROM shelves INNER JOIN books ON books.BookId=shelves.BookId WHERE shelfId='$i'";
             $result = $conn->query($sql);
             while($row = $result->fetch_assoc()) {
				 
                 $books[] = array("bookName"=>$row["BookTitle"], "bookID"=>$row["BookId"], "author"=>$row["Author"], "presence"=>$row["Availability"]);
				 $tempID = $row["BookId"];
				 
             }
             $shelfs[] = $books;
            $i++;
        }
        echo json_encode($shelfs);
		$conn->close();
		//echo json_encode($shelfs.BookId);    
    }
	

	function query_addBook($conn) {
		$id = $_REQUEST['bookid'];
		$title = $_REQUEST['bookname'];
		$author = $_REQUEST['author'];
		$shelfid = $_REQUEST['shelfid'];
		$shelfname = $_REQUEST['shelfname'];
		
		$sql = "INSERT INTO books VALUES ('$id', '$title', '$author', '1')";

		if ($conn->query($sql) === TRUE) {
			echo "New record created successfully<br>";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
			exit();
		}

		$sql = "INSERT INTO shelves VALUES ('$shelfid', '$shelfname', '$id')";
		$conn->query($sql);
		$conn->close();
	}
	
	function query_checkborrow($conn) {
		$cur_book = $_REQUEST['current_book4'];
		$cur_user = $_SESSION["username"];
		$sql1 = "SELECT loanHistory.UserName FROM loanHistory WHERE BookId='$cur_book' AND ReturnedDate IS NULL";
		$result1 = $conn->query($sql1);
		$borrowedBy;
		$thisUserborrowed = 0;
		while($n = $result1->fetch_assoc()){
				$borrowedBy = $n["UserName"];
			}
		if($borrowedBy == $_SESSION["username"]){
			 $thisUserborrowed = 1;
			}
			echo $thisUserborrowed;
			$conn->close();
	}
	
	function query_borrow($conn) {
		//private $cur_user = $_REQUEST[''];
		$cur_book = $_REQUEST['current_book1'];
		$cur_user = $_SESSION["username"];
		$cur_time = date("Y-m-d");
		$sql1 = "UPDATE books SET Availability = '0' WHERE BookId = '$cur_book'";
		$sql2 = "INSERT INTO loanHistory (UserName, BookId, DueDate) VALUES ('$cur_user', '$cur_book', '$cur_time')";
		/**
		if ($conn->query($sql2) === TRUE) {
			echo "New record created successfully<br>";
			exit();
		} else {
			echo "Error: " . $sql2 . "<br>" . $conn->error;
			exit();
		}
		**/
		
		$conn->query($sql1);
		$conn->query($sql2);
		$conn->close();
	}
	
	
	function query_return($conn) {
		//private $cur_user = $_REQUEST[''];
		$cur_book = $_REQUEST['current_book2'];
		$cur_user = $_SESSION["username"];
		$cur_time = date("Y-m-d");
		$sql1 = "UPDATE books SET Availability = '1' WHERE BookId = '$cur_book'";
		$conn->query($sql1);
		$sql2 = "UPDATE loanHistory SET ReturnedDate = '$cur_time' WHERE BookId = '$cur_book' ";
		$conn->query($sql2);
		$conn->close();
	}
	
	
	function query_delete($conn) {
		
		$cur_book = $_REQUEST['current_book3'];
		$sql1 = "DELETE FROM books WHERE BookId = '$cur_book'";
		$sql2 = "DELETE FROM shelves WHERE BookId = '$cur_book'";
		$conn->query($sql1);
		$conn->query($sql2);
		$conn->close();
	}
	
class Library {
    private $shelfs;
    
    function __contruct($shelfs){
        $this->shelfs = $shelfs;
    }
}

class Book {
    private $bookID;
    private $bookName;
    private $author;
    private $presence;
	private $borrowUser;
    
    function __construct($id, $name, $author, $presence, $borrowUser){
        $this->bookID = $id;
        $this->bookName = $name;
        $this->author = $author;
        $this->presence = $presence;
		$this->borrowUser = $borrowUser;
    }
}


class Student {
    private $name;
    private $admin;
    
    function __construct($name, $admin){
        $this->name = $name;
        $this->admin = $admin;
    }
}

class Shelf {
    private $id;
    private $name;
    private $books;
    
    function __contruct($name, $id, $books){
        $this->name = $name;
        $this->id = $id;
        $this->books = $books;
    }
}
?>