"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
  const num = 3;
  // Write the logic to decide if the variable "num" is even or odd
  // and set the element's value the string "Even" or "Odd" accordingly
  evenOrOddElement.innerHTML = "Even";
  evenOrOddElement.innerHTML = "Odd";
}

function sumTheNumbers() {
  const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;
  sumTheNumbersElement.innerHTML = sum;
  // Write the logic to sum the numbers 1 through 10
  // using a for loop. Check the expected output
  // on the assignment page

  for (let i = 1; i <= 10; i++) {
    sum += i;
    sumTheNumbersElement.innerHTML = sum;
  }
}

function createNumberArray() {
  let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  createNumberArrayElement.innerHTML = numberArray;
  // Write the logic to create an array of numbers 1 through 10
  while ((numberArray.length < 10, ++numberArray)) {
    numberArray.push();
  }
}
// to numberArray each iteration. Check the expected output
// on the assignment page
function render() {
  // Call the created functions
  evenOrOdd();
  sumTheNumbers();
  createNumberArray();
  numberArray.push();
}

submissionBtn.addEventListener("click", function () {
  render();
});
