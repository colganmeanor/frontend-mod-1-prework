## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

-  workflow didn't feel too different from usual. I realized while trying out the timer and check mark methods that this isn't too far off from how I usually try to approach a problem. I tend to try and take short breaks already, where I either get up and walk around for a few moments, or I stretch and try to generally get my blood flowing.
-  there were a few times I needed to take the longer break as specified in step 6 of the Pomodoro, such as working with class methods, but I found that to be a good step for me to take, because it forced me to step away from the issue for a little bit, and come back with a slightly fresher take.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

- I didn't have any issues with Step 1 of the Pomodoro technique, I found it to be kind of in line with the Psuedocoding practices from Mod 0. Breaking down the task into a big picture, but also ironing out the small steps in between that will help me accomplish the desired goal.

- I found that this was really helpful for me to refer back to when I would get distracted, so that I could remember easily what my goal, or next task should be.

- my time estimates varied pretty widely. There were some subjects that came really well to me where I estimated I could knock out the exercises fairly quickly. But there were others where the difficult of the exercise ultimately overtook my estimation - and I spent more time than expected.

1. What is an Object, and how is it different from an Array in Javascript?

- An object is a collection of data and property assignments that can be used to build something larger out of the smaller data pieces.
- an array is similar, but it is more of a general list of data values. It is a type of data that can be used to build objects, or can be assigned to other existing variables.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
  - I'd use an Array - because it's a simple list of strings with no properties

  * List of states and their capitals
  -  I'd consider using an Object for this, because each item in the object (states), will have a different property (capital city)

  * List of things to pack for vacation
  - I'd use an object for this, because there could be many different items with different properties that could go into an Object declared as Suitcase.

  * Names of all the Instagram accounts I follow
  - I'd put this into an Array, because there should be no other properties. Just strings with account names.

  * List of student names and their cohort
  - I'd consider using an Object for this, because each item in the object (Students), will have a different property (cohorts)

  * Ingredients and amount of each ingredient to bake a cake
  - I'd use an Object for this, because the ingredients will vary greatly, and each one will have a different property for amount of the ingredient.

  * All my favorite restaurants
  - I'd use a simple array for this. This is just a simple arrangement of strings, there are no properties to go along with the list of restauraunts.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

- I'm imagining that a user profile on most social websites, forums, etc could likely be concieved as an object.

- For my example, I suggest a user profile on Twitter (continuing along with the Twitter theme of the final Object/Class Exercise :) )

- I think the object class might be declared as 'User' - where each individual user is a new instance of this object.

- Some of the keys and properties I might imagine:

username: "colgan"
userCreated: "Jan 1, 2013"
numberOfTweets: 340
userPrivate: false
userDescription: "just a guy on Twitter"
numberOfFollowers: 100
numberFollowed: 72



1. What questions do you still have about classes and/or Objects?

- I'm still a little confused on the various methods to pass parameters, arguments, data to classes. The constructor method confused me a little bit from the examples in the readme. Specifically - why write the parameters within the parantheses as well as in the class with dot.notation?
I saw how this can NOT work correctly if the syntax is not precise, but I had a hard time logically understanding the use-case for either method. 
