const sumNumbers = (first, second) => {
  let firstNumber = Number(first);
  let secondNumber = Number(second);

  if (Number.isSafeInteger(firstNumber) && Number.isSafeInteger(secondNumber)) {
    return firstNumber + secondNumber;
  } else {
    throw new Error("Number(s) is too big");
  }
};
// console.log(sumNumbers("1", "9223"));
// console.log(sumNumbers("1", "92233720368547750"));
