"use strict";

function checkDivision(beginRange, endRange) {
  if (
    beginRange === "" ||
    endRange === "" ||
    beginRange === null ||
    endRange === null ||
    beginRange >= endRange
  ) {
    alert("The default range is from 1 to 100");
    beginRange = 1;
    endRange = 100;
  } //Проверка вводимых чисел

  for (let i = beginRange; i <= endRange; i++) {
    let result = i;

    if (!(i % 2)) {
      result = result + " is even";
    }

    if (!(i % 3)) {
      result = result + " is a multiple of 3";
    }

    if (!(i % 10)) {
      result = result + " is a multiple of 10";
    }

    if (!(i % 3) && !(i % 2)) {
      result = i + " is even, a multiple of 3";
    }

    if (!(i % 3) && !(i % 10)) {
      result = i + "a multiple of 3, a multiple of 10";
    }

    if (!(i % 2) && !(i % 10)) {
      result = i + " is even, a multiple of 10";
    }

    if (!(i % 3) && !(i % 2) && !(i % 10)) {
      result = i + " is even, a multiple of 3, a multiple of 10";
    }

    console.log(String(result));
  }
}

checkDivision(
  Number(prompt("Enter begin of range")),
  Number(prompt("Enter end of range"))
);
