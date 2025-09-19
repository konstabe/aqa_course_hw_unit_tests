// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

interface IVehicle {
    getDetails(): string,
    start(): string
}

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

abstract class Vehicle implements IVehicle {
    constructor (protected make: string, protected model: string) {}

    start () {
        return `The vehicle ${this.make} ${this.model} is starting.`
    }

    abstract getDetails (): string
}


// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle {
    
    constructor(protected make: string, protected model: string, private year: number) {
        super(make, model);
    }

    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`
    }
}
// 4. Создайте объект класса Car и проверьте работоспособность

const BMW5 = new Car("BMW", "5 series", 2019);
console.log(BMW5.getDetails());
console.log(BMW5.start());