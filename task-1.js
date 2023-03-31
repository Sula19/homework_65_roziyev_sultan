let myArray = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко'];
for (let i = 0; i < myArray.length; i++) {
    switch (myArray[i]) {
        case 'молоко':
            console.log('хорошо');
            break;
        case 'пиво':
            console.log('плохо')
    }
}