// No 1
function generateRandom (min, max) {
     if(min === null || max === null) {
          return 0;
     } 

     if(max === undefined) {
          max = min;
          min = 0;
     }

     return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandom(20,1));
console.log(generateRandom(1,10));
console.log(generateRandom(6));
console.log(generateRandom());


