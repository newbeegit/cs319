// CALCULATOR.JS
//
//
//
var memory = [];
var equation ="";
var num =0;

var Calc = {

Model : {
},



View : {
  display : {id: "display", type: "text", value: ""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  button2 : {id: "button2", type: "button", value: 0, onclick:""},
  button3 : {id: "button3", type: "button", value: "~", onclick:""},
  button4 : {id: "button4", type: "button", value: "+", onclick:""},
  button5 : {id: "button5", type: "button", value: "<<", onclick:""},
  button6 : {id: "button6", type: "button", value: ">>", onclick:""},
  button7 : {id: "button7", type: "button", value: "-", onclick:""},
  button8 : {id: "button8", type: "button", value: "&", onclick:""},
  button9 : {id: "button9", type: "button", value: "|", onclick:""},
  button10 : {id: "button10", type: "button", value: "*", onclick:""},
  button11 : {id: "button11", type: "button", value: "/", onclick:""},
  button12 : {id: "button12", type: "button", value: "MR", onclick:""},
  button13 : {id: "button13", type: "button", value: "M-", onclick:""},
  button14 : {id: "button14", type: "button", value: "M+", onclick:""},
  button15 : {id: "button15", type: "button", value: "C", onclick:""},
  button16 : {id: "button16", type: "button", value: "MC", onclick:""},
  button17 : {id: "button17", type: "button", value: "=", onclick:""}
},

Controller : {

},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>" + Calc.displayElement(Calc.View.display) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button1);
  s += "  "
  s += Calc.displayElement(Calc.View.button2);
  s += "  "
  s += Calc.displayElement(Calc.View.button3);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button4);
  s += " "
  s += Calc.displayElement(Calc.View.button5);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button6);
  s += "  "
  s += Calc.displayElement(Calc.View.button7);
  s += "  "
  s += Calc.displayElement(Calc.View.button8);
  s += "  "
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button9);
  s += "  "
  s += Calc.displayElement(Calc.View.button10);
  s += "  "
  s += Calc.displayElement(Calc.View.button11);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button12);
  s += " ";
  s += Calc.displayElement(Calc.View.button13);
  s += "  "
  s += Calc.displayElement(Calc.View.button14);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button15);
  s += "  "
  s += Calc.displayElement(Calc.View.button16);
  s += " ";
  s += Calc.displayElement(Calc.View.button17);
  s += "</tr></td></table>";
  
  return s;
},

attachHandlers : function() {
  
  Calc.View.button1.onclick = "Calc.buttonHandler(1)"; 
  Calc.View.button2.onclick = "Calc.buttonHandler(2)"; 
  Calc.View.button3.onclick = "Calc.buttonHandler(3)"; 
  Calc.View.button4.onclick = "Calc.buttonHandler(4)"; 
  Calc.View.button5.onclick = "Calc.buttonHandler(5)"; 
  Calc.View.button6.onclick = "Calc.buttonHandler(6)"; 
  Calc.View.button7.onclick = "Calc.buttonHandler(7)"; 
  Calc.View.button8.onclick = "Calc.buttonHandler(8)"; 
  Calc.View.button9.onclick = "Calc.buttonHandler(9)"; 
  Calc.View.button10.onclick = "Calc.buttonHandler(10)"; 
  Calc.View.button11.onclick = "Calc.buttonHandler(11)"; 
  Calc.View.button12.onclick = "Calc.buttonHandler(12)"; 
  Calc.View.button13.onclick = "Calc.buttonHandler(13)"; 
  Calc.View.button14.onclick = "Calc.buttonHandler(14)"; 
  Calc.View.button15.onclick = "Calc.buttonHandler(15)"; 
  Calc.View.button16.onclick = "Calc.buttonHandler(16)"; 
  Calc.View.button17.onclick = "Calc.buttonHandler(17)"; 
  
},




	

buttonHandler : function(x) {
	
	if(x==1){
		document.getElementById("display").value += "1";
		//console.log(num);
	}
	if(x==2){
		document.getElementById("display").value += "0";
	}
	//reverse ~ function
	if(x==3){
		var temp = document.getElementById("display").value;
		var  n = temp.toString();
		var result = "";
		for(var i = 0 ; i< n.length; i++){
			if(n.charAt(i) == '0'){
				result += '1';
			}
			else if(n.charAt(i)=='1'){
				result += '0';
			}
		}
		document.getElementById("display").value = result;
	}
	//pluse function
	if(x==4){
		var temp = document.getElementById("display").value;
		var dec = parseInt(temp, 2);
		document.getElementById("display").value = "";
		equation += dec;
		equation += "+";
	}
	// << function
	if(x==5){
		var temp = document.getElementById("display").value;
		var dec = parseInt(temp, 2);
		document.getElementById("display").value = "";
		equation += dec;
		equation += "<<";
	}
	// >> function
	if(x==6){
		var temp = document.getElementById("display").value;
		var dec = parseInt(temp, 2);
		document.getElementById("display").value = "";
		equation += dec;
		equation += ">>";
	}
	// minus (-) function
	if(x==7){
		var temp = document.getElementById("display").value;
		var dec = parseInt(temp, 2);
		document.getElementById("display").value = "";
		equation += dec;
		equation += "-";
	}
	// AND function
	if(x==8){
		var temp = document.getElementById("display").value;
		var dec = parseInt(temp, 2);
		document.getElementById("display").value = "";
		equation += dec;
		equation += "&";
	}
	// OR function
	if(x==9){
		var temp = document.getElementById("display").value;
		var dec = parseInt(temp, 2);
		document.getElementById("display").value = "";
		equation += dec;
		equation += "|";
	}
	// + Function
	if(x==10){
		var temp = document.getElementById("display").value;
		var dec = parseInt(temp, 2);
		document.getElementById("display").value = "";
		equation += dec;
		equation += "*";
	}
	// / Function
	if(x==11){
		var temp = document.getElementById("display").value;
		var dec = parseInt(temp, 2);
		document.getElementById("display").value = "";
		equation += dec;
		equation += "/";
	}
	
	
	
	if(x==12){
	
		if(num >= memory.length){
			num = 0;
			document.getElementById("display").value = memory[num];
			//console.log(memory[num]);
		}
		else{
			document.getElementById("display").value = memory[num];
			//console.log(num);
			//console.log(memory[num]);
			//console.log(memory.length);
			num++;
			num = num%memory.length;
		}
	}
	
	if(x==13){
		var i;
		for(i=0;i<memory.length;i++){
			if(memory[i] == document.getElementById("display").value){
				memory.splice(i,1);
			}
		}
	}
	
	if(x==14){
		
		memory.push(document.getElementById("display").value);
		
		//console.log(document.getElementById("display").value);
		//console.log(memory[0]);
	}
	
	if(x==15){
		document.getElementById("display").value = "";
	}
	
	if(x==16){
		memory = [];
	}
	
	if(x==17){
		var temp = document.getElementById("display").value;
		var dec = parseInt(temp, 2);
		equation += dec;
		var equals = eval(equation);
		var ans = equals.toString(2);
		if(isFloat(ans)){
			document.getElementById("display").value = "Cannot be devide";
		}
		else{
				document.getElementById("display").value = ans;
			}
		equation = "";
	}
}


} 

function isFloat(x){
	return !!(x % 1);
}

// end of Calc;
