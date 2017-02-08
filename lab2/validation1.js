function myFunction(){
	var FirstName, LastName, Gender, State, FirstNameCheck, LastNameCheck, GenderCheck, StateCheck;
	
	//var check = false; // blooean for checking
	
	FirstName = document.getElementById("FirstName").value;
	LastName = document.getElementById("LastName").value;
	Gender = document.getElementById("Gender").value;
	State = document.getElementById("State").value;
	
	FirstNameCheck = document.getElementById("FirstNameCheck");
	LastNameCheck = document.getElementById("LastNameCheck");
	GenderCheck = document.getElementById("GenderCheck");
	StateCheck = document.getElementById("StateCheck");
	
	var check1 = false;
	var check2 = false;
	var check3 = false;
	var check4 = false;
	
	var State = document.getElementById("State");
	var Gender = document.getElementById("Gender");
	
	
	
	if(checkname(FirstName)){
		FirstNameCheck.src = './correct.png';
		check1 = true;
	}
	else{
		FirstNameCheck.src = './wrong.png';
		check1 = false;
	}
	
	if(checkname(LastName)){
		LastNameCheck.src = './correct.png';
		check2 = true;
	}
	else{
		LastNameCheck.src = './wrong.png';
		check2 = false;
	}
	
	if(Gender.selectedIndex == 0){
		GenderCheck.src = './wrong.png';
		check3 = false;
	}
	else{
		GenderCheck.src = './correct.png';
		check3 = true;
	}
	
	if(State.selectedIndex == 0){
		StateCheck.src = './wrong.png';
		check4 = false;
	}
	else{
		StateCheck.src = './correct.png';
		check4 = true;
	}
	
	if(check1 && check2 && check3 && check4){
		
	var selectedGender = Gender.options[Gender.selectedIndex].value;
	var selectedState = State.options[State.selectedIndex].value;
	
	savecookie(FirstName, LastName, selectedGender, selectedState);
	
	window.location.href = "./validation2.html";
	}
}
	
	function checkname(word){
		
		var temp = false;
		if (word.length!=0){
			if (!/[^a-zA-Z]/.test(word)){
				temp = true;
										}
							}
		return temp;
	}
		

	function savecookie(a,b,c,d) {
			document.cookie = "firstname: "+ a +" lastname: "+ b + " gender: " + c + " state: "+ d;
			console.log(document.cookie);
	}
