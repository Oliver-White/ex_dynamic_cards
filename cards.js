let create = document.getElementById("create");
let user_input = document.getElementById("user_input");
let output = document.getElementById("output");

function create_card() {
	let card = '<div class="card">' + '<h1>' + user_input.value + '</h1>' + '<button id="delete">Delete</button>' + '</div>';
	output.innerHTML += card;
}

function delete_card(stuff) {
	if (event.target.innerHTML === "Delete") {
		event.target.parentElement.remove();      
	}	
}

function enter_key(enter) {
	if (event.keyCode === 13) {
		create_card();
	}
}

create.addEventListener("click", create_card);
user_input.addEventListener("keydown", enter_key);
output .addEventListener("click", delete_card)