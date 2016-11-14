/**
 * Created by alexander.collazo424 on 11/10/16.
 */
var num1 = [Math.floor(Math.random() * 100)];
var num2 = [Math.floor(Math.random() * 100)];
var add  = num1 += num2;
var sub  = num1 - num2;
var mult = num1 * num2;
var div  = num1 / num2;

function sum() {
    document.getElementById("added").value = add;
}

function difference() {
    document.getElementById("subtracted").value = sub;
}

function multiply() {
    document.getElementById("multed").value = mult;
}

function divide() {
    document.getElementById("divided").value = div;
}

function modulus() {

}
//<input type="button" value="modulus">  <input type="text" readonly onclick="()"> <br> <br>