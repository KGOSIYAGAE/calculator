class calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  setAddition(numA, numB) {
    this.num1 = numA;
    this.num2 = numB;
  }

  setMinus(numA, numB) {
    this.num1 = numA;
    this.num2 = numB;
  }

  setDivision(numA, numB) {
    this.num1 = numA;
    this.num2 = numB;
  }

  setMultiplication(numA, numB) {
    this.num1 = numA;
    this.num2 = numB;
  }

  setPercentage(numA) {
    this.num1 = numA;
  }

  getAddition() {
    return this.num1 + this.num2;
  }

  getMinus() {
    return this.num1 - this.num2;
  }

  getDivision() {
    return this.num1 / this.num2;
  }

  getMultiplication() {
    return this.num1 * this.num2;
  }

  getPercentage() {
    return this.num1 / 100;
  }
}

const calc = new calculator();

let numA = 0;
let numB = 0;
let inputBox;
let buttonText;

//NUMBER BUTTONS
let numBtn = document.querySelectorAll("#num");
for (i of numBtn) {
  i.addEventListener("click", function () {
    document.getElementById("inputValue").value += this.innerHTML;
    document.getElementById("AC").innerHTML = "C";
  });
}

//AC BUTTON
let AC = document.getElementById("AC");
AC.addEventListener("click", function () {
  inputBox = document.getElementById("inputValue").value = null;

  if (inputBox === null) {
    document.getElementById("AC").innerHTML = "AC";
  }
});

//OPERATOR BUTTONS
let operatorBtns = document.querySelectorAll("#operator");
for (i of operatorBtns) {
  i.addEventListener("click", function () {
    numA = document.getElementById("inputValue").value;
    document.getElementById("inputValue").value = null;

    let f = this.innerHTML;

    inputBox = this.innerHTML;
  });
}

//PERCENTAGE BUTTON
let percentageBtn = document.getElementById("percentBnt");
percentageBtn.addEventListener("click", function () {
  numA = document.getElementById("inputValue").value;

  numA = parseInt(numA);
  calc.setPercentage(numA);
  document.getElementById("inputValue").value = calc.getPercentage();
});

//PLUS_MINUS BOTTON
let plusMinusBtn = document.getElementById("plusMinusBtn");
plusMinusBtn.addEventListener("click", () => {
  let numCheck = document.getElementById("inputValue").value;

  numCheck = parseInt(numCheck);

  if (numCheck < 0) {
    numCheck = Math.abs(numCheck);
    document.getElementById("inputValue").value = numCheck;
  } else {
    numCheck = -Math.abs(numCheck);
    document.getElementById("inputValue").value = numCheck;
  }
});

//EQUALS BUTTON
let equalsBtn = document.querySelectorAll("#equals");
for (i of equalsBtn) {
  i.addEventListener("click", function () {
    numB = document.getElementById("inputValue").value;

    numA = parseInt(numA);
    numB = parseInt(numB);

    switch (inputBox) {
      case "+":
        calc.setAddition(numA, numB);
        document.getElementById("inputValue").value = calc.getAddition();
        break;

      case "-":
        calc.setMinus(numA, numB);
        document.getElementById("inputValue").value = calc.getMinus();
        break;

      case "/":
        calc.setDivision(numA, numB);
        document.getElementById("inputValue").value = calc.getDivision();
        break;

      case "x":
        calc.setMultiplication(numA, numB);
        document.getElementById("inputValue").value = calc.getMultiplication();
        break;

      default:
        document.getElementById("inputValue").value = "Invalid operator";
        break;
    }

    document.getElementById("AC").innerHTML = "AC";
  });
}
