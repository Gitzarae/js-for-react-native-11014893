function processArray(arrayOfNumbers) {
  return arrayOfNumbers.map((number) => (number % 2 === 0 ? number * number : number * 3));
}

let arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = processArray(arrayOfNumbers);
console.log(newArray);


