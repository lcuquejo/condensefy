<script>
we can add the script element in two places, in the head section or in the body section.
The best practice is to put the script element at the end of the body section after all existing elements.

Why the best practice is to put the script element at the end of the body section?

There are two reasons for that:

1. The browser parses this file from top to bottom. So, if you put the script element in the head section, you might have a lot of JavaScript code there, so your
browser might get busy parsing and executing that JavaScript code, and it wont be able to render the content of the page. So this will create a bad user experience.
Your user looks at your web page it's white or blank, while your browser is busy parsing and executing your JavaScript code.

2. Almost always the code that we have in between script elements needs to talk to the elements on this web page. For example, we may want to show or hide some elements.
So by adding the code at the end of the body section, we'll be confident that all these elements are rendered by the browser. Now there are exceptions to this rule,
sometimes you're using third part code that has to be placed in the head section But these are exceptions.

console.log('Hello World');

A statement is a piece of code that expresses an action to be carried out. In this case we want to log a message on the console.
All statements in JavaScript should be terminated by a semi colon (;).

'Hello World'

These is a string, a string is a sequence of characters.

//

Two lashes represents a comment.

variable: is a storage location (identified by a memory address) paired with an associated symbolic name, which contains some known or unknown quantity of information
referred to as a value.

To declare a variable:

let name = '';
console.log(name);

Rules:
* Cannot be a reserved keyword (if, else, var...).

* Should be meaningful.

* Cannot start with a number (1name).

* Cannot contain a space or hyphen (-), use camel notation (firstName).

* Are case-sensitive.

    exemple:

    let firstName;
    let FirstName;
    These two variables are different.

Constant: Data values that stay the same every time a program is executed.

What are the kind of values that we can assign to a variable?
In JavaScript we have two caategories of types:

Primitives/ Value Types; String, number, Boolean, undefined and null.

    let name = 'Larissa'; // String Literal
    let age = '18'; // Number Literal
    let isApproved = true; // Boolean literal
    let firstName = undefined;
    let lastName = null; // use null in situations where we want to explicitly clear the value of
    a variable.

Reference Types; Object, Array and function.  
    Object:

        An object in JavaScript and other programming languages is like an object in real life.
        Think of a person, a person has name, age, addres... These are properties of a person. In have the
        same concept in JavaScript.
    ex: let name = 'Larissa';
        let age= 18;
    instead of referecing these two variables we can just reference the person object

        let person = {
            name: 'Larissa',
            age: 18
        };

        console.log(person);

    How to access a property?
    
     We have two ways to do it:
     Dot Notation:
     person.name = 'Leonardo';

     console.log(person.name);

     Bracket Notation:
     person['name'] = 'Yara';

     console.log(person.name);

One thing that separates JavaScript from a lot of programming languages, is that JavaScript is a
dynamic language, and what this mean?

We have two types of programming languages:

 Static Languages:

    In static languages, when we declare a variable the type 
    of the variable is set and it cannot be changed in the future.

 Dynamic Languages:
 In a dynamic language (like JavaScript) the type of a variable can change at run time.

What is an Array?

An array is a special variable, which can hold more than one value at a time.
  ex:
      let selectedColors = ['red', 'blue'];
      selectedColors[2]= 1;
      console.log(selectedColors.length);

length: This property returns a number of items or elements in an array.

What is a Function?

Functions are one of the fundamental building blocks in JavaScript. A function is basically a set of 
statements that performs a task or calculates a value.
ex 1:
    fuction greet() {
        console.log('Hello world');
    }

    greet(); 

In this example we just want to display a message on the console.

 ex 2:
    fuction greet(name, lastNames) {
            console.log('Hello' + name + '' + lastName);
        }

        greet('Larissa', 'Cuquejo'); 

Arithmetic Operators:

We use this form performing calculations. just like the calculations in mathematics.

ex:
    let x = 10;
    let y = 3;

console.log(x + y); 
console.log(x - y); 
console.log(x * y); 
console.log(x / y); 
console.log(x % y); 
console.log(x ** y);

// Increment (++)
console.log(x++);
console.log(x);

// Decrement (--)
console.log(--x);

How to swap a variable?
To swap the value of two variables we need a third variable.

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour =20; 

if (hour >= 6 && hour > 12)
  console.log('Good morning');
else if (hour >= 12 && hour > 18)
  console.log('Good afternoon');
else
  console.log('Good evening');

// we wanto to see if this user is a guest, or a moderator or an admin

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log(Moderator User);
        break;
    
    default:
        console.log('Unknown User');
}

// We can also do this using if and else

if (role === 'guest' && hour > 12) console.log('Guest');
else if (role === 'moderator') console.log('Moderator'):
else console.log('Unknown User'); 

// let's imagine we want to display Hello world 5 times on the console.

The poor way:

console.log('Hello World')
console.log('Hello World')
console.log('Hello World')
console.log('Hello World')
console.log('Hello World')

There is a better way to achieve the same result, and that's where we use loops. We have various kind
of loops, and all these loops essentially do the same thing. They repeat a action a number of times.
We have For loops, while loops, do...while loops, for... in loops, for...of

for:

for (let x = 10; x <= 100; x=x+10) {
    console.log(x);
}

while:

 let x = 10;
 while (x <= 100) {
     console.log(x);
    x=x+10;
 }

do-while:

 let x = 10;
 do {
     console.log(x);
     x=x+10;
 } while (x <= 100);

 With for, while and do-while loops we can repeat an action a number of times. But we have two more 
 kinds of loops in JavaScript and we use them to iterate over the properties of an object or elements
 in an array 

Infinite loops executes forever. So if you accidentally create one of these loops, you're going to 
crash your browser or your computer. 

