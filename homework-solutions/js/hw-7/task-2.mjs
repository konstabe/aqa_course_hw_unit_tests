/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;

  const updatedWord = word.toLowerCase();
  const reversedWord = updatedWord.split('').reverse().join('');
  return updatedWord === reversedWord;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') return [];

  const wordsArray = sentence.split(' ').filter(word => word);
  const maxLength = Math.max(...wordsArray.map(word => word.length));
  return wordsArray.filter(word => word.length === maxLength);
}

export { isPalindrom, findLongestWords };
