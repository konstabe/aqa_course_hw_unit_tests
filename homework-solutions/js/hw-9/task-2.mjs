/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(object) {
  // Ваш код
  const {name, age} = object;
  if (!name || !age || typeof name !== "string" || typeof age !== "number") throw new Error('Incorrect type of objects values');

  characters.push(object);
  return characters;
}

function getCharacter(name) {
  return characters.find((character) => character.name === name);
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== "number") throw new Error('Incorrect type of age');
  return characters.filter(character => character.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  // Ваш код
  const selectedCharacter = getCharacter(name);
  if (!selectedCharacter) throw new Error('The character is not found');

  if (typeof newCharacter?.name !== "string" || typeof newCharacter?.age !== "number") throw new Error("Incorrect type of new character");

  return Object.assign(selectedCharacter, newCharacter);
}

function removeCharacter(name) {
  // Ваш код
  const deleteIndex = characters.findIndex((character)=> character.name === name);
  if (deleteIndex === -1) throw new Error('Character is not found');
  
  characters.splice(deleteIndex,1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
