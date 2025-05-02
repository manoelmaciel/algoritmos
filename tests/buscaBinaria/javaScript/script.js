/* sex 02 mai 2025 11:42:03 
   
   *** script.js
   
  */
   
  // função para criar uma lista ordenada
  function criarLista(size) {
   let lista = [];
   let counter = 1;
   let index = 0;     
   while(counter <= size){
     lista[index] = counter;
     index = counter;
     counter++;
   }
   return lista;
  }

  // criando uma lista 
  myList = criarLista(1000); 

  // mostrando a lista
  // console.log(myList);

  // ---------------------------------------

  // busca binária
  buscaBinaria = (lista, item) => {
    let baixo = 0;
    let alto = lista.length - 1;
    while (baixo <= alto) {
      meio = Math.trunc((baixo + alto) / 2);
      chute = lista[meio];
      if (chute == item) 
        return meio;
      if (chute > item) 
        alto = meio - 1;
      else 
        baixo = meio + 1;
    } 
    return null;
  }

  // busca
  console.log(buscaBinaria(myList, 551));
