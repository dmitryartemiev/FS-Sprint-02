"use strict";

function checkBrackets(arg) {
  // набор переменных

  let stack = [];

  // проверка строка ли это или есть ли в ней скобки, если нет, то возвращает -1
  if (!(typeof arg === "string") || !arg.match(/[()]/)) {
    return -1;
  } else {
    // циклом создаем массив только из скобочек
    for (let i = 0; i <= arg.length; i++) {
      if (arg.charAt(i) == "(") {
        stack.push("(");
      }
      if (arg.charAt(i) == ")") {
        stack.push(")");
      }
    }
    //превращаем массив в строчку 
    stack = stack.join("");
    //пищем цикл, который заменяет каждый проход все "()" на пустое место
    //(удаляет правильные комбинации скобочек)
    for (let i = 0; i <= arg.length; i++) {
      stack = stack.replace(/\(\)/, "");
    }
  }
  //   console.log(stack); - вывести строчку из неправильных комбинаций скобочек
  //возвращаем длину строчки, состоящей только из неправильных комбинаций скобочек
  return stack.length;
}
console.log(checkBrackets('))(('));
