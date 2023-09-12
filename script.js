
// Display date and time
let time = 1;
setInterval(() => {
    if (time) {
        document.getElementById('display').style.backgroundColor = "black";
        document.getElementById('display').style.color = "white";
        time = 0;
    } else {
        document.getElementById('display').style.backgroundColor = "white";
        document.getElementById('display').style.color = "black";
        time = 1;
    }
    var currentdate = new Date();
    let tmp = ' ' + currentdate.toString().slice(0, 25) + ' ';
    document.getElementById('display').innerText = ' ' + tmp;
}, 1000);


// Onclick button functions
function clean() {
    let text = document.getElementById('res');
    if (text.innerText == 'result' || text.innerText == "Invalid expression !!" || text.innerText == 'Infinity') {
        document.getElementById('res').innerText = '';
        document.getElementById('error').classList.remove('invalid');
    }
}
function one() {
    clean();
    document.getElementById('res').innerText += '1';
}
function two() {
    clean();
    document.getElementById('res').innerText += '2';
}
function three() {
    clean();
    document.getElementById('res').innerText += '3';
}
function four() {
    clean();
    document.getElementById('res').innerText += '4';
}
function five() {
    clean();
    document.getElementById('res').innerText += '5';
}
function six() {
    clean();
    document.getElementById('res').innerText += '6';
}
function seven() {
    clean();
    document.getElementById('res').innerText += '7';
}
function eight() {
    clean();
    document.getElementById('res').innerText += '8';
}
function nine() {
    clean();
    document.getElementById('res').innerText += '9';
}
function zero() {
    clean();
    document.getElementById('res').innerText += '0';
}

// Operators
function plus() {
    clean();
    document.getElementById('res').innerText += '+';
}
function minus() {
    clean();
    document.getElementById('res').innerText += '-';
}
function multiply() {
    clean();
    document.getElementById('res').innerText += '*';
}
function divide() {
    clean();
    document.getElementById('res').innerText += '/';
}
function equal() {
    try {
        let value = eval(document.getElementById('res').innerText);
        document.getElementById('res').innerText = value;
    } catch (error) {
        document.getElementById('res').innerText = "Invalid expression !!";
        document.getElementById('error').classList.add('invalid');
    }
}

function cancel() {
    clean();
    document.getElementById('res').innerText = 'result';
}