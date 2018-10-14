const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
  console.log("array", array);
  console.log("accumulator", accumulator);
  return accumulator.concat(array);
}, []);

const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
  debugger;
  return accumulator.concat(array);
}, []);

console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

// QUESTION 1
// Organise [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// into an individual array that is ordered
// eg [[1,1,1,1], [2,2,2],4,5,10,[20,20],391,392,591]
// BONUS: Make it so it organises strings
// differently from number types
// eg [1, "2", "3", 2] should return [[1,2],["2","3"]]

let array1 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const answer1 = (arr) => {
  array1.sort((a,b) => a-b);
  let tempArray = [];
  let finalArray = [];

  arr.forEach((curr, ind) => {
    if (curr === arr[ind+1]) {
      tempArray.push(curr);
    } else {
      tempArray.push(curr);
      finalArray.push(tempArray);
      tempArray=[];
    }
  })

  return finalArray.map(a => {
    if (a.length === 1) {
      return a[0]
    } else {
      return a
    }
  })
}
console.log(answer1(array1));

// QUESTION 2 
// Write a javascript function that takes an array 
// of numbers and a target number. The function should find 
// two different numbers in the array that, when added together, 
// give the target number. For example: answer([1,2,3], 4)should 
// return [1,3]

let arr = [1,2,3];
let tar = 4;

const answer2 = (arr, tar) => {
  arr.forEach((num, i) {
    for (let j = 1; j <= arr.length; j++) {
      if (arr[i] + arr[i+j] === tar) {
        let arr2 = [arr[i], arr[i+j]];
        console.log(arr2);
        return arr2;
      }
    }
  })
}

// Question 3: Write a function that converts HEX to RGB. Then 
// Make that function auto-dect the formats so that if you enter 
// HEX color format it returns RGB and if you enter RGB color format 
// it returns HEX.

const answer3 = (hex) => {
  let shorthandRegex = 
}