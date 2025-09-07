class Employee {
  // Ваш код
  #salary;

  constructor(firstName = "Unknown", lastName = "Unknown", profession = "Unknown", salary = NaN){
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  #isNameValid(value){
    return typeof value === "string" 
      && value.length >= 2
      && value.length <= 50
      && /^[A-Za-z]+$/.test(value);
  }

  #isProfessionValid(value) {
    return typeof value === "string"
      && value.length > 0
      && /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value);
  }

  #isSalaryValid(value) {
    return typeof value === "number"
      && value > 0
      && value < 10000;
  }

  validateValue(value, validator){
    return validator(value);
  }

  get firstName(){
    return this._firstName;
  }
  set firstName(value){
    const validationResult = this.validateValue(value, this.#isNameValid);
    if (!validationResult) throw new Error(`FirstName is not valid`);

    this._firstName = value
  }

  get lastName(){
    return this._lastName;
  }
  set lastName(value){
    const validationResult = this.validateValue(value, this.#isNameValid);
    if (!validationResult) throw new Error(`LastName is not valid`);

    this._lastName = value
  }

  get profession(){
    return this._profession;
  }
  set profession(value){
    const validationResult = this.validateValue(value, this.#isProfessionValid);
    if (!validationResult) throw new Error(`Profession is not valid`);

    this._profession = value
  }

  get salary(){
    return this.#salary;
  }
  set salary(value){
    const validationResult = this.validateValue(value, this.#isSalaryValid);
    if (!validationResult) throw new Error(`Salary is not valid`);

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

  #getEmployeeIndex(name){
    const searchIndex = this.getEmployees().findIndex((employee)=> employee.firstName === name);

    if (searchIndex === -1) throw new Error(`Employee ${name} not found hehe`);
    return searchIndex;
  }

  findEmployeeByName(name){
    const index = this.#getEmployeeIndex(name);
    return this.getEmployees()[index]
  }

  removeEmployee(name){
    const employeeIndex = this.#getEmployeeIndex(name);
    this.getEmployees().splice(employeeIndex,1);
  }

  getTotalSalary(){
    return this.getEmployees().reduce((result, employee) => result + employee.salary,0);
  }
}

export { Employee, Company };
