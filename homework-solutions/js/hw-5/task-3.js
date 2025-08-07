/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowels = 'aeiouy';
const consonants = 'bcdfghjklmnpqrstvwxz';

let vowelsCount = 0;
let consonantsCount = 0;
let vowelsAndConsonantsResult = '';

for (let i = 0; i < word.length; i++) {
  const currentWord = word[i].toLowerCase();
  if (vowels.includes(currentWord)) {
    vowelsCount++;
  } 
  if (consonants.includes(currentWord)) {
    consonantsCount++;
  }
}
vowelsAndConsonantsResult += `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
export { vowelsAndConsonantsResult };
