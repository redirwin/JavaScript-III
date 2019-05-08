/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'Global' binding is the default context. In a browser, the value of 'this' will be the window or console itself.

* 2. In 'implicit' binding, 'this' refers to the object that comes before the dot. We call the function with . notation after the object's name, and the 'this' in the function refers to the object, allowing us access to the properties and functions of that object.

* 3. The 'new' binding is used to create an object that inherits the properties of the prototype. The 'this' in the prototype refers specifically to that instance of the new object.

* 4. With 'explicit' binding, we directly tell a function what object to use for 'this.' We use built-in functions like 'call', 'apply', and 'bind' to pass the object as an argument to the function. 


* write out a code example of each explanation above

*/

// Principle 1

// code example for Window Binding

function windowBinding() {
    console.log(this);
}
windowBinding();

// Principle 2

// code example for Implicit Binding

const aboutMe = {
    greet: "Hello, there!",
    introduction: function (name, profession) {
        console.log(`${this.greet} My name is ${name} and I'm a ${profession}.`)
    }
}
aboutMe.introduction('Dave', 'software developer');

// Principle 3

// code example for New Binding

function imHungry(time, food) {
    this.time = time;
    this.food = food;
    this.letsEat = function () {
        console.log(`It's already ${this.time}! I want some ${this.food}.`)
    }
}

const meal = new imHungry('2pm', 'french fries');

meal.letsEat();

// Principle 4

// code example for Explicit Binding

function difficulty() {
    console.log(this.level);
}

let howHard = {
    level: "This JS 'this' stuff is breaking my brain."
}

difficulty.call(howHard);
