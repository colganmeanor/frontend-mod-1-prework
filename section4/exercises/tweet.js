/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

// have created the class, an example object, and set up class methods.
// next step is to create several more object instances

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

addComment() {
  this.comments.push("I love it!");
}

addLikes() {
this.numberOfLikes++
}

};

var newTweet = new Tweet("colgan", "this is my tweet", "1:30PM", 2, ["wow", "sick", "very cool"]);
console.log(newTweet);

var jamesTweet = new Tweet("James717", "I love my Mom!", "3:10AM", 0, ["I love her too!", "she is cool"]);
console.log(jamesTweet);

var christinaTweet = new Tweet("cmm052", "Who's watching the olmypics?", "8:00PM", 3, ["I'm watching"]);
console.log(christinaTweet);

var billTweet = new Tweet("billiam12", "anyone down to play Mario Kart tonight?", "6:21PM", 7, []);
console.log(billTweet);

var alliTweet = new Tweet("alli007", "excited for brunch today :)", "9:00AM", 17, ["I'll see you there!", "post some pics!"]);
console.log(alliTweet);

christinaTweet.addLikes();
console.log(christinaTweet);

billTweet.addComment();
console.log(billTweet);
