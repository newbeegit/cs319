// CALCULATOR.JS
//
//
//
var memory = [];
var n = 0;
// 
var Calc = {

Model : {
},



View : {
  display : {id: "display", type: "text", value: ""},
  button1 : {id: "button1", type: "button", value: 7, onclick:""},
  button2 : {id: "button2", type: "button", value: 8, onclick:""},
  button3 : {id: "button3", type: "button", value: 9, onclick:""},
  button4 : {id: "button4", type: "button", value: "+", onclick:""},
  button5 : {id: "button5", type: "button", value: 4, onclick:""},
  button6 : {id: "button6", type: "button", value: 5, onclick:""},
  button7 : {id: "button7", type: "button", value: 6, onclick:""},
  button8 : {id: "button8", type: "button", value: "-", onclick:""},
  button9 : {id: "button9", type: "button", value: 1, onclick:""},
  button10 : {id: "button10", type: "button", value: 2, onclick:""},
  button11 : {id: "button11", type: "button", value: 3, onclick:""},
  button12 : {id: "button12", type: "button", value: "*", onclick:""},
  button13 : {id: "button13", type: "button", value: 0, onclick:""},
  button14 : {id: "button14", type: "button", value: ".", onclick:""},
  button15 : {id: "button15", type: "button", value: "=", onclick:""},
  button16 : {id: "button16", type: "button", value: "/", onclick:""},
  button17 : {id: "button17", type: "button", value: "C", onclick:""},
  button18 : {id: "button18", type: "button", value: "MR", onclick:""},
  button19 : {id: "button19", type: "button", value: "M-", onclick:""},
  button20 : {id: "button20", type: "button", value: "M+", onclick:""},
  button21 : {id: "button21", type: "button", value: "MC", onclick:""}
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
  s += "  "
  s += Calc.displayElement(Calc.View.button4);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button5);
  s += "  "
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
  s += "  "
  s += Calc.displayElement(Calc.View.button12);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button13);
  s += "  "
  s += Calc.displayElement(Calc.View.button14);
  s += "  "
  s += Calc.displayElement(Calc.View.button15);
  s += "  "
  s += Calc.displayElement(Calc.View.button16);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button17);
  s += "  "
  s += Calc.displayElement(Calc.View.button18);
  s += "  "
  s += Calc.displayElement(Calc.View.button19);
  s += "  "
  s += Calc.displayElement(Calc.View.button20);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button21);
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
  Calc.View.button18.onclick = "Calc.buttonHandler(18)"; 
  Calc.View.button19.onclick = "Calc.buttonHandler(19)"; 
  Calc.View.button20.onclick = "Calc.buttonHandler(20)"; 
  Calc.View.button21.onclick = "Calc.buttonHandler(21)"; 
},




	

buttonHandler : function(x) {
	
	if(x==1){
		document.getElementById("display").value += "7";
		
	}
	if(x==2){
		document.getElementById("display").value += "8";
	}
	if(x==3){
		document.getElementById("display").value += "9";
	}
	if(x==4){
		document.getElementById("display").value += "+";
	}
	if(x==5){
		document.getElementById("display").value += "4";
	}
	if(x==6){
		document.getElementById("display").value += "5";
	}
	if(x==7){
		document.getElementById("display").value += "6";
	}
	if(x==8){
		document.getElementById("display").value += "-";
	}
	if(x==9){
		document.getElementById("display").value += "1";
	}
	if(x==10){
		document.getElementById("display").value += "2";
	}
	if(x==11){
		document.getElementById("display").value += "3";
	}
	if(x==12){
		document.getElementById("display").value += "*";
	}
	if(x==13){
		document.getElementById("display").value += "0";
	}
	if(x==14){
		document.getElementById("display").value += ".";
	}
	if(x==15){
		var equals = eval(document.getElementById("display").value);
		document.getElementById("display").value = equals;
	}
	if(x==16){
		document.getElementById("display").value += "/";
	}
	if(x==17){
		document.getElementById("display").value = "";
	}
	if(x==18){
	
		if(n >= memory.length){
			n = 0;
			document.getElementById("display").value = memory[n];
		}
		else{
			document.getElementById("display").value = memory[n];
			n++;
			n = n%memory.length;
		}
	}
	if(x==19){
		var i;
		for(i=0;i<memory.length;i++){
			if(memory[i] == document.getElementById("display").value){
				memory.splice(i,1);
			}
		}
	}
	if(x==20){
		
		memory.push(document.getElementById("display").value);
	}
	if(x==21){
		memory = [];
	}
}


} // end of Calc;
