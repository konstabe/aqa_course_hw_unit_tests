// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

type Callback<T> = (value: T, index: number, arr: Array<T>) => T | undefined;

function fakeMap<T>(array: Array<T>, callBack: Callback<T>): Array<any>{
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray[i] = callBack(array[i], i, array);
    }
    return newArray;
}

const array = [1,2,3,4,5];
const test = fakeMap(array, (el, index) => el * index);

console.log(test);