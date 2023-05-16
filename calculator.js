let elResult = document.getElementById('result')

function Number_(number) {
    elResult.value += number;
}

function add() { //덧셈
   elResult.value += "+";
}

function minus() { //뺄셈
    elResult.value += "-";
}

function multiply() { //곱
    elResult.value += "*";
}

function divide() { //나누기
    elResult.value += "/";
}

function clearInput() {
    elResult.value = "";
}

function calculate() {
    var input = elResult.value;
    var result = eval(input);
    elResult.value = result;
}




/*
<style>
    .button {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 20px;
            margin: 5px;
            }
</style> 
*/