/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. GLOBAL binding is the default context. In a browser, the value of 'this' will be the window or console itself where all of JavaScript lives.

* 2. In IMPLICIT binding, 'this' refers to the object that comes before the dot. We call the function with . notation after the object's name, and the 'this' in the function refers to the object, allowing us access to the properties and functions of that object.

* 3. The NEW binding is used to create an object that inherits the properties of the prototype. The 'this' in the prototype refers specifically to new object.

* 4. With EXPLICIT binding, we directly tell a function what object to use for 'this' and it can be different than the object who's method we are using. We use built-in functions like 'call', 'apply', and 'bind' to pass a different object as a parameter into the original object's method that we're calling. The 'this' applies to the new object. 


* write out a code example of each explanation above*/

// Principle 1: Window Binding
const showJavaScript = this;
console.log(showJavaScript);

// Principle 2: Implicit Binding
const aboutMe = {
    greet: "Hey there!",
    introduction: function (name, profession) {
        console.log(`${this.greet} My name is ${name} and I'm a ${profession}.`)
    }
}
aboutMe.introduction('Dave', 'software developer');

// Principle 3: New Binding
function Meal(time, food) {
    this.time = time;
    this.food = food;
    this.letsEat = function () {
        console.log(`It's ${this.time}! I want some ${this.food}.`)
    }
}
const lunch = new Meal('2pm', 'french fries');
const dinner = new Meal('almost midnight', 'hot wings and pizza')
lunch.letsEat();
dinner.letsEat();

// Principle 4: Explicit Binding
const myDog = {
    type: "dog",
    name: "Birdie",
    breed: "border collie",
    sex: "female",
    allAbout: function () {
        console.log(`My ${this.type} is a ${this.sex} ${this.breed} named ${this.name}.`)
    }
}

const myCat = {
    type: "cat",
    name: "Bear",
    breed: "Maine Coon",
    sex: "male"
}

myDog.allAbout();
myDog.allAbout.call(myCat);
