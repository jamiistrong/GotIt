
$(document).ready(function(){
	//To get started show input hint, in focus;
	$('#enterItem').show();
	$('#enterItem').focus();
	$('#enterItem').val("Enter an item here");
	//clear input field on click
	$('#enterItem').click(function(){
		$('#enterItem').val("");
	});
	
	//var userItems and userCart will store info as cookie/local storage
	var userItems;
	var userCart;
	var userTotal;
	var itemTotals;

	//fetch saved/written data for userCart
	/*userCart = window.localStorage.getItem("cart_usercart");
	if(userCart){
	  	$('.checkoutNow').html(userCart);
	}
	else{
		//alert('Cart was not saved properly.');
	}*/

	//fetch saved/written data for userItems
	userItems = window.localStorage.getItem("cart_useritems");
	if(userItems){
	  	$('.tasks').html(userItems);
	  	$('#enterItem').focus(function(){
			$('#enterItem').val('');
		});	
	}
	else{
		//alert('List was not saved properly.');
	}

	/*userTotal = window.localStorage.getItem("cart_usertotal");
	if(userTotal){
	  	//$('.tasks').html(userItems);
	  	$('#cart-bottom').text(userTotal);
	}
	else{
		//alert('Total was not saved properly.');
	}*/


	/*itemTotals = window.localStorage.getItem("cart_itemtotals");
	$('.amount').each(function(){
		if(itemTotals){
		  		$(this).val(itemTotals);
		}
		else{
			//alert('iemTotals were not saved properly.');
		}
	});*/

	//menu link to toggle cart
	var body = $('body');
	$('#question').click(function(){
		body.toggleClass('menu-open');
		return false;
	});
	//prepare to count number of items in accumilating list
	var counter=0;
	
	
	//when ENTER is pressed: add item to list, increase items counter, save list in cookie/local storage
	$( '#enterItem' ).keydown(function(e) {
			if (e.keyCode == 13) {
		        var newItem1 = $('#enterItem').val();
				var addMe = $('<fieldset class="tasks-list"><label class="tasks-list-item"><input type="checkbox" unchecked name="task_'+ counter + '" value="'+ counter + '" class="tasks-list-cb" id="item'+ counter + '"><span class="tasks-list-desc">'+ newItem1 + '</span></label></fieldset>');
				addMe.appendTo('.tasks').html();
				userItems = $('.tasks').html();
				window.localStorage.setItem("cart_useritems", userItems);
				counter++;
				$('#enterItem').focus();
				//$('#empty').hide();
				$('.cart-top-info').text(counter + ' items left to get');
				setTimeout(function() {
			$('#enterItem').val("");
			}, 050);
		    //return false;
	    	}
	    });

	
	//create add2CO which takes the input and moves it to  cart
	var add2CO;
	//adds item to cart
	$('section').on("click", 'fieldset', function(event){
		//console.log($(this).text());
		counter--;
		//(words).toggle('id', 'shopItem');
		$(this).css('text-decoration','line-through');
		$(this).fadeOut('slow', 'linear');
		//$('.tasks-list-mark').css('border-color', '#39ca74')
		//return false;
		var add2CO = $(this).text();
		$(this).text('got it!');
		$('.cart-top-info').text(counter + ' items left to get');
		var pricing="";
	  	var add2Cart = $('<li id= "li'+counter+'" class="cart-item"><button class="delete">X</button>' + add2CO+ '<div class="cart-item-price edit_area" >$<input type="number" step="any" class="amount" width="100px"/></div></li>')
	  	add2Cart.appendTo('.checkoutNow').html();
	  	
	  	//rewrite the tasks list as it updates/item are removed
	  	setTimeout(function(){
		  	userItems = $('.tasks').html();
			window.localStorage.setItem("cart_useritems", userItems);
			//save checkout items to local storge
		  	//userCart = $('.checkoutNow').html();
		  	//window.localStorage.setItem("cart_usercart", userCart);
	  	},1000);
		//////////////////////

		if(counter == 0){

		//$('#empty').show();
	}


		$('.delete').css('background-color', 'red');
		$('.delete').css('border-radius', '5px');
		$('.delete').css('margin-right', '10px');
		$('.delete').css('text-align', 'center');
		$('.delete').click(function(){
			$(this).parent().remove();

			
			var sumd = 0;
			$('.amount').each(function(){
	    		sumd += parseFloat(this.value);
	    		parseFloat($('#cart-bottom').text(' $' + sumd));
			});	
			if(sumd <= 0){
					parseFloat($('#cart-bottom').text(' $0.00'));
				}
			if(isNaN(sumd)){
				parseFloat($('#cart-bottom').text(' $0.00'));
			}
		});

		////////////////////
		$('.amount').focus();	
	});
	

////////////////////////////////////////////////////////////
/*ADD QUICK ITEM TO LIST*/
///////////////////////////////////////////////////////////

				$( '#q1' ).click(function(e) {
				
					$('<fieldset class="tasks-list"><label class="tasks-list-item"><input type="checkbox" unchecked name="task_'+ counter + '" value="'+ counter + '" class="tasks-list-cb" id="item'+ counter + '"><span class="tasks-list-desc">'+ 'Gasoline'+ '</span></label></fieldset>').appendTo('.tasks').html();
					counter++;
					$('#enterItem').focus();
					//$('#empty').hide();
					$('.cart-top-info').text(counter + ' items left to get');
					setTimeout(function() {
						$('#enterItem').val("");
						//$('#q1').css('border', '2px solid blue');
					//}, 050);
				});
					

					 //$('#q1').fadeOut('slow', 'linear');
				    	
				});



				$( '#q2' ).click(function(e) {
				
					$('<fieldset class="tasks-list"><label class="tasks-list-item"><input type="checkbox" unchecked name="task_'+ counter + '" value="'+ counter + '" class="tasks-list-cb" id="item'+ counter + '"><span class="tasks-list-desc">'+ 'Milk' + '</span></label></fieldset>').appendTo('.tasks').html();
					counter++;
					$('#enterItem').focus();
					//$('#empty').hide();
					$('.cart-top-info').text(counter + ' items left to get');
					setTimeout(function() {
						$('#enterItem').val("");
					}, 050);
					   //return false;
				    	
				});

				$( '#q3' ).click(function(e) {
				
					$('<fieldset class="tasks-list"><label class="tasks-list-item"><input type="checkbox" unchecked name="task_'+ counter + '" value="'+ counter + '" class="tasks-list-cb" id="item'+ counter + '"><span class="tasks-list-desc">'+ 'Bread'+ '</span></label></fieldset>').appendTo('.tasks').html();
					counter++;
					$('#enterItem').focus();
					//$('#empty').hide();
					$('.cart-top-info').text(counter + ' items left to get');
					setTimeout(function() {
						$('#enterItem').val("");
					}, 050);
					   //return false;
				    	
				});

				$( '#q4' ).click(function(e) {
			
				$('<fieldset class="tasks-list"><label class="tasks-list-item"><input type="checkbox" unchecked name="task_'+ counter + '" value="'+ counter + '" class="tasks-list-cb" id="item'+ counter + '"><span class="tasks-list-desc">'+ 'Eggs'+ '</span></label></fieldset>').appendTo('.tasks').html();
				counter++;
				$('#enterItem').focus();
				//$('#empty').hide();
				$('.cart-top-info').text(counter + ' items left to get');
				setTimeout(function() {
					$('#enterItem').val("");
				}, 050);
				   //return false;
			    	
			});


	//Update Total
	$('.cart-button').click(function(){
		var sum = 0;
		
		$('.amount').each(function(){
    		sum += parseFloat(this.value);

    		//itemTotals = $('.amount').each(function(){
    		//	$(this).value;
    		
    		//});
    		//window.localStorage.setItem("cart_itemtotals", itemTotals);
    		parseFloat($('#cart-bottom').text('$' + sum ));
		});	
		//userTotal = $('#cart-bottom').text();
		//window.localStorage.setItem("cart_usertotal", userTotal);
		
		if(isNaN(sum)){
					parseFloat($('#cart-bottom').text(' $0.00'));
				}
	});
		
		

			







	
	
//$('#share').click(function(){
	//alert('Share function coming soon');
//});




	
//script of all shopping items listed
	  $(function(a) {
		var availableTags = [
		"Butter, no salt",
		"Butter, salted",
		"Cheese slices",
		"Cheese spread",
		"Cheese, specialty",
		"Chip dip",
		"Cottage cheese",
		"Cream cheese",
		"Cream, heavy",
		"Egg Nog",
		"Egg substitute",
		"Eggs",
		"Fruit juice",
		"Half & half",
		"Margarine",
		"Milk, 1%",
		"Milk, 2%",
		"Milk, chocolate",
		"Milk, goat",
		"Milk, homo",
		"Milk, whole",
		"Milk, skim",
		"Pate",
		"Ready bake goods",
		"Sour cream",
		"Soy milk",
		"Tofu",
		"Whipping cream",
		"Yogurt",
		"Allergy medication",
		"Antacids",
		"Band-Aids",
		"Bar Soap",
		"Body wash",
		"Cold medicine",
		"Conditioner",
		"Cosmetics",
		"Cotton balls",
		"Cotton swabs",
		"Deodorant",
		"Family planning",
		"Feminine products",
		"Floss",
		"Flu medicine",
		"Hair color",
		"Hair gel",
		"Hair spray",
		"Hand soap",
		"Hot/Cold rub",
		"lip balm",
		"Mosquito repellant",
		"Mousse",
		"Mouthwash",
		"Pain reliever",
		"Pepto Bismal",
		"Prescription",
		"Razors",
		"Shampoo",
		"Shaving cream",
		"Sun block",
		"Sun tan lotion",
		"Tissue paper",
		"First-aid kit",
		"Travel pack",
		"Tooth Brush",
		"Tooth Paste",
		"Vitamins",
		"Bagels",
		"Baguette",
		"Brownies",
		"Buns",
		"Cake",
		"Cheese bread",
		"Cinnamon buns",
		"Cookies",
		"Croissants",
		"Doughnuts",
		"English muffins",
		"French bread",
		"Garlic bread",
		"Hamburger buns",
		"Hot dog buns",
		"Pie",
		"Pita bread",
		"Pumpernickel",
		"Raisin bread",
		"Rye bread",
		"Sandwich bread",
		"Sourdough",
		"Tortillas,flour",
		"Tortillas,corn",
		"Burritos,flour",
		"Tortillas,corn",
		"Whole grain",
		"Vegetables", 	
		"Fruits",
		"Asparagus",
		"Avocados",
		"Basil",
		"Beets",
		"Broccoli",
		"Brussels sprouts",
		"Cabbage",
		"Carrots",
		"Cauliflower",
		"Celery",
		"Chard",
		"Chives",
		"Cilanto",
		"Collards",
		"Corn",
		"Cucumbers",
		"Egg plant",
		"Endives",
		"Garlic",
		"Green peppers",
		"Kale",
		"Kohlrabi",
		"Lettuce, iceberg",
		"Lettuce, romaine",
		"Mushrooms",
		"Onions",
		"Oregano",
		"Parsley",
		"Parsnips",
		"Potatoes",
		"Pumpkin",
		"Radishes",
		"Red peppers",
		"Rutabagas",
		"Spinach",
		"Sprouts",
		"Squash",
		"Tomatoes",
		"Yams",
		"Yellow peppers",
		"Zucchini",
		"Apples",
		"Apricots",
		"Bananas",
		"Blueberries",
		"Cantaloupe",
		"Cherries",
		"Cranberries",
		"Grapes, red",
		"Grapes, white",
		"Grapefruit",
		"Honeydew",
		"Kiwi",
		"Kumquats",
		"Limes",
		"Lemons",
		"Mangoes",
		"Melon",
		"Nectarines",
		"Oranges",
		"Papaya",
		"Peaches",
		"Pears",
		"Pineapple",
		"Plums",
		"Raspberries",
		"Strawberries",
		"Seafood",
		"Clams",
		"Cod",
		"Crab",
		"Flounder",
		"Halibut",
		"Lobster",
		"Mussels",
		"Oysters",
		"Red snapper",
		"Salmon",
		"Shrimp",
		"Tilapia",
		"Tuna",
		"Sword fish",
		"Beans, green",
		"Beef pot pie",
		"Berries",
		"Burger patties",
		"Burritos",
		"Carrots",
		"Chicken",
		"Chicken nuggets",
		"Chicken pot pie",
		"Chicken wings",
		"Corn dogs",
		"Fish sticks",
		"French fries",
		"Fruit",
		"Hash browns",
		"Ice cream",
		"Juice concentrate",
		"Mozzarella sticks",
		"Onion rings",
		"Pancakes",
		"Pasta, Fresh",
		"Peas",
		"Perogies",
		"Pie",
		"Pizza",
		"Pizza snacks",
		"Popsicles",
		"Potato nuggets",
		"Ready bake treats",
		"Sorbet",
		"Stir fry",
		"Mixed vegetables",
		"Taquitos",
		"Tater tots",
		"Turkey",
		"Turkey pot pie",
		"TV dinners",
		"Veggie burgers",
		"Waffles",
		"Meat",
		"Deli Meat",
		"Bacon",
		"Bacon, canadian",
		"Bologna",
		"Chicken bologna",
		"Chicken breast",
		"Chicken legs",
		"Chicken loaf",
		"Chicken, whole",
		"Corned beef",
		"Ground beef",
		"Ground pork",
		"Ham",
		"Ham, black forest",
		"Ham, smoked",
		"Ham, honey",
		"Hamburger",
		"Hamburger, lean",
		"Hot dogs",
		"Liver",
		"Pizza",
		"Pork chops",
		"Roast beef",
		"Salami",
		"Sausage",
		"Pepperoni",
		"Steak",
		"Turkey",
		"Turkey breast",
		"Veggie dogs",
		"Veggie burgers",
		"Aluminum foil",
		"Candles",
		"Facial tissue",
		"Lunch bags",
		"Napkins",
		"Paper plates",
		"Paper towel",
		"Plastic containers",
		"Plastic cups",
		"Plastic cutlery",
		"Plastic wrap",
		"Sandwich bags",
		"Sealable bags",
		"Toilet paper",
		"Wax paper",
		"Party favors",
		"Canned Goods", 	
		"Dry Packaged Goods",
		"Anchovies",
		"Apple sauce",
		"Bean salad",
		"Beans, baked",
		"Beans, black",
		"Beans, green fancy",
		"Beans, green",
		"Beans, refried",
		"Beans, Lima",
		"Pork & beans",
		"Soup",
		"Stew",
		"Chick peas",
		"Chicken, flaked",
		"Chili",
		"Chocolate sauce",
		"Corn, whole",
		"Corn, creamed",
		"Escargot (snails)",
		"Fruit salad",
		"Peaches",
		"Pears",
		"Pineapple",
		"Peas",
		"Ravioli",
		"Oysters",
		"Salmon",
		"Sardines",
		"Spam",
		"Tomatoes",
		"Tuna, flaked",
		"Turkey, flaked",
		"Broccoli soup",
		"Bouillon cubes, beef",
		"Bouillon cubes, chicken",
		"Chicken noodle soup",
		"Coffee whitener",
		"Coffee, ground",
		"Coffee, instant",
		"Cookies",
		"Couscous",
		"Crackers",
		"Drink crystals",
		"Mashed potatoes",
		"Instant Noodles",
		"Linguini",
		"Mac&cheese",
		"Macaroni",
		"Onion soup",
		"Potato soup",
		"Rice, brown",
		"Rice, instant",
		"Rice, long grain",
		"Rotini",
		"Spaghetti",
		"Tea",
		"Tea, herbal",
		"Spices",
		"Condiments" ,
		"Sauce",
		"All spice",
		"Basil",
		"Bay leaf",
		"Cilantro",
		"Cinnamon",
		"Cloves",
		"Garlic",
		"Ginger",
		"Meat tenderizer",
		"Mint",
		"Montreal meat spice",
		"Oregano",
		"Paprika",
		"Parsley",
		"Pepper",
		"Salt",
		"Alfredo sauce",
		"Apple sauce",
		"Chili Sauce",
		"BBQ sauce",
		"Gravy",
		"Honey",
		"Hot sauce",
		"HP sauce",
		"Jam",
		"Jelly",
		"Ketchup",
		"Marmalade",
		"Mayonnaise",
		"Meat sauce",
		"Mustard, Dijon",
		"Mustard, regular",
		"Nacho dip",
		"Olives, black",
		"Olives, green",
		"Pasta sauce",
		"Peanut butter",
		"Pickles",
		"Pizza Cutter",
		"Relish",
		"Salad dressing",
		"Salsa",
		"Soy sauce",
		"Steak sauce",
		"Sweet & sour sauce",
		"Syrup",
		"Tartar Sauce",
		"Tomato paste",
		"Tomato sauce",
		"Worcestershire sauce",
		"Drinks",
		"Snacks",
		"Baking Supplies",
		"Breath mints",
		"Candy",
		"Cheezies",
		"Chips, flavored",
		"Chips, regular",
		"Chocolate, dark",
		"Chocolate, milk",
		"Chocolate, semi-sweet",
		"Club soda",
		"Coca Cola",
		"Mountain Dew",
		"Sierra Mist",
		"Ginger Ale",
		"Dr. Pepper",
		"Soda, diet",
		"Orange Juice",
		"Cranberry Juice",
		"French Vanilla Creamer",
		"Vanilla Soymilk",
		"Corn chips",
		"Dried fruit",
		"Granola bars",
		"Gum",
		"Hickory sticks",
		"Juice",
		"Mineral water",
		"Mixers",
		"Nacho chips",
		"Potato Chips",
		"Chips, Gluten Free",
		"Nuts, mixed",
		"Peanuts",
		"Pop",
		"Popcorn, microwave",
		"Popcorn, kernels",
		"Pork rinds",
		"Pretzels",
		"Protein bars",
		"Sport drink",
		"Wine",
		"Champagne",
		"Kool-Aid",
		"Gatorade",
		"Cake Mix",
		"Cashews",
		"Almonds",
		"Vanilla Extract",
		"Stationery",
		"Ink Pens",
		"Pencils",
		"Pencil Sharpener",
		"Charger, phone",
		"Sharpie Pen(s)",
		"Trail mix",
		"Baking powder",
		"Baking soda",
		"Bisquick",
		"Bread crumbs",
		"Brownie mix",
		"Brown sugar",
		"Cake mix",
		"Cocoa powder",
		"Corn meal",
		"Decorations",
		"Flour, white",
		"Flour, whole wheat",
		"Graham crumbles",
		"Icing sugar",
		"Icing",
		"Lemon juice",
		"Jell-O",
		"Maple syrup",
		"Non-stick spray",
		"Nuts",
		"Molasses",
		"Muffin Mix",
		"Oatmeal, instant",
		"Oatmeal, regular",
		"Oil, corn",
		"Oil, Vegetable",
		"Oil, Olive",
		"Oil, Olive (Virgin)",
		"Pancake mix",
		"Peanuts",
		"Pectin",
		"Salt",
		"Shortening",
		"Sprinkles",
		"Sugar",
		"Sugar substitute",
		"Vinegar, white",
		"Vinegar, balsamic",
		"Yeast",
		"Baby Items", 	
		"Cereal",
		"Baby wipes",
		"Chapstick",
		"Lipstick",
		"Makeup, foundation",
		"Makeup, blush",
		"Nail Polish",
		"Nail Polish Remover",
		"Tweezers",
		"Fingernail Clipper",
		"Qtips",
		"Cotton Balls",
		"Diapers",
		"Baby food",
		"Formula",
		"Baby Lotion",
		"Diaper rash ointment",
		"Baby shampoo",
		"Baby wash",
		"Pabulum",
		"Baby cookies",
		"Bottle liners",
		"Bottle nipples",
		"Bottles",
		"Teething ring",
		"Teething ointment",
		"Breast pads",
		"Bran",
		"Corn flakes",
		"Cream of wheat",
		"Grape nuts",
		"Honey comb",
		"Honey nut ohs",
		"Kid's cereal",
		"Life",
		"Mini wheats",
		"Muslix",
		"Oat meal",
		"Puffed wheat",
		"Raisin bran",
		"Rice crispies",
		"Shreddies",
		"Scissors",
		"Thread",
		"Needles",
		"Nails",
		"Hammer",
		"Toothpaste",
		"Perfume",
		"Toilet Brush",
		"Toiletbowl Cleaner",
		"Ajax",
		"Basketball",
		"Soccerball",
		"Netting",
		"Glue Stick",
		"Cat Litter",
		"Egg Whites",
		"Mouse Pad",
		"Feminine Pads",
		"Rose Wine",
		"Gummy Bears",
		"Fruit Snacks",
		"Potato Chips",
		"Socks",
		"Windex",
		"Cork Opener",
		"Printer Paper",
		"Bobby Pins",
		"Hair Pins",
		"Ink Pens",
		"Progressive Soup",
		"Chicken Alfredo Soup",
		"AA Batteries",
		"AAA Batteries",
		"Tape",
		"Screws",
		"Scotch Tape",
		"Baby Formula",
		"Baby Powder",
		"Baby Oil",
		"Diaper Genie",
		"Sweet Peas",
		"Contact Lense Solution",
		"Glue Sticks",
		"Crayons",
		"3 Subject Notebook",
		"School Supplies",
		"5 Subject Notebook",
		"Earrings",
		"Gloves",
		"Mascara",
		"Makeup Foundation",
		"Eyeliner",
		"Hair Brush",
		"Hair Comb",
		"Vector",
		"Cleaning Products", 	
		"Pet Supplies",
		"Air freshener",
		"Bathroom cleaner",
		"Bleach",
		"Carpet cleaner",
		"Carpet freshener",
		"Dish soap",
		"Dishwasher detergent",
		"Fabric softener",
		"Garbage bags",
		"Glass's cleaner",
		"Kitchen cleaner",
		"Laundry detergent",
		"Oven cleaner",
		"Paper towels",
		"Pot scrubbers",
		"Scrubbers",
		"Sponges",
		"Toilet bowl cleaner",
		"Toilet tank fresheners",
		"Tub&Tile cleaner",
		"Vacuum bags",
		"Cat food, dry",
		"Cat food, wet",
		"Cat litter",
		"Dental/Breath bones",
		"Dog food, dry",
		"Dog food, wet",
		"Flea collar",
		"Shampoo",
		"Treats",
		"Toys",
		"Reflective collar",
		"Rose Wine",
		"Medicine",
		"Grooming comb",
		"Nail clippers",
		"Catnip",
		"Chew toy",
		"Stamps",
		"Movie",
		"Shoes",
		"Bottled Watter",
		"Water",
		"Phone Bill",
		"Water Bill",
		"Car Payment",
		"Ink",
		"Printer"

		];
		$( "#enterItem" ).autocomplete({
		delay: 0,
		source: availableTags,
		select: function(event, ui) { 
		    $("#enterItem").val(ui.item.value);
		    var newItem = $('#enterItem').val();
			var itemListed = $('<fieldset class="tasks-list"><label class="tasks-list-item"><input type="checkbox" unchecked name="task_'+ counter + '" value="'+ counter + '" class="tasks-list-cb" id="item'+ counter + '"><span class="tasks-list-desc">'+ newItem + '</span></label></fieldset>')
			itemListed.appendTo('.tasks').html();

//add local storage here
			userItems = $('.tasks').html();
			window.localStorage.setItem("cart_useritems", userItems);

			counter++;
			$('#enterItem').focus();
			//$('#empty').hide();
			$('.cart-top-info').text(counter + ' items left to get');
			setTimeout(function() {
			$('#enterItem').val("");
			}, 050);
			
		}

		});
		


		//enter item - speech recognition	
		$('#enterItem').focus(function(){
			$('#enterItem').text('');
			$('#enterItem').webkitSpeech = true;
			var recognition = new webkitSpeechRecognition();
			recognition.onresult = function(event) {
				console.log(event)
			}
			recognition.start();
		});

	});

	

	//Empty the checkout cart
	$('#dumpList').click(function(){
		$('.checkoutNow').html("");
		$('#cart-bottom').text('');
		//window.localStorage.removeItem("cart_usercart");
		window.localStorage.removeItem("cart_useritems");
		//window.localStorage.removeItem("cart_usertotal");
		$('fieldset.tasks-list').remove();


		//$('#empty').show();
	
	});
	 
	 
});