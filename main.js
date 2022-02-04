const isNumber = (num) => {
    return (!isNaN(parseFloat(num)) && isFinite(num) && !(/\s/.test(num)))
}

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let game = () => { 
    let randomNum = getRandomArbitrary(1, 100);
    console.log(randomNum);
    let userNum = 0;
    let lives = 10;
    function result() {
        
        if (lives < 0) {
            if (confirm("Попытки закончились, хотите сыграть еще?")) {
                game();
            } else {
                return alert("До свидания!");
            }
        } else {
            userNum = +prompt("Угадай число от 1 до 100");
            if (userNum === 0) {
                return alert("Игра окончена!");
            } else {
                if (isNumber(userNum)) {
                    lives--;
                    if (userNum > randomNum) {
                        alert("Загаданное число меньше, осталось попыток " + lives);
                        result();
                    } else if (userNum < randomNum) {
                        alert("Загаданное число больше, осталось попыток " + lives);
                        result();
                    } else if (userNum === randomNum) {
                        if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                            game();
                        } else {
                            return alert("Игра окончена!")
                        }
                    } 
                } else {
                    alert("Введите число!")
                    result();
                }
            }
        }
    }
    result();
}

game();