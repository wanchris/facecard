var groups = ["BIO100", "BIO101", "BIO102", "BIO103", "BIO104", "BIO105"];


var decks = {"BIO100 test 1":["midochondria 1", "midochondria 2"], "BIO100 test 2":["membrane 1"], "BIO100 test 3":["enzymes 1"], "BIO100 final": ["virus 1"]};

var cards = {"midochondria 1": {}, "midochondria 2": {}, "membrane 1": {}, "enzymes 1": {}, "virus 1": {}};

var openedDeck = "";


$(function() {
	makeGroupList();
	makeDecks();
});


function makeGroupList() {
	document.getElementById('group-list').innerHTML = '';
	
	for (index in groups) {
		$('#group-list').append("<li><a href='/group' class='group'><span><strong>" + groups[index] + "</strong></span></a></li>");
	}
}

function makeDecks() {
	for (deck in decks) {
		$('#deck-list').append("<div id='" + deck + "' class='cards' onclick='showOverlay(this.id)'><button><h1><strong>" + deck + "</strong></h1></button></div>");
	}
}

function showPopup(id) {
	document.getElementById(id).style.display = "block";
}

function showOverlay(id) {
	document.getElementById("catalog").innerHTML = '';
	document.getElementById("deck-overlay").style.display = "block";
	
	var listOfCards = decks[id];

	
	for (index in listOfCards) {
		console.log(listOfCards[index]);
		$('#catalog').append("<li class='card' id='" + listOfCards[index] + "'><a href='/cue'><button><h1><strong>Click to show card</strong></h1></button></a></li>");
	}
	
	openedDeck = id;
}


function hideOverlay(overlay) {
	document.getElementById(overlay).style.display = "none";
	openedDeck = "";
}

function addNewDeck() {
	var deckName = document.getElementById("new-deck-name").value;
	
	decks[deckName] = [];
	
	document.getElementById("deck-list").innerHTML = '';
	
	makeDecks();
	
	hideOverlay('new-deck-overlay');
}

function addNewCard() {
	var deckName = document.getElementById("new-card-name").value;
	var question = document.getElementById("new-card-question").value;
	var answer = document.getElementById("new-card-answer").value;
	
	
	decks[openedDeck].push(deckName);
	cards[deckName] = {"question": question, "answer": answer};
	
	showOverlay(openedDeck);
	hideOverlay('new-card-overlay');
}
