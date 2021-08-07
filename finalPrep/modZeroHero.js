// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Shark Man";
var specialAbility = "turn into a shark";

console.log(heroName)
console.log(specialAbility)

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
var greeting = "Surf's up dudes, it's " + heroName;
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var catchphrase = `Watch out dudes, I'm about to ${specialAbility}!`;

console.log(greeting);
console.log(catchphrase);
// Declare two variables - power AND energy - set to integers

var power = 1000;
var energy = 9001;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
var fullPower = power * 500;
//   fullEnergy should add 150 to your current energy
var fullEnergy = energy + 150;

console.log(fullPower);
console.log(fullEnergy);

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = false;

console.log(isHuman);
console.log(identityConcealed);

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
var archEnemies = ["Evil Octopus", "Bad Manray", "Ursula from Little Mermaid"]
//   sidekicks should be an array of at least 3 different sidekick strings
var sidekicks = ["Shark Boy", "Shark Dog", "Ariel from the Little Mermaid"]
// Print the first sidekick to your console
console.log(sidekicks[0])

// Print the last archEnemy to the console
console.log(archEnemies[2])

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Evil Shark Man")

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies)

// Remove the first sidekick from the sidekicks array
sidekicks.shift()
// Print the sidekicks array to console to ensure you added a new sidekick

console.log(sidekicks)

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation (dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50){
    console.log(badExcuse)
  } else if (dangerLevel < 10){
    console.log("Meh. Hard pass.")
  } else {
    console.log(saveTheDay)
  }
}

assessSituation (51, "Shark Man is here!", "Woops... I'm uh... late for something.")


//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Titanic's Ghost",
  smell: "rotten eggs",
  weight: 0,
  citiesDestroyed: ["Miami", "Ft Lauderdale", "Tampa"],
  luckyNumbers: [7, 9, 12, 14],
  address: {
    number: 2109,
    street: "Oyster Way",
    state: "Florida",
    zip: "32713",
  }
}

console.log(scaryMonster)


// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

class SuperHero {
  constructor (name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error"
    this.powerLevel = 100
    this.energyLevel = 50
  }
  sayName() {
    console.log(this.name)
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
    console.log(this.energyLevel)
  }
  gainPower(num){
    this.powerLevel = this.powerLevel + num;
    console.log(this.powerLevel)
  }
}

var flash = new SuperHero("The Flash", "Super Speed", 33)
console.log(flash)
flash.sayName();
flash.maximizeEnergy();
flash.gainPower(100);

var batMan = new SuperHero("Batman", "Being Rich", 40)
console.log(batMan)
batMan.sayName();
batMan.maximizeEnergy();
batMan.gainPower(2);


// Reflection
// What parts were most difficult about this exerise?
// I think the most dificult part was remembering all of the syntax for each tool. I had to refer back to my notes, and my previous work in exercises in sections 1-4.
// I think I got it all figured out though.

// What parts felt most comfortable to you?
// I felt most comfortable declaring initial varibles, declaring objects, writing functions with if/else statements, modifying arrays.

// What skills do you need to continue to practice before starting Mod 1?
// Honestly, all of it. :)
// While I was able to figure it out, I think this has shown me that I need to continue to practice every day to try and get some of these fundamentals better committed to
// my memory. I know its ok to refer back to notes and online help, but my goal is to get more confident in remembering the syntax of each technique outlined here.
