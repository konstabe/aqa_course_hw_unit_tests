// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword (password: string): boolean {
    // Пароль должен быть не менее 8 символов.
    const validateLength = (password: string) => password.length >= 8;
    const validateSpace = (password: string) => password.split(" ").length > 0;
    const validateNumber = (password: string) => password.split("").some(char => char >= "0" && char <= "1");
    const validateUpperCase = (password: string) => /[A-Z]/.test(password);
    const validateLowerCase = (password: string) => /[a-z]/.test(password);
 
    const validators = [
        validateLength, validateSpace, 
        validateNumber, validateLowerCase,
        validateUpperCase
    ] as const;

    return validators.every((callback) => callback(password) === true);
}

validatePassword("asd")