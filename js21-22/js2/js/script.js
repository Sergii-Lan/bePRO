

var names = [];
for (var i = 0; i < 5; i++) {
    names[i] = prompt('Enter name', '');
}

var userName = prompt('Type your name, please');

var result = false;
for (var i = 0; i < 5; i++) {
    if (names[i] == userName) {
        result = true;
        break;
    }
}

alert(result ? 'hello ' + userName : 'wrong name');

