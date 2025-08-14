/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  sortedNumbers = [...numbers].sort ((a, b) => a - b);

  const expectedArray = Array.from({length: numbers.length + 1}, (_, i) => i + 1);
  return expectedArray.find((number, index) => number !== sortedNumbers[index]);
}

export { findMissingNumber };
