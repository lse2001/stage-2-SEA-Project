const cards = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": "Grass",
    "rarity": "Common",
    "owned": true,
    "cardNumber": "001",
    "image": "images/bulbasaur.png"
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "type": "Grass",
    "rarity": "Uncommon",
    "owned": false,
    "cardNumber": "002",
    "image": "images/ivysaur.png"
  },
  {
    "id": 3,
    "name": "Venusaur",
    "type": "Grass",
    "rarity": "Rare",
    "owned": false,
    "cardNumber": "003",
    "image": "images/venusaur.png"
  },
  {
    "id": 4,
    "name": "Charmander",
    "type": "Fire",
    "rarity": "Common",
    "owned": true,
    "cardNumber": "004",
    "image": "images/charmander.png"
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "type": "Fire",
    "rarity": "Uncommon",
    "owned": false,
    "cardNumber": "005",
    "image": "images/charmeleon.png"
  },
  {
    "id": 6,
    "name": "Charizard",
    "type": "Fire",
    "rarity": "Rare",
    "owned": false,
    "cardNumber": "006",
    "image": "images/charizard.png"
  },
  {
    "id": 7,
    "name": "Squirtle",
    "type": "Water",
    "rarity": "Common",
    "owned": true,
    "cardNumber": "007",
    "image": "images/squirtle.png"
  },
  {
    "id": 8,
    "name": "Wartortle",
    "type": "Water",
    "rarity": "Uncommon",
    "owned": false,
    "cardNumber": "008",
    "image": "images/wartortle.png"
  },
  {
    "id": 9,
    "name": "Blastoise",
    "type": "Water",
    "rarity": "Rare",
    "owned": false,
    "cardNumber": "009",
    "image": "images/blastoise.png"
  },
  {
    "id": 10,
    "name": "Caterpie",
    "type": "Bug",
    "rarity": "Common",
    "owned": true,
    "cardNumber": "010",
    "image": "images/caterpie.png"
  },
  {
    "id": 11,
    "name": "Metapod",
    "type": "Bug",
    "rarity": "Uncommon",
    "owned": false,
    "cardNumber": "011",
    "image": "images/metapod.png"
  },
  {
    "id": 12,
    "name": "Butterfree",
    "type": "Bug",
    "rarity": "Rare",
    "owned": false,
    "cardNumber": "012",
    "image": "images/butterfree.png"
  },
  {
    "id": 13,
    "name": "Weedle",
    "type": "Bug",
    "rarity": "Common",
    "owned": true,
    "cardNumber": "013",
    "image": "images/weedle.png"
  },
  {
    "id": 14,
    "name": "Kakuna",
    "type": "Bug",
    "rarity": "Uncommon",
    "owned": false,
    "cardNumber": "014",
    "image": "images/kakuna.png"
  },
  {
    "id": 15,
    "name": "Beedrill",
    "type": "Bug",
    "rarity": "Rare",
    "owned": false,
    "cardNumber": "015",
    "image": "images/beedrill.png"
  },
  {
    "id": 25,
    "name": "Pikachu",
    "type": "Electric",
    "rarity": "Common",
    "owned": true,
    "cardNumber": "025",
    "image": "images/pikachu.png"
  }
]

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < cards.length; i++) {
    let pokemon = cards[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, pokemon); // Edit card content
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

// This function fills in the card content
function editCardContent(card, pokemon) {
  card.style.display = "block";

  // Set name
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = pokemon.name;

  // Set image
  const cardImage = card.querySelector("img");
  cardImage.src = pokemon.image;
  cardImage.alt = pokemon.name;

  // Set list items
  const listItems = card.querySelectorAll("li");
  listItems[0].textContent = "Type: " + pokemon.type;
  listItems[1].textContent = "Rarity: " + pokemon.rarity;
  listItems[2].textContent = pokemon.owned ? "Owned" : "Missing";
}
// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
