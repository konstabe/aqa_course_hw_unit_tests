// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена


async function createTodo (body) {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        if (response.status !== 201) throw new Error(`Ошибка. Статус ответа ${response.status}`);

        const respObj = await response.json();
        if (respObj?.id !== 201) throw new Error(`Ошибка. Id ответа ${respObj?.id}`);

        return respObj;
    } catch(e){
        console.error(e);
        console.log(`Работа функции завершена`);
    }
}