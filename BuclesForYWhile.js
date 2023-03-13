//Bucle For

//Por un lado, el Bucle For es utilizado cuando sabemos con antelación la cantidad máxima exacta de pasos que queremos ejecutar. Esta cantidad máxima de pasos se sitúa como segundo parámetro entre los paréntesis.

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

 //Bucle While

 // El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar la ejecución. Por ejemplo, podríamos pensar en una función que siga agregando +1 hasta llegar a un número determinado. 

 while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };
;
//Expresión Switch
//La expresión Switch evalúa una condición. Compara su valor con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.


//Bucle Do-While
//El bucle Do-While (hacer mientras) ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.


//Declaración Continue
//La declaración continue se utiliza dentro de los Bucles For. Nos permite omitir alguna de las iteraciones si se cumple una condición específica.


//Break
//La declaración break se utiliza dentro de los Bucles For. Nos permite "romper" o finalizar el bucle con antelación si se cumple una condición específica.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Iterar es un término en programación que se refiere a la acción de repetir un bloque de código varias veces. En JavaScript, la iteración generalmente se utiliza para recorrer un arreglo o una colección de elementos. 
//La forma más común de representar la iteración en JavaScript es mediante un ciclo for o un ciclo while. En un ciclo for, se especifica una variable de contador que se incrementa o decrementa en cada iteración, y el ciclo continúa ejecutándose mientras se cumpla una determinada condición. Aquí hay un ejemplo de cómo iterar sobre un arreglo usando un ciclo for en JavaScript:

let //miArreglo = [1, 2, 3, 4, 5];
for (let i = 0; i < miArreglo.length; i++) {
  console.log(miArreglo[i]);
}

//En este ejemplo, la variable i se utiliza como un contador y se inicializa en cero. La condición de finalización del ciclo se especifica como i < miArreglo.length, lo que significa que el ciclo se ejecutará mientras i sea menor que el número de elementos en el arreglo. En cada iteración, el código dentro del cuerpo del ciclo for se ejecutará y el valor del elemento en la posición i del arreglo se imprimirá en la consola usando console.log().
//Un ciclo while es otra forma común de representar la iteración en JavaScript. En un ciclo while, se especifica una condición de finalización y el ciclo continúa ejecutándose mientras se cumpla esa condición. Aquí hay un ejemplo de cómo iterar sobre un arreglo usando un ciclo while en JavaScript:

let //miArreglo = [1, 2, 3, 4, 5];
//let i = 0;
while (i < miArreglo.length) {
  console.log(miArreglo[i]);
  i++;
}

//En este ejemplo, se inicializa la variable i fuera del ciclo while. Dentro del cuerpo del ciclo, se imprime el valor del elemento en la posición i del arreglo y se incrementa el valor de i en cada iteración. El ciclo while continuará ejecutándose mientras i sea menor que el número de elementos en el arreglo.