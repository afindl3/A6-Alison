$(document).ready(function(){

	//Create an array with the following values:
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
	var citiesLength = cities.length;
	var input, inputMod;
	
	//Use the array to add values to the <select> menu by using a 
	//for loop in javascript (don't update the html to do this)
	for(i=0; i<citiesLength; i++){
		//Use $.append() in your iteration on the drop-down menu
		$("#city-type").append('<option value = " '+cities[i]+' "> '+cities[i]+'</option>');
	}	

	//Use the $.change event handler to capture user action
	$("select").change(function(){
		//Get the value of user input using $.val()
		input = $('#city-type').val();
		inputMod = (String(input)).trim();

		//Use if/else if/else conditionals to control the flow of your application
		if (inputMod == "NYC"){
			//Use the $.attr() function to update html classes
			$("body").attr("class", "nyc");
		}
		else if (inputMod == "SF"){
			$("body").attr("class", "sf");
		}
		else if (inputMod == "LA"){
			$("body").attr("class", "la");
		}
		else if (inputMod == "ATX"){
			$("body").attr("class", "austin");
		}
		else if (inputMod == "SYD"){
			$("body").attr("class", "sydney");
			//$('body').css('background-image','url(images/sydney.jpg)');
		}
	
		console.log(inputMod);
	});	//end change
	
	console.log(inputMod);	//undefined.. why??
});	//end ready