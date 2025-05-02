def buscaBinaria(lista, item):
  baixo = 0
  alto = len(lista) - 1 
   
  while baixo <= alto:
    meio = int((baixo + alto) / 2) # o índice tem que ser inteiro
    chute = lista[meio]            # e a divisão sempre retorna um float
                                   # mesmo sendo 2.0 o interpretador reclamou  
    if chute == item:
      return meio    
  
    if chute > item:
      alto = meio - 1
    else:
      baixo = meio + 1      
  return None  

minhaLista = [1, 3, 5, 7, 9]
  
print(buscaBinaria(minhaLista, 5))
# => 2
  
print(buscaBinaria(minhaLista, -1))
# => None
  
