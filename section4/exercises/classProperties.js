/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

class Dog {

}

var poodle = new Dog();
var labrador = new Dog();

console.log(poodle);
console.log(labrador);

// Prompt 2: Snack

class Snack {

}

var chips = new Snack();
var cookies = new Snack ();

console.log(chips);
console.log(cookies);

// Prompt 3: Shirt

class Shirt {

}

var polo = new Shirt();
var tShirt = new Shirt();

console.log(polo);
console.log(tShirt);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog {
  constructor() {
    this.breed = "dog";
    this.weight = 45;
    this.adopted = true;
  }
}

var poodle = new Dog();
console.log(poodle);


// Prompt 2: Snack

class Snack {
  constructor() {
    this.type = "chips";
    this.brand = "Lays";
    this.healthy = true;
  }
}

var chips = new Snack();
console.log(chips);

// Prompt 3:

class Shirt {
  constructor() {
    this.collar = true;
    this.shortSleeve = false;
    this.brand = "American Eagle";
  }
}

var niceShirt = new Shirt
console.log(niceShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog {
  constructor(breed, weight, adopted) {
    this.breed = breed;
    this.weight = weight;
    this.adopted = adopted;
  }
}

var poodle = new Dog("poodle", 30, true);
console.log(poodle);

var labrador = new Dog("labrador", 50, false);
console.log(labrador);


// Prompt 2: Snack

class Snack {
  constructor(type, brand, healthy) {
    this.type = type;
    this.brand = brand;
    this.healthy = healthy;
  }
}

var chips = new Snack("potato chips", "Lays", false);
console.log(chips);

var grapes = new Snack("fruit", "Welch", true);
console.log(grapes);

// Prompt 3: Shirt

class Shirt {
  constructor(collar, shortSleeve, brand) {
    this.collar = collar;
    this.shortSleeve = shortSleeve;
    this.brand = brand;
  }
}

var niceShirt = new Shirt(true, false, "Nordstrom");
console.log(niceShirt);

var tShirt = new Shirt(false, true, "Banana Republic");
console.log(tShirt);
