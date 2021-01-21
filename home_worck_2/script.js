alert("Hello!");

let firstOperand = +prompt("Enter first operand"); // не явное преобразование

let secondOperand = Number(prompt("Enter second operand")); //явное преобразование

let resultString = 'Calculations are finished!\n'

// Calculations are finished!
// Sum: 2 + 2 = 4
// Diff: 2 - 2 = 0
// Mult: 2 * 2 = 4
// Div: 2 / 2 = 1


// Console result

console.log("Calculations are finished!");
// Sum
console.log(`Sum: ${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`);
// Diff
console.log(`Sum: ${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);
// Mult
console.log(`Sum: ${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`);
// Div
console.log(`Sum: ${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`);

resultString+= `Sum: ${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}\n`
resultString+= `Diff: ${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}\n`
resultString+= `Mult: ${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}\n`
resultString+= `Div: ${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`

alert(resultString);




