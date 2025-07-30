/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
const minAge = 18;
const maxAge = 60;

for (const age of [10, 17, 18, 19, 59, 60, 61, "2"]) {
  const ageNumber = +age;
  if (typeof ageNumber !== "number") {
    console.log("Incorrect data type");
  } else if (ageNumber < minAge) {
    console.log(`You don't have access cause your age is ${ageNumber} It's less then ${minAge}`);
  } else if (ageNumber >= minAge && ageNumber < maxAge) {
    console.log("Welcome  !");
  } else if (ageNumber > maxAge) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
}