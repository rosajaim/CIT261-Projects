function random(a, b) {
    if (b === undefined) b = a, a = 1;
    return Math.floor((b - a + 1) * Math.random()) + a;
}

var message = "Hello";

function reverse(string) {
    var array = string.split("");
    array.reverse();
    return array.join("");
}

function square(x) {
    return x * x;
}

function hypotenuse(a, b) {
    total = square(a) + square(b);
    return Math.sqrt(total);
}

function sum(array, callback) {
    if (typeof callback === "function") {
        array = array.map(callback);
    }
    return array.reduce(function (a, b) {
        return a + b
    });
}

function sum(array, callback) {
    if (typeof callback === "function") {
        array = array.map(callback);
    }
      return array.reduce( function(a,b) { return a + b });
  }
  
  function power(x) {
    return function(power) {
      return Math.pow(x,power);
    }
  }
  
  function sayHi(){
    return "Hi " + this.name;
  }
  
  alfie = { name: "Alfie" };
  betty = { name: "Betty" };
  
  
  Object.defineProperty(example, 'sillyString', { 
    get: function() {
      return "Craaazy!";
    },
    set: function(value) {
      return value;
    }
 });

 var Dice = function() {
    "use strict";
    var sides = 6;
  
    Object.defineProperty(this, 'sides', {
      get: function() {
        return "This dice has " + sides + " sides";
      },
      set: function(value) {
        if(value > 0) {
          sides = value;
          return sides;
        } else {
          throw new Error("The number of sides must be positive");
        }
      }
    });

    this.roll = function() {
        return Math.floor(sides * Math.random() + 1)
      }
}

Object.defineProperty(Object.prototype, 'copy', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: function() {
      var object = Object.create(Object.getPrototypeOf(this));
      object.mixin(this);
      return object;
      }
    })

    superman.findFriends = function() {
        this.allies.forEach(function(friend) {
          console.log(friend.name + " is friends with " + this.name);
        }.bind(this)
        );
      }

      function Game(quiz){
        this.questions = quiz.questions;
        this.phrase = quiz.question;
        this.score = 0; // initialize score
        update($score,this.score);
        // initialize timer and set up an interval that counts down
        this.time = 20;
        update($timer,this.time);
        this.interval = window.setInterval( this.countDown.bind(this) , 1000 );
        // hide button and show form
        hide($start);
        show($form);
        // add event listener to form for when it's submitted
        $form.addEventListener('click', function(event) { 
          event.preventDefault();
          this.check(event.target.value);
          }.bind(this), false);
      
        }

    var quiz = this;
  // set the question.asked property to true so it's not asked again
  question.asked = true;
  update($question,this.phrase + question.question + "?");
  // clear the previous options
  $form.innerHTML = "";
  // create an array to put the different options in and a button variable
  var options = [], button;
  var option1 = chooseOption();
  options.push(option1.answer);
  var option2 = chooseOption();
  options.push(option2.answer);
  // add the actual answer at a random place in the options array
  options.splice(random(0,2),0,this.question.answer);
  // loop through each option and display it as a button
  options.forEach(function(name) {
    button = document.createElement("button");
    button.value = name;
    button.textContent = name;
    $form.appendChild(button);
  });
    
  // choose an option from all the possible ”

