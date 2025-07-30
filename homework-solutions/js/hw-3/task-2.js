/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
const concat = (n) => {
    if (typeof n !== "number") {
        return "Введите число";
    }
    if (n < 1 || n > 9) {
        return "Число должно быть от 1 до 9";
    }
    const n1 = String(n);
    const n2 = String(n) + String(n);
    const n3 = String(n) + String(n) + String(n);

    return Number(n1) + Number(n2) + Number(n3);
}