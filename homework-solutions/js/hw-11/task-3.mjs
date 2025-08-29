class Employee {
  // Ваш код
  #salary;

  constructor(firstName = "Unknown", lastName = "Unknown", salary = NaN){
    this._firstName = firstName;
    this._lastName = lastName;
    this.#salary = salary;
  }

  isNameValid(value){
    return typeof value === "string" 
      && value.length >= 2
      && value.length <= 50
      && /^[A-Za-z]+$/.test(value);
  }

  isSalaryValid(value) {
    return typeof value === "number"
      && value > 0
      && value < 10000;
  }

  isToolValid(value) {
    return typeof value === "string"
    && value.length > 0;
  }

  validateValue(value, validator, errMsg){
    const isValid = validator(value);
    if (!isValid) throw new Error(errMsg);

    return isValid;
  }

  get firstName(){
    return this._firstName;
  }
  set firstName(value){
    this.validateValue(value, this.isNameValid, `FirstName is not valid`);
    this._firstName = value
  }

  get lastName(){
    return this._lastName;
  }
  set lastName(value){
    this.validateValue(value, this.isNameValid, `LastName is not valid`);
    this._lastName = value
  }

  get salary(){
    return this.#salary;
  }
  set salary(value){
    this.validateValue(value, this.isSalaryValid, `Salary is not valid`);
    this.#salary = value;
  }

  getFullName(){
    return `${this._firstName} ${this._lastName}`;
  }
}

class Developer extends Employee {

  constructor(firstName, lastName, salary, programmingLanguages = []){
    super(firstName, lastName, salary);
    this._programmingLanguages = programmingLanguages;
  }

  get programmingLanguages(){
    return this._programmingLanguages;
  }

  addProgrammingLanguage(value){
    this.validateValue(value, this.isToolValid, `Programm lang is not valid`);
    this.programmingLanguages.push(value);
  }
}

class Manager extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, teamSize){
    super(firstName, lastName, salary);
    this._teamSize = teamSize;
  }

  get teamSize(){
    return this._teamSize;
  }
  set teamSize(value){
    this._teamSize = value;
  }

  increaseTeamSize(){
    this.teamSize++;
  }
}

class Designer extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, designTools = []){
    super(firstName, lastName, salary);
    this._designTools = designTools;
  }

  get designTools(){
    return this._designTools;
  }
  set designTools(value){
    this._designTools = value;
  }

  addDesignTool(tool){
    this.validateValue(tool, this.isToolValid, `Design tool is not valid`);
    this.designTools.push(tool);
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
      const isExist = this.getEmployees().find(emp => emp.firstName === employee.firstName && emp.lastName === employee.lastName);
      if (isExist) throw new Error(`Employee with this name and surname is exist`);

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

  getEmployeesByProfession(value){
    return this.getEmployees().filter(employee =>  employee?.constructor?.name === value);
  }
}

export { Employee, Company, Designer, Developer, Manager };
