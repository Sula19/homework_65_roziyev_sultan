function mistery() {
    let input = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?", "");
    if (Number(input) === 5 || input === 'пять' || input === 'Пять') {
        alert('Ответ верный')
    } else {
        alert('Ответ не верный')
    }
}

mistery()