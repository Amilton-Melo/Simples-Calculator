const number1 = document.getElementById("number1");
const operation = document.getElementById("operations");
const number2 = document.getElementById("number2");
const result = document.getElementById("result-number");
const btn = document.getElementById("button-calc");

btn.addEventListener("click", () =>{
    if(operation.value === "+"){
        console.log("soma");
        result.value = Number(number1.value) + Number(number2.value);
    }
    else if(operation.value === "-"){
        console.log("subtração");
        result.value = Number(number1.value) - Number(number2.value);
    }
    else if(operation.value === "*"){
        console.log("multiplicação");
        result.value = Number(number1.value) * Number(number2.value);
    }
    else if(operation.value === "/"){
        console.log("divisão");
        result.value = Number(number1.value) / Number(number2.value);
    }
    else if(operation.value === "%"){
        console.log("resto");
        result.value = Number(number1.value) % Number(number2.value);
    }
})
