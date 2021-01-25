
alert("Hello!");

let firstOperand = +prompt("Enter first operand"); // не явное преобразование

let secondOperand = Number(prompt("Enter second operand")); //явное преобразование

let resultString = 'Calculations are finished!\n'

// Calculations are finished!
// Sum: 2 + 2 = 4
// Diff: 2 - 2 = 0
// Mult: 2 * 2 = 4
// Div: 2 / 2 = 1

resultString+= `Sum: ${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}\n
Diff: ${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}\n
Mult: ${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}\n
Div: ${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`

// Console result
console.log(resultString);
// Alert result
alert(resultString);





