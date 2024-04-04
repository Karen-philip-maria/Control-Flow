// 1. Write a program that takes in an array of numbers and consoles the first four items multiplied by itself 
// and the last two added by 10. Return the array with the new values
function numberAll(numbers){
    const firstFour = numbers.slice(0,4).map(value => value *4);
    const lastTwo =numbers.slice(-2).map(value => +10);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
}
numberAll([2,4,6,8,10,12,14]);

// 2. Write a program that takes in the following array and use a while loop to iterate and 
//break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
function numbersAll(numbers){
    while(numbers.slice(0,3),numbers.slice(5)){
      console.log(numbers)
    if(numbers[4]){
      break;
    }
    }
  }
  numberAll([1,2,3,4,5,6,7,8,9])

// 3. Write a function that takes in a an array of strings and use a continue statement when 
//the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
const arrayFruits= (fruits) =>{
    for(let i = 0; i < fruits.length; i++){
      if (i <fruits.length){
        continue;
      }
      fruits=fruits[2]
    }
    return fruits
  }
  let fruits = ['apple','plum','banana','strawberries','kiwi']
  console.log(arrayFruits(fruits))

// 4. Write a function that accepts an array of strings and console.logs each element using a for loop.
const namesAll = (string) => {
    let newArr = [];
    let strChar = 's'
    for (let i = 0; i < string.length; i++){
        const result = string[i]&strChar;
        newArr.push(result)
    }
    return newArr;
  };
  console.log(namesAll(["jay","joshua","kelvin","baha"]))


// 5. Write a JavaScript function that takes a string as input and reverses it using a while loop. 
//The function should return the reversed string. 
function arrayString(str) {
    let reversed = "";
    let i = str.length - 1;
    while (i >= 0) {
        reversed += str[i];
        i--;
    }
    return reversed;
}
let originalString = "Hey there!";
let reversedString = arrayString(originalString);
console.log(reversedString);