"use strict";

let animalName;
let gender;
let age;
let status;

animalName = prompt("What animal is the superhero most similar to?");
if (animalName.length <= 20 && !animalName.includes(" ") && animalName !== "") {
  gender = prompt(
    "Is the superhero male of female Leave blank if unknown or other"
  );
  if (gender.match(/male/gim) || gender.match(/female/gim) || gender === "") {
    age = prompt("How old is the superhero?");
    if (age.match(/\b\d+\b/gim)) {
      if (gender.match(/male/gim) && age < 18) {
        status = "boy";
      }
      if (gender.match(/male/gim) && age >= 18) {
        status = "man";
      }
      if (gender.match(/female/gim) && age < 18) {
        status = "girl";
      }
      if (gender.match(/female/gim) && age >= 18) {
        status = "woman";
      }
      if (gender === "" && age < 18) {
        status = "kid";
      }
      if (gender === "" && age >= 18) {
        status = "man";
      }

      let result =
        "The superhero name is: " +
        animalName.toLowerCase() +
        "-" +
        status +
        "!";
      alert(result);
    } else {
      alert("Wrong input");
    }
  } else {
    alert("Wrong input");
  }
} else {
  alert("Wrong input");
}
