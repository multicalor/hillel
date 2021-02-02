let log = [];

function promptCalc(log) {
  let result;
  let operation;
  const operations = ["sin", "+", "-", "*", "/", "log", "exit"];
  let firstOperand;
  let secondOperand;
  let trigger;
  let logString = "";
  let exit = true;

  const sum = function (a, b) {
    return a + b;
  };

  const diff = function (a, b) {
    return a - b;
  };

  const mult = function (a, b) {
    return a * b;
  };

  const div = function (a, b) {
    if (b === 0) return "math error: you cannot divide by zero";
    return a / b;
  };

  const sin = (operand) => {
    return Math.sin(operand);
  };

  const math = function (a, b, option) {
    return option(a, b);
  };

  alert("Hello!");
  do {
    do {
      operation = prompt("Enter type of operation or 'exit'");
      console.log(operation);
      trigger = operations.includes(operation.toLowerCase());
      console.log(trigger);
    } while (!trigger);

    if (operation === "exit") {
      exit = !exit;
    } else if (operation === "log") {
      log.forEach((elem) => {
        logString += `${elem}\n`;
      });
      calcFunctions(operation, firstOperand);

    } else if (operation === "sin") { //

      do {
        firstOperand = Number(prompt("Enter operand"));
      } while (isNaN(firstOperand));

      calcFunctions(operation, firstOperand);

    } else {
      do {
        firstOperand = Number(prompt("Enter first operand"));
      } while (isNaN(firstOperand));

      do {
        secondOperand = Number(prompt("Enter second operand"));
      } while (isNaN(secondOperand));
      calcFunctions(operation, firstOperand, secondOperand);
    }
  } while (exit);


// Calc options
function calcFunctions(operation, firstOperand, secondOperand) {
  switch (operation) {
    case "log":
      renderLog(logString);
      break;
    case "+":
      result = `Sum: ${firstOperand} + ${secondOperand} = ${math(
        firstOperand,
        secondOperand,
        sum
      )}`;
      render(result);
      break;
    case "-":
      result = `Diff: ${firstOperand} - ${secondOperand} = ${math(
        firstOperand,
        secondOperand,
        diff
      )}`;
      render(result);
      break;

    case "*":
      result = `Mult: ${firstOperand} * ${secondOperand} = ${math(
        firstOperand,
        secondOperand,
        mult
      )}`;
      render(result);
      break;
    case "/":
      result = `Div: ${firstOperand} / ${secondOperand} = ${math(
        firstOperand,
        secondOperand,
        div
      )}`;
      render(result);
      break;
    case "sin":
      result = `Sin: ${sin(firstOperand)}`;
      render(result);
      break;
    case "exit":
      exit = !exit;
      break;
    default:
      alert("Нет таких операций");
  }
}

// Output and rendering results
function render(result) {
  // Add to LOG
  log.push(result);
  // Console result
  console.log(result);
  // Alert result
  alert(result);

  result = undefined;
}

function renderLog(logString) {
  console.log(logString);
  // Alert log
  alert(logString);
}
}

const startCalc = document.getElementsByTagName('button')
console.log(startCalc)

startCalc[0].addEventListener('click', () => promptCalc(log))