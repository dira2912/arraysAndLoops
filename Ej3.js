//PEDES IN TERRA AD SIDERA VISUS

//Prt. 1
var x = parseInt(prompt("Ingrese valor de vaiable X:"));

for (var i = x; i > 0; i-= 0.5){
    console.log(i)
}

//Prt. 2
for (let x = 0; x <= 100; x++)
{
    var numb = x;
    var odd = numb % 2;
    if (odd != 0) { console.log(numb);}
   
}

//Prt. 3
var n = 0;

while (n < 5)
{
    
    n++;
    console.log("["+n+"]");
}

//Prt. 4
var n = 0;
var x = 0
var select =  parseInt(prompt("Igrese un valor entero"));
while (n < select)
{
    
    n++;
    x += n;
}
console.log("n = " + select +" Sum = " + x);
