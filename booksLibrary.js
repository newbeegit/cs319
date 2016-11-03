$(document).ready(function () {
    l = new Library();
});

function Library() {
    this.shelfs = new Array();
    var s1 = new Shelf("Art", 0, new Array());
    var s2 = new Shelf("Science", 1, new Array());
    var s3 = new Shelf("Sport", 2, new Array());
    var s4 = new Shelf("Literature", 3, new Array());
    var shelfs = this.shelfs;


    //TODO: query shelves from database.
    $.post("query.php", {
        op: "shelfs"
    }, function (data, status) {

        var json_obj = JSON.parse(data);

        s1 = new Shelf("Art", 0, json_obj[0]);
        s2 = new Shelf("Science", 1, json_obj[1]);
        s3 = new Shelf("Sport", 2, json_obj[2]);
        s4 = new Shelf("Literature", 3, json_obj[3]);

        shelfs.push(s1);
        shelfs.push(s2);
        shelfs.push(s3);
        shelfs.push(s4);

        console.log(shelfs);

        Library.prototype.createTable();

    });
}

Library.prototype.setCSS = function () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < this.shelfs[i].books.length; j++) {
            var r = $("#table tbody")[0].children[j + 1];
            var c = $(r)[0].children[i];
            if (this.shelfs[i].books[j].presence == 1) {
                $(c).css("background-color", "white");
            } else {
                $(c).css("background-color", "red");
            }
        }
    }
}

Library.prototype.createTable = function () {

        var rowIndex = 0;
        var colIndex = 0;
        var book = null;
		

        var mytable = $("<table id='table' border='2'></table>"); // creates DOM elements
        var mytablebody = $('<tbody></tbody>');
        var curr_row = $('<tr></tr>');
        for (var i = 0; i < 4; i++) {
            var curr_cell = $('<th width="80" height="18"></th>');
            curr_cell.append(l.shelfs[i].name);
            curr_row.append(curr_cell);
            mytablebody.append(curr_row);
        }


        for (var j = 0; j < 20; j++) {

            curr_row = $('<tr></tr>');
            for (i = 0; i < 4; i++) {
                var curr_cell = $('<td class="book" width="80" height="18"></td>');
                if (l.shelfs[i].books[j] != undefined) {
                    curr_cell.append(l.shelfs[i].books[j].bookName);
                }
                curr_row.append(curr_cell);
            }
            mytablebody.append(curr_row);
        }
        mytable.append(mytablebody);
        mytable.insertAfter($('#lib'));
		
		if(admin ==1){
			$.post("query.php", {
				op: "displayHistory"
			}, function (data, status) {
					var json_history = JSON.parse(data);
					console.log(data);
					console.log(json_history);
					var x = 0;
					var y = 0;
					var myhistory = $("<table id='history' border='2'></table>");
					var myhistorybody = $('<tbody></tbody>');
					var hiscurr_row = $('<tr></tr>');
					var labels = ["username", "bookID", "BorrowData", "ReturnedDate"];
					for (var i = 0; i < 4; i++) {
						var hiscurr_cell = $('<th width="80" height="18"></th>');
						hiscurr_cell.append(labels[i]);
						hiscurr_row.append(hiscurr_cell);
						myhistorybody.append(hiscurr_row);
					}
					//var borrowName = null;
					var length = Object.keys(json_history).length;
					for (var k=0; k<length;k++) {
						var hiscurr_cell = $('<td width="80" height="18"></td>');
						hiscurr_cell.append(Object.keys(json_history).UserName);
						console.log(hiscurr_cell);
					}
					
					myhistory.append(myhistorybody);
					myhistory.insertAfter($('#history'));
					$("#history").show();
					//show table in the end
			});
		}
		else{
			
		}
		
        l.setCSS();

        $("#table td").click(function () {
            $("#borrow").hide();
            $("#return").hide();
			$("#delete").hide();
            rowIndex = $(this).parent().index('tr');
            colIndex = this.cellIndex;
            var value = $(this).html();
			
            console.log("Index R: " + rowIndex + " C: " + colIndex + " Value: " + value);

            if (value === "" && admin == 1) {
                console.log("Add book here");
				$("#description").hide();
                $("#form").show();
            } 
			else if (value != "") {
                book = l.shelfs[colIndex].books[rowIndex - 1];
                var des = "Book name: " + book.bookName + " Book ID: " + book.bookID + "\nAuthor: " + book.author + " Present: " + book.presence;
                $("#description").html(des);
				$("#description").show();
				$("#form").hide();
                if (admin == 0 && book.presence == 1) {
                    $("#borrow").show();
                }
				else if ( book.presence == 0) {
					//if current user == borrowed by
					$.post("query.php", {
							op: "checkborrow",
							current_book4: book.bookID
							}, function (data, status) {
								console.log(data);
								if(data == "1"){
									$("#return").show();
								}
							});
							
                    }
				else if(admin == 1) {
					//need to check if the book has not been borrowed
					if(book.presence == 1){
					$("#delete").show();
					}
				}
            }

        });

        

        $("#form #add").click(function () {
            var title = $("#bookTitle").val();
            var id = $("#bookID").val();
			var author = $("#author").val();
            
            console.log("add to R: " + rowIndex + " C: " + colIndex);
            
            $("#form").hide();
            $("#bookTitle").val("");
            $("#bookID").val("");
			$("#author").val("");
 
			
			//change to SQL storage
			
			$.post("query.php", {
			op: "addBook",
			bookname: title,
			bookid: id,
			author: author,
			shelfid: colIndex,
			shelfname: GetShelfName(colIndex)
			}, function (data, status) {
				console.log(data);
			});
			//reload
			location.reload();
        });

        $("#borrow").click(function () {
            
            $("#borrow").hide();
            //$("#description").html(ret);
			$("#description").html();
			
            //l.setCSS();
			//change to SQL storage
			$.post("query.php", {
			op: "borrow",
			//current_user: ,
			current_book1: book.bookID
			}, function (data, status) {
				console.log(data);
			});
			//reload
			location.reload();
        });

        $("#return").click(function () {
            $("#return").hide();
	
            $("#description").html("Success");

            l.setCSS();
			
			$.post("query.php", {
			op: "return",
			//current_user: ,
			current_book2: book.bookID
			}, function (data, status) {
				console.log(data);
			});
			//reload
			location.reload();
        });
		
		$("#delete").click(function () {
            $("#delete").hide();
	
            $("#description").html("Success");

            l.setCSS();
			
			$.post("query.php", {
			op: "delete",
			current_book3: book.bookID
			}, function (data, status) {
				console.log(data);
			});
			//reload
			location.reload();
        });

    } // end of createTable

function User(name) {
    this.name = name;
    this.brrowCount = 0;
}

function Shelf(name, id, books) {
    this.id = id;
    this.name = name;
    this.books = books;
    var i;
    for (i = 0; i < books.length; i++) {
        books[i] = new Book(books[i].bookName, books[i].bookID, books[i].author, books[i].presence, books[i].thisUserborrowed);
    }
}

function Book(name, id, author, isAvailable, thisUserborrowed) {
    this.bookName = name;
    this.bookID = id;
    this.author = author;
    this.presence = isAvailable;
	this.thisUserborrowed = thisUserborrowed;
}

function GetShelfName(num) {
	var shelfname;
	if(num == 0){
		shelfname = "Art";
	}
	else if(num == 1){
		shelfname = "Science";
	}
	else if(num == 2){
		shelfname = "Sport";
	}
	else if(num ==3){
		shelfname = "Literature";
	}
	return shelfname;
}