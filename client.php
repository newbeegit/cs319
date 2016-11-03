<?php
    session_start();
?>
    <html>

    <head>
        <title>Library</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script type="text/javascript">
            admin = "<?php echo $_SESSION['librarian']; ?>";
        </script>
        <script src="booksLibrary.js"></script>
    </head>

    <body>
        <p><a href="logout.php">
        <?php
            echo "<p align='right'>" . $_SESSION['username'] . "</p>";
        ?>
            </a></p>
        <div id="lib">Library Table</div>
        <div id="description"></div>
        <input hidden="true" id="borrow" type="button" value="Borrow" />
        <input hidden="true" id="return" type="button" value="Return" />
		<input hidden="true" id="delete" type="button" value="Delete" />
        <div hidden="true" id="form">
            <label for="bookTitle">Book Title</label>
            <input id="bookTitle" type="text" name="bookTitle" />
            <label for="bookID">Book ID</label>
            <input id="bookID" type="text" name="bookID" />
			<label for="author">Author</label>
            <input id="author" type="text" name="author" />
            <input id="add" type="button" value="Add" />
        </div>
		<p>
		</p>
		
		<div id="history" hidden="true">Borrow History</div>
    </body>

    </html>