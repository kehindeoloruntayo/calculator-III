function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}
function modulus(number1, number2) {
    return number1 % number2;
}
function squareRoot(number1, number2) {
    return Math.sqrt(number1) + " , " + Math.sqrt(number2);
}

function average(number1, number2) {
    return (number1 + number2)/2;
}

// function average(numbers) {
//     const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
//     return sum / numbers.length;
// }


$(document).ready(function () {
$("form#calculator-form").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#number1").val());
    const number2 = parseInt($("#number2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    let result;
    if (operator === "add") {
        result = add(number1, number2);
    } else if (operator === "subtract") {
        result = subtract(number1, number2);
    } else if (operator === "multiply") {
        result = multiply(number1, number2);
    } else if (operator === "divide") {
        result = divide(number1, number2);
    } else if (operator === "divide") {
        result = divide(number1, number2);
    } else if (operator === "modulus") {
            result = modulus(number1, number2);
    } else if (operator === "square-root") {
        result = squareRoot(number1, number2);
    } else if (operator === "average") {
        result = average(number1, number2);
        // const numbers = [number1, number2];
        // result = average(numbers);
        }
       gjgvghvhvhvghvhgvhv
    $("#result").text(result);
});
});