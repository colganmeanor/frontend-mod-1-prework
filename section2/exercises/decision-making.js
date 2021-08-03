/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 9;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
// Line 14 is the beginning of a new condition - it's telling us that if the variable doorChoice is strictly equal to 1, then
// bearClothing will be assigned to the string 'hat'. If the variable does not strictly equal 1 (so, any other number),
// then the bearClothing will assigned to the string 'scarf'.

2. What variable has a new value assigned to it after the first if statement executes?
// the variable bearClothing will have a new value assigned to it after the first if statement is executed.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// the bearClothing value would be assigned to the string 'scarf' because it is not strictly equal to integer 1.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
// we are seeing another conditional statement here. If bearChoice is strictly equal to integer 1, then the console will
// log the statement referencing the secret passage. If bearChoice is strictly equal to integer 2, then the console will
// log the statement where the bear starts to cry. If bearChoice is strictly equal to integer 3, then the console will
// log the statement where the you run into the room full of snakes. If bearChoice is anything other than strictly 1, 2, or 3,
// then the statement will print where you stay with the bear and become its best friend.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// in this case, the statement printed will be "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// You enter a dark room with two doors. Do you go through #1 or #2?
// You see a bear putting on a hat
// It looks like that hat is too small for the bear, do you...
// 1. Offer your own to the bear?
// 2. Point it out to the bear?
// 3. Make a dash for the next room?
// You tell the bear the hat is too small and it starts to cry!

// If doorChoice is 1, then the bear puts on the hat. If bearChoice is 2, then you tell the bear the hat is too small and it
// starts to cry. :(

7. What is your favorite ending?
// my favorite ending is when the bear wears the scarf, and bearChoice is anything other than 1, 2, or 3. And you get
// to stay with the bear and become it's best friend! :)
*/
