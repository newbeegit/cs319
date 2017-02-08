function checkFunction(){
	var Email, Phone, Address;
	
	//var check = false; // blooean for checking
	
	Email = document.getElementById("Email").value;
	Phone = document.getElementById("Phone").value;
	Address = document.getElementById("Address").value;
	
	
	var check1 = false;
	var check2 = false;
	var check3 = false;
	var notice;
	
	
	var EmailCheck = document.getElementById("EmailCheck");
	var PhoneCheck = document.getElementById("PhoneCheck");
	var AddressCheck = document.getElementById("AddressCheck");
	
	var checkEmail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-zA-Z]+$/;
	var checkPhone = /^([0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10})$/;
	var checkAddress = /^[a-zA-Z ]+\, [A-Za-z]+$/;
	
	
	if(checkEmail.test(Email)){
		EmailCheck.src = './correct.png';
		check1 = true;
	}
	else{
		EmailCheck.src = './wrong.png';
		check1 = false;
	}
	
	if(checkPhone.test(Phone)){
		PhoneCheck.src = './correct.png';
		check2 = true;
	}
	else{
		PhoneCheck.src = './wrong.png';
		check2 = false;
	}
	
	if(checkAddress.test(Address)){
		AddressCheck.src = './correct.png';
		check3 = true;
	}
	else{
		AddressCheck.src = './wrong.png';
		check3 = false;
		notice = "There is a comma and a space after comma between city and state     example: Ames, IA ";
		document.getElementById("notice").innerHTML = notice;
	}
	
	
	
	if(check1 && check2 && check3){
		
			//window.location.href = "./plot.html";
			//localStorage.setItem("Address", Address);
			
			localStorage.setItem("address", Address);
			
			var cookies = document.cookie.split(";");
			for (var i = 0; i < cookies.lenth; i++){
				var temp = cookies[i].split(":");
				document.cookie = temp[0] + "=;expires = Thu, 21 Sep 1979 00:00:00 UTC;"
			}
	
		window.location.href = "./map.html";
	}
}
