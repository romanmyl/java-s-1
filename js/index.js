//alert('Hallo');
//console.log('Hallo');
//document.write('Hallo');

var year = Number(prompt('Input year'));
var month = Number(prompt('Input month'));
var day = Number(prompt('Input day'));
var sum = sumArgs(year, month, day);
var text = 'Your magic number :';
var result = text + sum;
document.write(result);

function sumArgs(a, b, c) {
    var result = a + b + c;
    return result;
}

function tellAge(age) {
    if (age < 18) {
        return ' You are kid ';
    } else {
        return ' You are addolt ';
    }
}

var age = Number(prompt('Tell your age'));
var result = tellAge(age);
document.write(result);

result = Math.sqrt(25);
document.write(result);

