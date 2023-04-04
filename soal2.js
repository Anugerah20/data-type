// No 2
function chooseDecimals(n, d) {
  if (typeof n !== 'number' || typeof d !== 'number') {
    return NaN;
  }
  
  const multiplier = Math.pow(10, d);
  return Math.round(n * multiplier) / multiplier;
}
console.log(chooseDecimals(2.100212, 2));
console.log(chooseDecimals(2.100212, 3));
console.log(chooseDecimals(2100, 2));
