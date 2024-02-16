let arrays = [[1, 2, 3], [4, 5], [6]];

console.log( arrays.reduce((reduced, regular) => reduced.concat(regular), [] ))

// → [1, 2, 3, 4, 5, 6]