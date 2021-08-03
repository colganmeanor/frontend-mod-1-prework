/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello() {
  console.log("Oh, Hello!");
}

sayHello();
sayHello();


//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name) {
  console.log(name);
}
greetMe('Jimmy');
greetMe('Andy');
greetMe('Colgan');

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function numbers(num1, num2) {
  console.log(num1 + num2)
}
numbers(47, 53);
numbers(100, 72);
numbers(582002, 239812);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function stringCon(nameOne, nameTwo) {
  console.log("I can't wait to see my two best friends: " + nameOne + " and " + nameTwo + "!")
}
stringCon("Terry", "James");
stringCon("Ronald", "Wendy");
stringCon("Jeremy", "Edgar");


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:

For the second and third function exercises, I chose function names that were relevant to the task at hand. The second exercise
was related to integers and math operations. I chose a simple name of "numbers" for the function, and chose "num1" and
"num2" as parameters because it was simple enough for me to use and remember easily while working within this function.

For the third function exercise, I just chose "stringCon" as the function name because it was short hand for
"string - concatenation". I chose the parameters because I knew in my printed statement I would use name variables so
"nameOne" and "nameTwo" felt like natural choices.


*/
