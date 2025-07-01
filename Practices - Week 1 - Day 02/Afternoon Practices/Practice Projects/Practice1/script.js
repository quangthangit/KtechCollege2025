const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const deleteButton = document.querySelector(".delete");
const equals = document.querySelector(".equals");
const result = document.getElementById("result");
const calculator = document.getElementById("calculator");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.textContent += number.textContent;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculator.textContent += operator.textContent;
  });
});

deleteButton.addEventListener("click", () => {
  calculator.textContent = "";
  result.textContent = "";
});

equals.addEventListener("click", () => {
  try {
    result.textContent = eval(calculator.textContent);
  } catch (error) {
    result.textContent = "Error";
  }
});
