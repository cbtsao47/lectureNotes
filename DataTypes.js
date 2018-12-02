// variables
let name = "Ben";
console.log(name);

// cannot be a reserved keyword or special characters
// cannot start with a number
// cannot contain a space or hyphen
// case-sensitive
// should be meaningful
// should be camelcased

// values that can be assigned to variables
// primitives/value types       reference types

// primitive types
let name = "Ben"; // string literal
let age = 32; //number literal
let isApproved = true; //boolean literal
let firstName = undefined;
let lastName = null;

let symbols = Symbol(42); //don't worry about this yet

//reference types

let benProfile = {
  //object
  name: "ben",
  age: "32",
  likes: "video games,boardgames,escape roomes, taiko,magic"
};

benProfile.name; //how to access objects
benProfile.age;
benProfile.likes;

/*---------I'm a divider----------*/
let hotGames = ["kingdom hearts", "monster hunter world", "fortnite"]; //array

hotGames[0]; //how to access arrays
hotGames[1];
hotGames[2];
hotGames[3];
