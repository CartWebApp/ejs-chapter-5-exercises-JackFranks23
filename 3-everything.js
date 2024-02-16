function every(array, test) {
  final = 0;
  for (i = 0; i < array.length; i++)
  final = array[i] - array[i - 1]
  return test(final)
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true