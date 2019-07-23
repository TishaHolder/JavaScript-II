// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

console.log(`=====================Closures======================== `);
const firstName = 'Tisha';

function printFullName() { 

  const lastName = 'Holder';
  return (`My name is ${firstName} ${lastName}!`);

}

console.log(printFullName());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counterVar = 0;

  return function () {
    return ++counterVar;
  }

};

console.log(`Counter Function Output: `);
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let counter = 0;

  return counterObj = {
    increment: function() {
        return ++counter;
    },

    decrement: function() {
      return --counter;
    }
    
  };
  
};

console.log(`Incremeting & Decrementing Object: `);
const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());

console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());

console.log("************************************************************************************");