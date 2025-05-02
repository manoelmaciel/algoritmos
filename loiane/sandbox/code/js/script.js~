/* script.js

     Eloquente JavaScript 
  
         Third Edition
                  
         Marijn Haverbeke

--------------------------------------------------------
Capítulo 2 - Program Structure
sáb 22 jun 2024 22:37:46  

x
let entrada = prompt("Digite algo: ")
let umNumero = Number(entrada);
if (!Number.isNaN(umNumero)) {
  console.log("O número " + umNumero + " é a raiz quadrada de " + 
  umNumero * umNumero);
} else {
  console.log(entrada + " is NaN." )
}

let theNumber = Number(prompt("Digite um número"));
if (!Number.isNaN(theNumber)) {
console.log("O numero digitado é a raíz quadrada de " +
            theNumber * theNumber);
} else {
  console.log(theNumber + " is NaN." );
}

if (1 + 1 == 2) console.log("É verdade esse bilete"); 
// → É verdade esse bilete


let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera

*/

// ter 25 jun 2024 10:12:05 

1;
!false

// Não mostra nada ... E nem reclama. Só executa!

// document.write(1);
// document.write(!false);

// Assim já apresenta algum resultado ... O 'true' demonsta que o código é executado!

/* script.js:53 [Violation] Avoid using document.write(). 
   https://developers.google.com/web/updates/2016/08/removing-document-write
   Como intervir em document.write() 
   https://developer.chrome.com/blog/removing-document-write?hl=pt-br 
   document.write is deprecated */

  // Controle de fluxo

    /* 
    // Linha reta

      let theNumber;
      let theNumber = Number(prompt("Pick a number"));
      console.log(theNumber);
      console.log("The number is the square root of " +
              theNumber * theNumber + ".");
            
    // Concicional
    
      theNumber = Number(prompt("Pick a number ... "));
      if (!Number.isNaN(theNumber)) {
        console.log(theNumber);
        console.log("Your number is the square root of " +
        theNumber * theNumber + ".");
        console.log("Your number is the square root of",
        theNumber * theNumber,".");
      }
      
      / Usar o mais para concatenar em vez de vírgula
         oferece melhor controle da formatação, 
         a vírgula acrescenta espaços nem sempre necessários
         entre os elementos concatenados */
         
      // if(1 + 1 == 2) console.log("1 + 1 = 2 é verdade!");
      
      /* let theNumber = Number(prompt("Pick a number"));
      console.log("This number is", theNumber);
      console.log("Your number is the square root of " +
              theNumber * theNumber);
      console.log("Your number is the cube root of " +
              theNumber ** 3); */


      // Bi-condicional
         
     /* 
        theNumber = Number(prompt("Digite um número: "));
        if (!Number.isNaN(theNumber)) {
          console.log(theNumber);
          console.log("Your number is the square root of " +
          theNumber * theNumber + ".");
        } else {             
          console.log(theNumber);
          console.log(theNumber + " não pode ser convertido em um número.");
        }
      */
    
    
    /* let theNumber = Number(prompt("Digite um número: "));
    if(!Number.isNaN(theNumber)) {
      console.log(theNumber + " é a raiz quadrada de " + theNumber * theNumber);      
    } else {
      console.log("Você não digitou um número!");
    }
    */

   /* let enter;
      enter = prompt("Digite um número: ");
      theNumber = Number(enter)
      if (!Number.isNaN(theNumber)) {
        console.log(theNumber);
        console.log("Your number is the square root of " +
        theNumber * theNumber + ".");
      } else {             
        console.log(enter);
        console.log(enter + " não pode ser convertido em um número.");
      }
    */
    
    // Tri-condicional 
    
 /* let numero = Number(prompt("Digite um número: "));
    if (numero < 10)
      console.log("Esse número é pequeno!");
    else if (numero < 100)
      console.log("Esse número é de porte médio!")
    else
      console.log("Essé é um número grande!");
  */
  
  // Loops WHILE e DO
  
    // WHILE
  
    // sem while
  
    /* console.log(2);
    console.log(4);
    console.log(6);
    console.log(8);
    console.log(10);
    console.log(12); */
    
    // com while
    
    /* let number = 0;
    while(number <= 12) {
      console.log(number);
      number += 2;
    } */

  /*
  let resultado = 1;
  let contador = 0;
  while(contador < 10) {
    resultado *= 2;
    contador += 1;
  }
  console.log(resultado);
  */
  
  // DO

  /* let seuNome;
  do {
    seuNome = prompt("Digete o seu nome: ");    
  } while (!seuNome);
  console.log("Olá " + seuNome); */


  // Recuo de código
  
  /*
      if (false != true) { 
      console.log( "Isso faz sentido." );
      if ( 1 < 2 ) { 
        console.log( "Nenhuma surpresa aí." ); 
      } 
    }
    
  */
    
  // Laços FOR
  
  /* 
  
    for (let n=0; n<= 12; n +=2 )
    console.log(n);
    
    let resultado = 1;
    for (let n=0; n<10; n++)
      resultado *= 2;
    console.log(resultado); 
    
  */
  
  // Saindo de um LOOP
  
  // break
  /* 
    for(let n=100; ; n--) {
      if(n%7===0) 
        console.log(n);
      if(n===21) break;
    }   
  */
  
  // continue
  /*
    for(let n=100; ; n--) {
      if(n===21 || n===28 || n===35 ) continue;
      if(n%7===0) 
        console.log(n);
      if(n===7) break;
    }   
  */
  
  // console.log(-3**2);
  // console.log(-3**3);
     // Uncaught 
     // SyntaxError: Unary operator used immediately before exponentiation expression. 
     // Parenthesis must be used to disambiguate operator precedence (at script.js:206:15)
  // console.log((-3)**2);
     // isso resolve!
  



















































































































































































