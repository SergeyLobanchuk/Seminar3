// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function convertCube(num1, num2) {
//     let sum = (Math.pow(num1, 3)) + (Math.pow(num2, 3));
//     console.log(sum);
// }
// convertCube(2, 3);


// convertCube((prompt('Введите первое число')), (prompt('Введите второе число')));







// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// function getMoney(number) {
//     let receiveNum = number * 0.87;
//     console.log(`Размер заработной платы за вычетом налогов   ${receiveNum} рублей`);
// }
// let number = Number(prompt('Введите вашу зарплату', 0));
// if (number !== number) {                                        // if (isNaN(number)) // true
//     alert("Значение задано неверно");
// } else getMoney(number);







// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// function maxNumbers(a, b, c) {

//     if (a < b) {
//         max = b;
//     } if (b < c) {
//         max = c;
//     } return max;

// }

// let a = Number(prompt('Введите первое число'));
// let b = Number(prompt('Введите второе  число'));
// let c = Number(prompt('Введите третье число'));
// let max = a;
// maxNumbers(a, b, c);
// console.log(max);



// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):

// 1. Сложение
// function sumNumber(num1, num2) {
//     let sum = num1 + num2
//     return sum;
// } 
// console.log(sumNumber(3, 6));     // sumNumber(Number(prompt('Введите первое число')), Number(prompt('Введите второе число')));

// 3. Умножение
// function multNumber(num1, num2) {
//     let result = num1 * num2
//     return result;
// }
// console.log(multNumber(3, 6));     // multNumber(Number(prompt('Введите первое число')), Number(prompt('Введите второе число')));
                                             



// 4. Деление
// function diffNumber(num1, num2) {
//     let diff = num1 / num2;
//     return diff;

// }
// console.log(diffNumber(3, 6));

// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

