// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.
console.log(`=====================Callbacks======================== `);

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

//getLength invocation
getLength(items, function(length) {
    console.log(`Array length: ${length}`);
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last (items, function(lastItem) {
  console.log(`Last item: ${lastItem}`);
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(5, 25, function (sum) {

  console.log(`Sum of two numbers: ${sum}`);

});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(3, 6, function (product) {
    console.log(`Product of two numbers: ${product}`);

});


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  let found = false;

  list.forEach (function (element, index) {
    if (list[index] === item) {
      found = true;      
    }
    
  });

  return cb (found);
  
}

contains ('backpack', items, function (found) {
 
  console.log (`Is item present in the array/list? ${found}`);

});


/* STRETCH PROBLEM */

const progLangs = ['java', 'javascript', 'c++', 'python', 'java', 'python', 'javascript'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  const duplicateFreeArray = progLangs.filter (function (element, index) {

    /*indexOf returns the first index at which a given element can be found in the array. if the first index at which the current element is found is equal to the current index then it is not a duplicate and this item is returned to the duplicateFreeArray*/
    return progLangs.indexOf(element) === index;
    
  });

  return cb(duplicateFreeArray);
}

removeDuplicates(progLangs, function (duplicateFreeArray) {

  console.log(`Array with duplicates removed:`);
  console.log(duplicateFreeArray);

});

console.log("************************************************************************************");



