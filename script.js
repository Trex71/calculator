const add = function(f, s) {
	f = Number(f);
    s = Number(s);
    return f + s;
};

const subtract = function(f, s) {
	return f - s;
};

const multiply = function(f, s) {
//   let num = 1;
//   for (item in arr) {
//     num *= arr[item];
//   }
//   return num;

    return f * s;
};

const divide = function(f, s) {
    return f / s;
}

const operate = function(op, f, s) {
    if (op == '+') {
        return add(f, s);
    } else if (op == '-') {
        return subtract(f, s);
    } else if (op == '*') {
        return multiply(f, s);
    } else if (op == '/') {
        return divide(f, s);
    } else {
        return 'ERROR';
    }
}

const rotateDisplay2 = function(op) {
    userInput.push(display2.innerText);
    if (op) userInput.push(op); 
    display.innerText += display2.innerText;
    if (op) display.innerText += op;
    display2.innerText = '';
}

const addEventL = function() {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        //console.log(numbers[i]);
        number.addEventListener('click', () => {
            display2.innerText += i+1;
        })
    }

    
    addB.addEventListener('click', () => rotateDisplay2('+'));
    subB.addEventListener('click', () => rotateDisplay2('-'));
    mulB.addEventListener('click', () => rotateDisplay2('*'));
    divB.addEventListener('click', () => rotateDisplay2('/'));
    
    enterB.addEventListener('click', () => result());
     // subB.addEventListener('click', () => {
    //     display.innerText += -;
    // });

    // mulB.addEventListener('click', () => {
    //     display.innerText += *;
    // })
}

const result = function() {
    rotateDisplay2();
    // for (i = 0; i < userInput.length; i++) {
    //     console.log(userInput[i]);
    // }
    console.log(userInput);

    for (i = 0; i < userInput.length; i++) {
        let tmp = 0;
        if (userInput[i] == '+') {
            
            // console.log(userInput[i-1]);
            // console.log('+');
            // console.log(userInput[i+1]);
            // console.log(add(userInput[i-1],userInput[i+1]))

            userInput[i] = add(userInput[i-1],userInput[i+1]);
              console.log(userInput);
            userInput.splice(i-1, 1);
              console.log(userInput);
            userInput.splice(i,1);
              console.log(userInput);
            i -= 2;
              console.log(i);
        }
    }
    console.log(userInput);
}

//let userNumbers = [];
//let userOperators = [];
let userInput = [];
let display = document.getElementById('display');
let display2 = document.getElementById('display2');
let numbers = document.getElementById('numbers').children;
let addB = document.getElementById('add');
let subB = document.getElementById('sub');
let mulB = document.getElementById('mul');
let divB = document.getElementById('div');
let enterB = document.getElementById('enter');
let clearB = document.getElementById('clear');
addEventL();

