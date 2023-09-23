// let number_1 = +prompt('Введите любое число')
// let number_2 = +prompt('Введите степень в которою число будет возводится')
// alert(number_1**number_2)


let kolvo = +prompt('Кол-во лесенок')
let number_1 = prompt('Введите первый символ')
let number_2 = prompt('Введите второй символ')
let nado = number_1


 for (i = 0; i < kolvo ; i++) {
 if (i <= 0) {
     console.log(number_2);
 }
 console.log(number_1 + number_2);
 number_1 = number_1 + nado;
 /* Пришлось создавать четвёртую переменную 'nado', я пытался справится без неё но у меня не получалось( */
 }


    

