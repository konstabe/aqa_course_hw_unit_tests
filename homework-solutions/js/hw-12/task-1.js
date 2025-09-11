// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат  промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

function delayTwoSeconds (callback) {
    setTimeout(() => {callback()}, 2000);
}

const task2 = new Promise((res)=>res(1));
task2.then(res=>console.log(res));

const task3 = new Promise((_, rej) => rej("Promise failed"));
task3.catch(err=>console.log(err));

function promiseNumber (number){
    if (typeof number !== "number") throw new Error(`${number} is not type of Number`);
    return new Promise((res)=>res(number));
}

Promise.all([
    promiseNumber(1), promiseNumber(2), promiseNumber(3)
]).then(res=>res.forEach(result=>console.log(result)));

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(res=>res.forEach(({status, value})=>console.log("status:",status,"value:",value)));

async function runPromises() {
    try {
        const results = await Promise.all([
            promiseNumber(1),
            promiseNumber(2),
            promiseNumber(3)
        ]);

        results.forEach(result => console.log(result));

        const settled = await Promise.allSettled([
            promiseNumber(1),
            promiseNumber(2),
            promiseNumber(3)
        ]);

        settled.forEach(({status, value}) => {
            console.log("status:",status, "value:",value);
        });

    } catch (err) {
        console.error("Ошибка:",err.message);
    }
}