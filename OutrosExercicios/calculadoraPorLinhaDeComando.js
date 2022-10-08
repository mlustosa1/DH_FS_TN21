var operador =  "Z"
var num1 = "X"
var num2 = "X"
var saida = "S"

while (saida == "S" || saida == "s"){

console.log("---- Bem Vindo a calculadora ----")
  while(isNaN(num1)){
    
    num1 = Number(prompt("Digite o primeiro número: "))
    if(isNaN(num1)){console.log("Isso não é um número!")}
  }
  while(isNaN(num2)){

    num2 = Number(prompt("Digite o segundo número: "))
    if(isNaN(num2)){console.log("Isso não é um número!")}
  }
  while(!("+-*/%".includes(operador))){
    
 operador = prompt("Digite a operação que deseja fazer: ")

    if(!("+-*/%".includes(operador))){console.log("Digite um operador válido. Os operadores válidos são: +,-,*,/,%")}
  }
    if(operador != "X"){
    console.log("O resultado dessa operação é: "+eval(num1 + operador + num2))

    }

  saida = prompt("Voc'ê deseja continuar? Digite S para sim e N para não")

   num1="X"
   num2="X"
   operador="Z"
  
}
console.log("Obrigado por utilizar, volte sempre! ")