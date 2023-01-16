
function Hesapla() {

    /*debugger;*/

    var sayi1 = Number(document.getElementById("txtSayi1").value);

    var sayi2 = parseInt(document.getElementById("txtSayi2").value);
    // isNotaNumber
    if (isNaN(sayi1) || isNaN(sayi2))
        return;

    var result = sayi1 + sayi2;
    document.getElementById("Result").innerHTML = result;
}

var i = 1;
function Sayac() {
    document.getElementById("sayac").innerHTML = i;
    i++;
}

// timer görevi görür....
setInterval(function () {
    Sayac();
}, 1000);


var syc = 0;
var tmr = setInterval(function () {


    var btn = document.createElement("input"); // button
    btn.type = "button";
    btn.value = "btn " + syc;

    document.getElementById("timer").appendChild(btn);

    if (syc == 10) {
        clearInterval(tmr);
    }

    syc++;

}, 1000);