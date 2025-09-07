class Employee {
  // Ваш код
  #salary;

  constructor(firstName = "Unknown", lastName = "Unknown", profession = "Unknown", salary = NaN){
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  get firstName(){
    return this._firstName;
  }
  set firstName(value){
    this._firstName = value
  }

  get lastName(){
    return this._lastName;
  }
  set lastName(value){
    this._lastName = value
  }

  get profession(){
    return this._profession;
  }
  set profession(value){
    this._profession = value
  }

  get salary(){
    return this.#salary;
  }
  set salary(value){
    if (value < 0) throw new Error('Incorrect value of salary');
    this.#salary = value;
  }

  getFullName(){
    return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  // Ваш код
  #employees;

  constructor(title = "Unknown", phone = NaN, address = "Unknown", employees = []){
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }

  get title(){
    return this._title;
  }

  get phone(){
    return this._phone;
  }

  get address(){
    return this._address;
  }

  addEmployee(employee) {
    if (employee instanceof Employee){
      this.#employees.push(employee);
    } else throw new Error('Incorrect type of employee');
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}
Адрес: ${this.address}
Количество сотрудников: ${this.getEmployees().length}`;
  }
}

export { Employee, Company };
