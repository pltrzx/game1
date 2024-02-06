'use strict'
let random = Math.ceil(Math.random()* 100 )   
let attempts = 10

let answer = +prompt('Введите число от 1 до 100:')

while( attempts > 0 ) {
    attempts--
    if (answer === random){
        break
    }else if (answer > random){
        alert('Ваше число больше загаданного')
        answer = +prompt('Введите число от 1 до 100:')
    }else {
        alert('Ваше число  меньше загаданного' )
        answer  = +prompt('Введите число от 1 до 100:')
    }
    attempts--
}

if (answer === random){
    alert(`Вы угадали с ${attempts}!`)
}else {
    alert(`Вы проиграли вы лох,попыток больше нет.Было загадано число ${random}`)
}