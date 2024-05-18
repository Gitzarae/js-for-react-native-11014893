function processArray(arrayOfNumbers) {
  return arrayOfNumbers.map((number) => (number % 2 === 0 ? number * number : number * 3));
}

let arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = processArray(arrayOfNumbers);
console.log(newArray);



  
function formatArrayStrings(strings, arrayOfNumbers) {
  let modifiedStrings = [];
for (let i = 0; i < strings.length; i++) {
   if (arrayOfNumbers[i] % 2 === 0 ) {
    modifiedStrings.push(strings[i].toUpperCase());
} else {
    modifiedStrings.push(strings[i].toLowerCase());
        };
};
return modifiedStrings;
};
      
let strings = ["Gummies", "Skittles", "Mars", "Bounty", "Caramel", "Cardberry", "Minigems"];
let modifiedStrings = formatArrayStrings(strings, arrayOfNumbers);
console.log(modifiedStrings);

