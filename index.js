function fizzbuzz(number) {
    if (typeof(number) !== "number") {
        return "error";
    } else if (number < 1 || number > 21) {
        return 'error'
    } else if (number % 5 === 0 && number % 3 === 0) {
        return 'fizzbuzz'
    } else if (number % 3 === 0) {
        return 'fizz';
    } else if (number % 5 === 0) {
        return 'buzz';
    } else {
        return number;
    }
}

module.exports = {
    fizzbuzz
}
