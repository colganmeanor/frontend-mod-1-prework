// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear - this is a function named buildABear with 5 parameters (name, age, fur, clothes, specialPower)
function buildABear(name, age, fur, clothes, specialPower) {
 //declare a variable: greeting - value is a string with the name parameter interpolated in.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
 // declare a variable: demographics - value is an array with the parameters name, and age called
  var demographics = [name, age];
  // declare a variable powerSaying - value is a string with the specialPower parameter interpolated in
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // declare an object called builtBear which contains several properties
  var builtBear = {
    // property basicInfo is assigned the value of the variable demographics, declared earlier.
    basicInfo: demographics,
    // property clothes is assigned the value of the parameter clothes, passed back by the argument in the user's input
    clothes: clothes,
    // property exterior is assigned the value of the parameter fur, passed back by the argument in the user's input
    exterior: fur,
    // property cost is assigned the integer value of 49.99
    cost: 49.99,
    // property sayings is assigned to an array as it's value, containing two variables declared earlier in the function (greeting and powerSaying), as well as a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // property isCuddly is assigned a boolean value, true
    isCuddly: true,
  };
// return ends the function and logs the object created builtBear
  return builtBear
}
// calls the function buildABear passing arguments 'Fluffy' for the name parameter, the number 4 for the age parameter, 'brown' for the fur parameter, an array, ['pants', 'jorts', 'tanktop'], for the clothes parameter, and the string 'give you nightmares' for the specialPower parameter
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// calls the function buildABear passing arguments 'Sleepy' for the name parameter, the number 2 for the age parameter, 'purple' for the fur parameter, an array, ['pajamas', 'sleeping cap'], for the clothes parameter, and the string 'sleeping in' for the specialPower parameter
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');





//FizzBuzz - function fizzBuzz is declared with the parameters: num1, num2, and range
function fizzBuzz(num1, num2, range) {
  // declares a for loop. initial statement is the declaration of a variable index, which is equal to 0. the condition states that the loop will run until the value i is greater than the value of the parameter range. the increment value is included.
  for (var i = 0; i <= range; i++) {
    // an if statement is used to declare a condition: the condition is checking if the remainder of i divided by num1 is strictly equal to 0 AND the remainder of i divided by num2 is strictly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
      // logs the string 'fizzbuzz' to the console
      console.log('fizzbuzz');
      // an else if statement is used to declare a second condition in case condition 1 is false. the condition is checking if the remainder of i divided by num1 is strictly equal to 0
    } else if (i % num1 === 0) {
      // logs the string 'fizz' to the console.
      console.log('fizz');
      // an else if statement is used to declare a third condition in case condition 1 is false and condition 2 is false. the condition is checking if the remainder of i divided by num2 is strictly equal to 0
    } else if (i % num2 === 0) {
      // logs the string 'buzz' to the console.
      console.log('buzz');
      // an else statement, the final condition which executes when none of the previous conditions are true -
    } else {
      // logs the value of i to the console
      console.log(i);
    }
  }
}

// function fizzBuzz is called, with the arguments (3, 5, 100) passed back to the parameters (num1, num2, range)
fizzBuzz(3, 5, 100);
// function fizzBuzz is called however it seems to be a syntax error where an undefined variable fizzbuzz is called instead of fizzBuzz - leading to an error in the console that claims fizzbuzz is undefined.
fizzbuzz(5, 8, 400);
