[:arrow_left: Voltar](../README.md)

A)
```
for(var i = 0; i <= 3; i++) {
  setTimeout(function() { console.log(i); }, 100);
}
```
A função setTimeOut, cria um timer com ID único que ao final do counter loga o valor da variável i. Antes do log ser executado o loop for já estará completo, oque indica que todos os timers irão logar o valor condicional da parada do loop, no caso da funcão acima o valor 4.

B)
Para corrigir esse problema, o setTimeOut aceita insersão de argumentos após o valor do delay o código ficá da seguinte forma:

```
for(var i = 0; i <= 3; i++) {
  setTimeout(function(i) { console.log(i); }, 100, i);
}
```
Perceba que dessa forma o valor atual da variavel 'i' será inserida como argumento no timer, dessa forma todos os timers irão logar seus respectivos "i"s.


Para visualizar as duas ocorrencias, execute 
```node setTimeOut_test.js```
