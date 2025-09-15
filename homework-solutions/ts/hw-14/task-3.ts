// Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов 
// у которых есть как минимум поле salary: number, и возвращается среднее арифметическое 
// зарплат всех переданных объектов

type Employee = {
    salary: number
}

function getAvgSalary<T extends Employee[]>(...args:T){
    const array = [...args];

    const result = array.reduce((sum, arg) => sum + arg.salary, 0) / array.length;
    return result;
}

const emp1  = {salary: 1500, name: "Generic"};
const emp2 = {salary: 2000, surName: "Gena"};

console.log(getAvgSalary(emp1, emp2));