Ex 1:

    for (let x = 10; x <= 100;) {
        console.log(x);
    }

Ex 2:

    let x = 10;
    while (x <= 100) {
        console.log(x);
        
    }
Ex 3:

    while (true) {

    }
  
Let's say we have an object with two properties and we want to display all the properties of this
person
 Ex 1:

    const person = {
        name: 'Larissa',
        age: 18
    };
    
    for (let key in person)
    console.log(key, person[key]);

 Ex 2:

    const colors = ['red', 'green', 'blue'];

    for (let index in colors)
      console.log(index, colors[index]);
    
We have a new way to iterate over a raise and that is using the for of loop. it's very similar to the
for in loop but instead of the in keyword we use the of keyword.
Ex:
for (let color of colors)
  console.log(color);

Let's say we want to jump out of a loop. For example, we want to count from 0 to 4 instead of counting
normally from 1 to 5, so we need to use the break keyword:

    let x = 0;
    while (x <= 10) {
        if (x===5) break;

        console.log(x);
        x++;
    }

Now we want to see if x is an even number or not:

   let x = 0;
   while (x <= 10) {
    if (x % 2 === 0) {
        x++;
        continue;
    }

    console.log(x);
    x++;
  }


We want to do a function that takes two numbers and returns the maximum of the two:

    let number = max(1,2);
    console.log(number);

    function max(a,b) {  
        if (a > b) return a;
        return b;
    }
 
Now we will do the same thing but more clean:

    let number = max(1,2);
    console.log(number);

    function max(a,b) {
        return (a > b) ? a : b;
    }

Exercise FizzBuzz:

If the number is divisible by 3 => Fizz
If the number is divisible by 5 => Buzz
If the number is divisible by both 3 and 5 => FizzBuzz
If the number is not divisible by 3 or 5 => input
If the number is not a number => 'NaN'

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) { 
     if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

     if (typeof input !== 'number')
       return 'NaN';

     if (input % 3 === 0)
       return 'Fizz';

     if (input % 5 === 0)
        return 'Buzz';


      return input;
}

Exercise 2: 

//Speed Limit = 70
//5 -> 1 point
//Math.floor(1.3)
//12 points -> suspended
 
checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
      console.log('Ok');
      return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else
        console.log('Points', points); 
    }
 
Exercise 3:

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
} 

Exercise 4:

Create a function called truthy that gets an array, and returns the number of truthy values in this array.

const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
      if (value)
        count++;
    return count;
} 

Exercise 5:

const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director:'b'
  };
  
  showProperties(movie);
  
  function showProperties(obj) {
    for (let key in obj) {
     if (typeof obj [key] === 'string')
       console.log(key, obj[key]);     
   }
  }

Exercise 6:

console.log(sum(10));

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
       if (i % 3 === 0 || i % 5 ===0)
         sum+= i;

return sum;
}

Exercise 7:

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';   
}

Function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
      sum += value;
    return sum / array.length;
}

Exercise 8:

showStars(2);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
          pattern += '*';
        console.log(pattern);
    }
}

Exercise 9:

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
      if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
      if (number % factor === 0)
        return false;

    return true;
}

Object-oriented Programming (OOP):
Is a style of programming where we see a program as a collection of objects that talk to each other
to perform some functionality.

Ex:
Const circle = {
    radius:1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
}; 

Imagine we want to create two circle objects:

// Factory Function

function createCircle(radius) {
    return {
        radius,
        draw() {
            console,log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

We're going to create a function, and the job of this function is to construct or create an object.

// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);

To understand about objects in JavaScript is that they are dynamic, which means once you create them
you can always add new properties or methods, or remove existing ones.

Every object in JavaScript has a property called constructor and that references the function that 
was used to construct or create that object.

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);

In JavaScript we have two categories of types. On one side we have value types, also called primitives, on the other side we have refernce types. So in the value types category we have number,
string, boolean, symbol, undefined and null. On the other side we have objects, functions, and arrays.

Primitives are copied by their value, Objects are copied by their reference.

Ex:

let obj = { value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

Enumerating Properties of an Object:

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
   console.log(key, circle[key]);

for (let key of object.keys(circle))
   console.log(key);

for (let entry of object.entries(circle)) 
   console.log(entry);

if ('color' in circle) console.log('yes');

Cloning an Object:

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = Object.assign({}, circle);

const another = {...circle};

console.log(another);

Garbage Collection:

In low level of languages like C or C++, when creating an object, we need to allocate memory to it, and when we're done we need to reallocate memory. But in JavaScript, we dont have this concept. We can
easily create the new object, at the time we initilized this object, the memory is automatically allo-
cated to this object, next we can use that, and when we are done using, we dont need to deallocate the memory. So our JavaScript engine has what we call a garbage collector. The job of this garbage collector is to find the variables or constants that are no longer used and then deallocate the memory that was allocated to them earlier. Memory allocation and deallocation automatically happens behind the scenes, runs in the background, it figures out what variables are not used, and then it will automatically deallocate their memory.

Math:

Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object. 

If you ever have to deal with mathematical calculations, just go to: 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

Random method:
Every time we call this method we get a new random number between 0 to 1.

Math.random()

String primitive:
ex 1; const message = ' This is my first message ';
ex 2; const message = 
'This is my\n' +
 '\'first\' message'; 

String object:

const another = new String('hi');

Template literals are indicated by the back tick character:

const another = `This is my 
first message`;

const another = 
`This is my 
"first" message`;

const another =
`Hi John,

Thank you for joinig my mailing list.

regards,
Larissa`;

const another = 
`Hi ${name} ${2 + 3},

Thank you for joining my mailing list.

Regards,
Larissa`;

Date:

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);
