$(document).ready(function() {
// Keeps track object values
	var inventory = {
	  producT: {
	    money: 1000,
	    cookies: 0
	  },
	  ingredients: {
	    sugar: 10,
	    flour: 10
	  },
	  pot: {
	    sugar: 0,
	    flour: 0
	  }
	};
// Button click handler functions
	$('.use-sugar').click(function() {
		if(inventory.ingredients.sugar > 0){
			inventory.ingredients.sugar -= 1;
			inventory.pot.sugar += 1;
			$(".sugar").text(inventory.ingredients.sugar);
			$(".sugarPot").text(inventory.pot.sugar);
		}
	});

	$('.use-flour').click(function() {
		if(inventory.ingredients.flour > 0){
			inventory.ingredients.flour -= 1;
			inventory.pot.flour += 1;
			$(".flour").text(inventory.ingredients.flour);
			$(".flourPot").text(inventory.pot.flour);
		}
	});

	$('.buy-sugar').click(function() {
		if(inventory.producT.money >= 10){
			inventory.producT.money -= 10;
			inventory.ingredients.sugar += 1;
			$(".money").text(inventory.producT.money);
			$(".sugar").text(inventory.ingredients.sugar);
		}
    });

	$('.buy-flour').click(function() {
		if(inventory.producT.money >= 15){
			inventory.producT.money -= 15;
			inventory.ingredients.flour += 1;
			$(".money").text(inventory.producT.money);
			$(".flour").text(inventory.ingredients.flour);
		}
	});

	$(".cook").click(function() {
		if(inventory.pot.sugar >= 3 & inventory.pot.flour >= 6){
			inventory.pot.sugar -= 3;
			inventory.pot.flour -= 6;
			inventory.producT.cookies += 1;
			$(".sugarPot").text(inventory.pot.sugar);
			$(".flourPot").text(inventory.pot.flour);
			$(".cookies").text(inventory.producT.cookies);
		}
	})
});
