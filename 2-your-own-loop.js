function loop(start, test, minus, body) {
    for (let final = start;
        test(final);
        final = minus(final)) {
        body(final);
    }
}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1