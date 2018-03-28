/* global $ */ /*global number*/ /* global operator */ /* global newNumber */

$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totalDiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totalDiv.text("Err");
            }//if
        }//if 
    };//var
   
var number = "number";
var newNumber = "newNumber";
var operator = "operators";
//var totalDiv = $("#total").text();
var totalDiv = $("#total");
    totalDiv.text("0");

$("#numbers > a").not("#clear,#clearall").click(function(){ // # buttons clickable except the C and AC
		number += $(this).text();
		totalDiv.text(number);
		testNumLength(number); 
		//console.log("You clicked!");
    });
    
//$("#numbers a").not("#clear,#clearAll").click(function(){number.append(this.html());
   // testNumLength(number); 
    
    
    $("#operators a").not("#equals").click(function(){ // [x, /, +, -,] button clickable except the =
       operator = $(this).text();
		newNumber = number;
		number = "";
		totalDiv.text("0");
		//console.log("You clicked!");
    });
    
     $("#clear, #clearAll").click(function(){ // C and AC button
        //number="";
        //newNumber="";
        //totalDiv.text("0");
        number = "";
		totalDiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newNumber = "";
			
		}
    });
    
    $("#equals").click(function(){ // [=] button clickable
		if (operator === "+"){
			number = (parseInt(number, 10) + parseInt(newNumber,10)).toString(10);
		} else if (operator === "-"){
			number = (parseInt(newNumber, 10) - parseInt(number,10)).toString(10);
		} else if (operator === "/"){
			number = (parseInt(newNumber, 10) / parseInt(number,10)).toString(10);
		} else if (operator === "*"){
			number = (parseInt(newNumber, 10) * parseInt(number,10)).toString(10);
		}
		totalDiv.text(number);
		testNumLength(number);
		number = "";
		newNumber = "";
		
    });//equal
    
     $("#operators a, #side a, #sqrt").not("#equals,#decimal").click(function(){
    if ($(this).attr("id") === "sqrt") {
        operator = "sqrt";
        $("#equals").click();
        console.log("You clicked square root!");
        return;
    }
    operator = $(this).text();
    newNumber = number;
    number = "";
    totalDiv.text("0");
    });
});//document