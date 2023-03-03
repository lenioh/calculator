/* lets get the numbers function first */

/* 
megnyomod gombot
gomb hozzáadja a karaktert a stringhez
stringet átalakítjuk műveletté
eredmény kiíródik

*/
let equations = [];
let display = document.querySelector(".actualbar");
let answer = document.querySelector(".answerbar");
let value = null;

const zeroBtn = document.getElementById("zero").addEventListener("click", function(){
    equations.push(0);
    join = equations.join('');
    display.innerText = join;
});
const oneBtn = document.getElementById("one").addEventListener("click", function(){
    equations.push(1);
    join = equations.join('');
    display.innerText = join;
});
const twoBtn = document.getElementById("two").addEventListener("click", function(){
    equations.push(2);
    join = equations.join('');
    display.innerText = join;
});
const threeBtn = document.getElementById("three").addEventListener("click", function(){
    equations.push(3);
    join = equations.join('');
    display.innerText = join;
});
const fourBtn = document.getElementById("four").addEventListener("click", function(){
    equations.push(4);
    join = equations.join('');
    display.innerText = join;
});
const fiveBtn = document.getElementById("five").addEventListener("click", function(){
    equations.push(5);
    join = equations.join('');
    display.innerText = join;
});
const sixBtn = document.getElementById("six").addEventListener("click", function(){
    equations.push(6);
    join = equations.join('');
    display.innerText = join;
});
const sevenBtn = document.getElementById("seven").addEventListener("click", function(){
    equations.push(7);
    join = equations.join('');
    display.innerText = join;
});
const eightBtn = document.getElementById("eight").addEventListener("click", function(){
    equations.push(8);
    join = equations.join('');
    display.innerText = join;
});
const nineBtn = document.getElementById("nine").addEventListener("click", function(){
    equations.push(9);
    join = equations.join('');
    display.innerText = join;
});
const dotBtn = document.getElementById("dot").addEventListener("click", function(){
    equations.push(`.`);
    join = equations.join('');
    display.innerText = join;
});
const clearBtn = document.getElementById("clear").addEventListener("click", function(){
    equations = [];
    display.innerText = equations;
    answer.innerText = '';
});
const multiplyBtn = document.getElementById("multiply").addEventListener("click", function(){
    equations.push(`*`);
    join = equations.join('');
    display.innerText = join;
});
const divideBtn = document.getElementById("divide").addEventListener("click", function(){
    equations.push(`/`);
    join = equations.join('');
    display.innerText = join;
});
const signflipBtn = document.getElementById("signflip").addEventListener("click", function(){
    if (typeof equations == 'number') {
        equations = -1* equations;
        value = equations;
    } else {
        join = equations.join('');
        equations = -1 * (parseFloat(join));
        value = equations;
    }
    equations = [value];

    answer.innerText = equations;
});
const minusBtn = document.getElementById("minus").addEventListener("click", function(){
    equations.push(`-`);
    join = equations.join('');
    display.innerText = join;
});
const plusBtn = document.getElementById("plus").addEventListener("click", function(){
    if (typeof equations == 'number') {
        equations = Array.from(equations)
    }
    equations.push(`+`);
    join = equations.join('');
    display.innerText = join;
});
const equalBtn = document.getElementById("equal").addEventListener("click", function(){
    join = equations.join('');
    value = (splitEquation(join).toFixed(2));
    answer.innerText = splitEquation(join).toFixed(2);
    equations = [value];

});

/* make the whole array into one big string */

/* calculator functions */
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}
/* not even using it, the signflip breaks the whole thing rn */
function signflip(numberOne) {
    return ((-1) * numberOne);
}

/* make the array into two little babies based on the function sign */
function splitEquation (string) {
    let firstNumber;
    let secondNumber;
    let splitter;
    if (string.includes(`*`)) {
        splitter = string.split(`*`);
        firstNumber = parseFloat(splitter[0]);
        secondNumber = parseFloat(splitter[1]);
        return multiply(firstNumber, secondNumber);
    } else if (string.includes(`/`)) {
        splitter = string.split(`/`);
        firstNumber = parseFloat(splitter[0]);
        secondNumber = parseFloat(splitter[1]);
        return divide(firstNumber, secondNumber);
    } else if (string.includes(`+`)) {
        splitter = string.split(`+`);
        firstNumber = parseFloat(splitter[0]);
        secondNumber = parseFloat(splitter[1]);
        return add(firstNumber, secondNumber);
    } else if (string.includes(`-`)) {
        let negativeSchizoprhenia = string.match(/-/g);
        console.log(negativeSchizoprhenia);
        if (negativeSchizoprhenia[0] == '-') {
            console.table(negativeSchizoprhenia);
            splitter = string.slice(1).split('-');
            console.table(splitter);
            firstNumber = -1* parseFloat(splitter[0]);
            console.log(firstNumber);
            secondNumber = parseFloat(splitter[1]);
            console.log(secondNumber);
            return subtract(firstNumber, secondNumber);
        } else {
            splitter = string.split(`-`);
            firstNumber = parseFloat(splitter[0]);
            secondNumber = parseFloat(splitter[1]);
            return subtract(firstNumber, secondNumber);
        }

    }
    
}

/* 
array with numbers and functions : [3, 4, 4, +, 1, 5]

    let holderArray = [];

join them to string: '344+15'

    let joinedArray = holderArray.join('');

split them by sign secondArray[0] = 344, secondArray[1] = 15

    function splitBySign (string) {
        let firstNumber;
        let secondNumber;
        let splitter;
        if (string.includes(`+`)) {
            splitter = string.split(`+`);
            firstNumber = parseFloat(splitter[0]);
            secondNumber = parseFloat(splitter[1]);
            return add(firstNumber, secondNumber);
        } else if (string.includes(`-`)) {
            splitter = string.split(`-`);
            firstNumber = parseFloat(splitter[0]);
            secondNumber = parseFloat(splitter[1]);
            return subtract(firstNumber, secondNumber);
        } else if (string.includes(`*`)) {
            splitter = string.split(`*`);
            firstNumber = parseFloat(splitter[0]);
            secondNumber = parseFloat(splitter[1]);
            return multiply(firstNumber, secondNumber);
        } else if (string.includes(`/`)) {
            splitter = string.split(`/`);
            firstNumber = parseFloat(splitter[0]);
            secondNumber = parseFloat(splitter[1]);
            return divide(firstNumber, secondNumber);
        }
    }

keep the answer in a variable value = 359

 :))))


keep up with value change
*/