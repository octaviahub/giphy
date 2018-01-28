$(document).ready(function() {

	let brands = [

		"zara", "urban outfitters", "fabletics", "steve madden", "aldo", "american eagle", 
		"forever 21", "nike", "addidas", "coach", "north face", "canada goose", "moncler", 
		"gap", "lululemon", "atletica", "liz claiborne", "calvin klien", "michael kors", 
		"lucky brand", "tommy hilfiger", "versace", "gucci", "kate spade", "anne klein" 

	];

function generatebtn(arrayToUse, classToAdd, areaToAddTo) {
	$(areaToAddTo).empty();

	for(let i = 0; i < arrayToUse.length; i ++) {
		let a = $("<button>");
		a.addClass(classToAdd);
		a.attr("data-type", arrayToUse[i]);
		a.text(arrayToUse[i]);
		$(areaToAddTo).append(a);

	}
}

$(document).on()





//create an array of strings, each one related to a topic that interests you. 
//Save it to a variable called `topics`.

// const topic = ([
// 	,
// 	];

// function generateBtn () 
// 	{ 
// //loop that appends a button for each string in the array

// for (let i = 0; i < topics.length; i ++) 
// 	{
// 	]

// 	let generateBtn = $('<btn>' + topics.text + '</btn>')
// 	btn.attr("id", "btn" + "topic")

// 	btn.append('topics');
// }};

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.



//4. When the user clicks one of the still GIPHY images, the gif should animate. 
// If the user clicks the gif again, it should stop playing.

//5. Under every gif, display its rating (PG, G, so on).
// * This data is provided by the GIPHY API.
//* Only once you get images displaying with button presses should you move on to the next step.

//6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. 

//Then make a function call that takes each topic in the array remakes the buttons on the page.

//7. Deploy your assignment to Github Pages.