/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function vowelsCounter (phrase) {
  const vowels = new Set(['e', 'y', 'u', 'i', 'o', 'a']);
  return [...phrase].reduce((result, word) => result + vowels.has(word.toLowerCase()), 0);
};

function sortedByVowels (wordsArr) {
  return wordsArr.sort((a, b) => vowelsCounter(a) - vowelsCounter(b));
}

export { sortedByVowels };
