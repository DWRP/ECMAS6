

var flutuante = 1.0;
var inteiro = 0;
var texto = "0";

var arrayFlt = [1.1,2.0,3.4];
var arrayInt = [1,2,3];
var arrayStr = ["TesteA","TesteB","TesteC"];
var arrayDin = [1,2,3,"teste","foi?"];

var obj = {
    flutuante,
    inteiro,
    texto,

    ...arrayDin,
    ...arrayFlt,
    ...arrayInt,
    ...arrayStr
}

console.log(obj);

console.log(...arrayStr.map((item)=>item+" Att"));

function teste(){
    return function teste2(a,b){
        return a+b;
    };
}  

var f1 = teste();

console.log("resultado: " + f1(2,2));


function teste(){
    return (a,b)=> a+b;
} 

var f1 = teste();

console.log("resultado: " + f1(1,1));

a = ()=>"yep"

console.log(a());