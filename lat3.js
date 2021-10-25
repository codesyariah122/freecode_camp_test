// function checkEqual(a, b) {
//   if(a == b){
//     return 'Equal';
//   }else{
//     return 'Not Equal'
//   }
// }

// console.log(checkEqual(1, -1))

// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
//   // Only change code below this line
//   Object.freeze(MATH_CONSTANTS)
//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch(ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

// console.log(PI)

// const magic = () => {
//   return new Date();
// };

// const myConcat = (arr1, arr2) => arr1.concat(arr2)

// console.log(myConcat([1, 2], [3, 4, 5]));

// const increment = (number, value=1) => number + value ;

// console.log(increment(5))


// const sum = (...args) => {
//   return args.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3, 4))


// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// // Only change code below this line

// const{today, tomorrow} = HIGH_TEMPERATURES

// console.log(tomorrow)
// Only change code above this line

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };

// // Only change code below this line

// const {today:{low: lowToday, high: highToday}} = LOCAL_FORECAST

// console.log(highToday)
// Only change code above this line

// let a = 8, b = 6;

// // const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log([a,,, b]);

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = arr.map(d => `<li class="text-warning">${d}</li>`);
//   // Only change code above this line
//   console.log(failureItems)
//   return failureItems;
// }

// const failuresList = makeList(result.failure);

// const createPerson = (name, age, gender) => ({name, age, gender})

// console.log(createPerson("Zodiac Hasbro", 56, "male"))

// Only change code below this line
// const bicycle = {
//   gear: 2,
//   setGear(newGear){
//   	this.gear = newGear
//   }
// };
// // Only change code above this line
// bicycle.setGear(3);
// console.log(bicycle.gear);

// class
// Only change code below this line
class Vegetable{
  constructor(name){
  	this.name = name
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'