// video 1 - 26:15
function avaliaParidade(limiteSuperior){
  for(let i=0; i<limiteSuperior; i++){
    if(i==0)
      console.log(i+" não é um número Par ou Ímpar");
    else if(i%2==1)
      console.log(i+" é um número Ímpar");
    else
      console.log(i+" é um número Par");
  } 
}  

avaliaParidade(10)