"use strict";
// Проверяем на число
// return false если не число
let isNumber = function(data) {
    return !isNaN(parseFloat(data)) && isFinite(data);
};

let data;
// Угадываем число
function start() {
    let hiddenNumber = 11;
    data = prompt('Угадайте число от 1 до 100');
    // Если пользователь нажал отмена
    if(data === null) {
        alert('Игра не состоялась');
        return false;
    }
    data = Number(data);
    while(data < 1 || data > 100  || !isNumber(data)) {
        data = +prompt('Угадайте число от 1 до 100');
    }
    let resultNumber = function (data) {
        if(data > hiddenNumber) {
            alert('Загаданное число больше');
            start(data);  
        }
        if(data < hiddenNumber) {
            alert('Загаданное число меньше');
            start(data);
        }
        if(data === hiddenNumber) {
            alert('Вы угадали');
            return true;
        }
    };
    resultNumber(data);
    return true;
}   
start();

























