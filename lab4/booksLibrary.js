function Library(name) {
	this.name = name;
	this.shelves = new Array();
	
	var shelf1 = new Shelf("Shelf Literature");
	var shelf2 = new Shelf("Shelf Science");
	var shelf3 = new Shelf("Shelf Sport");
	var shelf4 = new Shelf("Shelf Art");
	
	this.shelves.push(shelf1);
	this.shelves.push(shelf2);
	this.shelves.push(shelf3);
	this.shelves.push(shelf4);
	
	for(var i=1; i<6;i++) {
		var name = "R" + i;
		var ID = Math.floor(Math.random()*100)+1;
		var book = new Book(name, ID, false, true, null);
		if(ID%4 == 0) {
			this.shelves[0].books.push(book);
		}
		else if(ID%4 == 1) {
			this.shelves[1].books.push(book);
		}
		else if(ID%4 == 2) {
			this.shelves[2].books.push(book);
		}
		else if(ID%4 == 3) {
			this.shelves[3].books.push(book);
		}
	}
	
	
	for(var i=1; i<21;i++) {
		var name = "B" + i;
		var ID = Math.floor(Math.random()*100+1);
		
		var book = new Book(name, ID, true, false, null);
		
		if(ID%4 == 0) {
			this.shelves[0].books.push(book);
		}
		else if(ID%4 == 1) {
			this.shelves[1].books.push(book);
		}
		else if(ID%4 == 2) {
			this.shelves[2].books.push(book);
		}
		else if(ID%4 == 3) {
			this.shelves[3].books.push(book);
		}
	}
	
}

function Shelf(name, num){
	this.name = name;
	this.num = num;
	this.books = new Array();
}

function Book(name, ID, isAva, isRef, user) {
	this.name = name;
	this.ID = ID;
	this.isAva = isAva;
	this.isRef = isRef;
	this.user = user;
}

function User(name) {
	this.name = name;
	this.account = 0;
}


Library.prototype.drawTable = function() {
	myLibrary = new Library("myLibrary");
	
	if (window.localStorage.getItem("shelves") !== null){
		myLibrary.shelves = JSON.parse(localStorage.getItem("shelves"));
	}
	
	var n = myLibrary.shelves[0].books.length + 1;
	for(i=1; i<4; i++){
		if(myLibrary.shelves[i].books.length + 1 > n){
			n = myLibrary.shelves[i].books.length + 1;
		}
	}
	
	//var n = 7;
	var m=4;
	
	mytable = $("<table id='mytable' border='2'></table>"); 
    mytablebody = $('<tbody></tbody>'); 

	curr_row = $('<tr></tr>');
	for(col = 0; col< m; col++){
			curr_cell = $('<td></td>');
			curr_text = myLibrary.shelves[col].name;
			curr_cell.append(curr_text);
	        curr_row.append(curr_cell);
	}
		mytablebody.append(curr_row);
	
	
    for(row = 1; row < n; row++) {
	      curr_row = $('<tr></tr>');

	      for(col = 0; col < m; col++) {
	          curr_cell = $('<td></td>');
	          
			  if(myLibrary.shelves[col].books[row-1]){
				curr_text = myLibrary.shelves[col].books[row-1].name;
				
				
				//check color here
				if(myLibrary.shelves[col].books[row-1].isAva == false && myLibrary.shelves[col].books[row-1].isRef == false){
				  $(curr_cell).css("background-color", "red");
			  }
			  else{
				  $(curr_cell).css("background-color", "lightblue");
			  }
				
			  }
			  else{
				  curr_text = "";
			  }
	          curr_cell.append(curr_text);
	          curr_row.append(curr_cell);
			  
	      }
	      mytablebody.append(curr_row); 
    }
    mytable.append(mytablebody);
    mytable.insertBefore($('#tablecreate')); 
	
	var saveData = JSON.stringify(myLibrary.shelves);
	localStorage.setItem("shelves", saveData);
	
	$("#mytable td").click(function () {
		$("#borrow").hide();
		$("#return").hide();
		var username = window.localStorage.getItem("username");
		x = $(this).parent().index('tr');
		y = this.cellIndex;
		var value = $(this).html();
		if (value === "" && username == "admin") {
			console.log("Add book here");
			$("#description").hide();
			$("#AddBook").show();
		} else if (value != "") {
			$("#AddBook").hide();
			book = myLibrary.shelves[y].books[x - 1];
			var data = "Book name: " + book.name + " Book ID: " + book.ID + " Reference: " + book.isRef + " Borrowed By: " + book.user + " Present: " + book.isAva;
			$("#description").html(data);
			$("#description").show();
			if (!(book.isRef) && book.isAva == true && username != "admin") {
				$("#borrow").show();

				
            }
			if (username == book.user) {
                        $("#return").show();
                    }
                }
        });
	
	
	$("#AddBook #add").click(function () {
            var name = $("#bookName").val();
            var id = $("#bookID").val();
			//var isRef = $("#isRef").val();
            var newBook = new Book(name, id, true, false, null);
            myLibrary.shelves[y].books.push(newBook);
            $("#AddBook").hide();
            $("#bookName").val("");
            $("#bookID").val("");
            var shelfString = JSON.stringify(myLibrary.shelves);
            localStorage.setItem("shelves", shelfString);
			location.reload();
        });
		
	$("#borrow").click(function () {
		var username = window.localStorage.getItem("username");
		var userList = window.localStorage.getItem(username);
		var tempuser;
		if(userList == undefined){
			tempuser = new User(username);
			book.isAva = false;
			book.user = username;
			tempuser.account += 1;
			localStorage.setItem(username, tempuser.account);
			
			var borrowBook = JSON.stringify(myLibrary.shelves);
			localStorage.setItem("shelves", borrowBook);
			userList = JSON.stringify(tempuser);
			localStorage.setItem(tempuser.name, userList);
			location.reload();
			console.log(localStorage.getItem(tempuser, username.account));
			console.log(1);
		}
		else {
			tempuser = JSON.parse(userList);
			console.log(tempuser);
			if(tempuser.account<2){
				book.isAva = false;
				book.user = username;
				tempuser.account += 1;
				localStorage.setItem("accountBook", username, username.account);
				var borrowBook = JSON.stringify(myLibrary.shelves);
				localStorage.setItem("shelves", borrowBook);
				userList = JSON.stringify(tempuser);
				localStorage.setItem(tempuser.name, userList);
				location.reload();
				console.log(localStorage.getItem(username, username.account));
			}
		}
		console.log(localStorage.getItem(username, username.account));
		console.log(2);
	})
	
	$("#return").click(function () {
		var username = window.localStorage.getItem("username");
		var userList = window.localStorage.getItem(username);
		var tempuser = JSON.parse(userList);
		if(book.user == username){
		book.isAva = true;
		book.user = null;
		tempuser.account -= 1;
		userList = JSON.stringify(tempuser);
		localStorage.setItem(tempuser.name, userList);
		var returnBook = JSON.stringify(myLibrary.shelves);
		localStorage.setItem("shelves", returnBook);
		
		location.reload();
		console.log(localStorage.getItem(username, username.account));
		}
	})
	
}

$("#submit").click(function () {
	user = new User($("#username"));
	user.name = $("#username");
})

$(document).ready(function() {
	//window.localStorage.clear();
	Library.prototype.drawTable();
})