/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  if (typeof number !== 'number') return NaN;

  const str = String(number);
  const numbers = str.split("").map(Number);

  const sum = numbers.reduce((prev, current) => prev + current);

  if (sum <= 9) return sum;

  return digitalRoot(sum);
}

export { digitalRoot };
