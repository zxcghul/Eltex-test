let [alphabet, str, strLenght, rep] = ["ABDEFGHIJKLMNOQRTUVWYZ1234567890+-_$~", "", prompt('Введите длину строки:')];

function randomArray(lenght, abc) {
    let array = "";
    for (let index = 0; index < lenght; index++) {  //Забиваем рандомными буквами из нашего алфавита строку длинной strLenght
        array += abc[Math.floor(Math.random() * abc.length)]
    }
    return array
}

function repLetter(array, repCharacter = '', choice = 'string') {
    let [arrayOfSp, newArray] = [["+", "-", "$", "_", "-", "~"], ""];
    if (choice == "string") { 
        for (let index = 0; index < array.length; index++) {
            if (!arrayOfSp.includes(array[index]) && isNaN(array[index])) { //если встретили только букву заменяем ее на введенный символ
                newArray += repCharacter;
            } 
            else {
                newArray += array[index];
            }
        }
    } 

    if (choice == "num") {
        for (let index = 0; index < array.length; index++) {
            if (!isNaN(array[index])) { //если встретили цифру заменяем ее на введенный символ
                newArray += repCharacter;
            } else {
                newArray += str[index];
            }
        }
    }
    return newArray
}

function count(array, letter) { //Функция подсчета кол-ва определенного символа в строке
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] == letter) {
            count += 1;
        }
    }
    return count
}


str = randomArray(strLenght, alphabet);

console.log(str);
rep1 = prompt('Введите символ для замены букв');
str = repLetter(str, rep1, "string");
rep2 = prompt('Введите символ для замены цифр');
str = repLetter(str, rep2, "num");
console.log(str);
console.log(`Кол-во повторений символа: "${rep1}" =`, count(str, rep1));
console.log(`Кол-во повторений символа: "${rep2}" =`, count(str, rep2));
console.log('Кол-во неизменненых символов =', str.length - count(str, rep1) - count(str, rep2));
