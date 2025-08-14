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

function sortedByVowels(wordsArr) {
  const vowels = new Set(['e', 'y', 'u', 'i', 'o', 'a']);
  const vowelsCounter = (phrase) => {
    return [...phrase].reduce((result, word) => result + vowels.has(word), 0);
  };

  return wordsArr.sort((a, b) => vowelsCounter(a) - vowelsCounter(b));
  
  // return wordsArr.sort((a, b)=>{
  //   const aWordArray = a.split('');
  //   const bWordArray = b.split('');

  //   const aVowels = vowels.reduce((result, vowel) =>{
  //     result += aWordArray.filter(word => word === vowel).length;
  //     return result;
  //   }, 0);

  //   const bVowels = vowels.reduce((result, vowel) =>{
  //     result += bWordArray.filter(word => word === vowel).length;
  //     return result;
  //   }, 0);

  //   return aVowels - bVowels;
  // });
}

export { sortedByVowels };
