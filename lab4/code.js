$(document).ready(function() {
	var n=0;
	$(document.getElementById('1')).click( function() {
		<!--effect: change color to blue-->
          if(n%5==0){
		  $("p1").css("color","blue").show();
		  n++;
		  }
		  <!--effect: change background color to yellow-->
		  else if(n%5==1){
		  $("p1").css("background-color","yellow").show();
		  n++;
		  }
		  <!--effect: change padding to 30px-->
		  else if(n%5==2){
		  $("p1").css("padding","30px").show();
		  n++;
		  }
		  <!--effect: change margin to 20px & change background color to red-->
		  else if(n%5==3){
		  $("p1").css("margin","20px").show();
		  $("p1").css("background-color","red").show();
		  n++;
		  }
		  <!--effect: change color to green & change border to 1px solid powerblue-->
		  else if(n%5==4){
		  $("p1").css("color","green").show();
		  $("p1").css("border", "1px solid powderblue").show();
		  n++;
		  }
       });
	
	var m=0;
	$(document.getElementById('2')).click( function() {
		<!--effect: hide p2-->
          if(m%6==0){
		  $("p2").hide();
		  m++;
		  }
		  <!--effect: show hidden p2-->
		  else if(m%6==1){
		  $("p2").show();
		  m++;
		  }
		  <!--effect: slide up p2-->
		  else if(m%6==2){
		  $("p2").slideUp(500);
		  m++;
		  }
		  <!--effect: slide down p2-->
		  else if(m%6==3){
		  $("p2").slideDown(400);
		  m++;
		  }
		  <!--effect: fade out p2-->
		  else if(m%6==4){
		  $("p2").fadeOut(1000);
		  m++;
		  }
		  <!--effect: fade in p2-->
		  else if(m%6==5){
		  $("p2").fadeIn(500);
		  m++;
		  }
		  
       });
	
	
	var temp=0;
	$(document.getElementById('3')).click( function() {
		<!--effect: hide p2-->
         
		  $("p3").fadeIn(1000);
		  temp++;
		  
		  
       });
	   
	  // effects of moving mouse on p3, left P3, click p3 
	   
	   $("p3").on({
			mouseenter: function(){
				$("p3").css("color","blue").show();	
			},
			mouseleave: function(){
				$("p3").css("color","red").show();
			},
			click: function() {
				$("p3").fadeOut(1000);
			}
	   })
	
})