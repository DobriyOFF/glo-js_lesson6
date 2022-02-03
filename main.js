const isNumber = (num) => {
    return (!isNaN(parseFloat(num)) && isFinite(num) && !(/\s/.test(num)))
}

let game = () => { 
    let randomNum = 50;
    let lives = 10;
    function result() {
        lives--;
        if (lives < 0) {
            if (confirm("Попытки закончились, хотите сыграть еще?")) {
                game();
            } else {
                return alert("До свидания!");
            }
        } else {
            let userNum = prompt("Угадай число от 1 до 100");
            if (userNum === null) {
                return alert("Игра окончена!");
            }
            if (isNumber(userNum)) {
                userNum = +userNum;
                if (userNum > randomNum) {
                    alert("Загаданное число меньше, осталось попыток " + lives);
                    result();
                } else if (userNum < randomNum) {
                    alert("Загаданное число больше, осталось попыток " + lives);
                    result();
                } else if (userNum === randomNum) {
                    if (confirm("Поздравляю, Вы угадали!!! Сыграем еще?")) {
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
    result();
}

let userNumber = game();

userNumber();