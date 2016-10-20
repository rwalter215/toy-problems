// A certain pony farm (cage-free) raises and keeps track of cowboys’ and cowgirls’ ponies.
// Each pony has a name, id, dietary allergies, and email address (the owner’s email address).

// Given an array of pony objects and an owner’s email address, return an alphabetically
// ordered array of all foods (without duplicates) that the owner should avoid feeding his/her ponies.

function getPonyAllergies(ponies, ownerEmail) {
  const filterPonies = ponies.filter(pony => pony.email === ownerEmail)
    .map(pony => pony.allergies).concatAll().sort();

  const avoidFoods = removeDup(filterPonies);

  return avoidFoods;
}

function removeDup(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

Array.prototype.concatAll = () => {
  return this.reduce((result, subArray) => result.concat(subArray));
};

// returns ["chicken","gluten","peanut","soy"]
getPonyAllergies([ { "id": 427, "name": "Firefly", "allergies": [ "gluten", "peanut" ],
  "email": "cindy@ponymail.com" }, { "id": 23, "name": "Black Lightning", "allergies":
  [ "soy", "peanut" ], "email": "sandy@hotmail.com" }, { "id": 458, "name": "Picadilly",
  "allergies": [ "corn", "gluten" ], "email": "cindy@ponymail.com" },
  { "id": 142, "name": "Brad", "allergies": [ "gluten", "chicken" ], "email": "sandy@hotmail.com" },
  { "id": 184, "name": "Cahoot", "allergies": [ "soy", "peanut", "gluten" ],
   "email": "jimmy@ponymail.com" } ], "sandy@hotmail.com")
