//------------------- просто HOVER в JS -----------------------------
//------------ знаю - довго, складно, без потреби) ------------------

let highlight = document.querySelectorAll(".highlight");

for (let i = 0; i < highlight.length; i++) {
    highlight[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "orange";
    });
    highlight[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "white";
    });
}

//-------------------------------------------------------------------

document.querySelectorAll(".number, .operation")
    .forEach(el => el.addEventListener("click", numberPick));
    
function numberPick(e) {
    const target = e.target;
    const display = document.querySelector(".display");
    display.value += target.innerText;
}

//-----------дорівнює------------------------------------------------
document.querySelector(".equal")
    .addEventListener("click", equal);
   
function equal() {
    const display = document.querySelector(".display");
    display.value = eval(display.value);
}

//----------корінь квадратний числа----------------------------------
document.querySelector(".sqrt")
    .addEventListener("click", sqrt);
    
function sqrt() {
    const display = document.querySelector(".display");
    display.value = Math.sqrt(display.value);
}

//---------число в квадраті------------------------------------------
document.querySelector(".sqr")
    .addEventListener("click", sqr);
    
function sqr() {
    const display = document.querySelector(".display");
    display.value *= display.value;
}

document.querySelector(".clear")
    .addEventListener("click", clear);

function clear() {
    const display = document.querySelector(".display");
    display.value = null;
}
//--функція ступінь чилса, не зміг її вставити у свій калькулятор----
//-------------тому що вона потребує два числа-----------------------
// function power(x, y) {
//     let result = 1;
//     for (let i = 0; i < y; i++) {
//         result *= x;
//     }
//     return result;
// }

// document.querySelector(".pow")
//     .addEventListener("click", pow);
    
// function pow(x) {
//     const display = document.querySelector(".display");
//     display.value = Math.pow(display.value);
// }