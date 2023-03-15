//Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

//Tenemos dos maneras de declararlas...

// FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
}

let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
 console.log(miPrimerAuto);
 console.log(miPrimerAuto.marca);


// EXPRESIÓN DE CLASE
 class Auto {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
}

let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
 console.log(miSegundoAuto);
 console.log(miSegundoAuto.marca);



 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript pueden extender sus propiedades y métodos.

//El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a cualquier tipo de dato se denomina herencia. 



Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
           if (this[ i ] > 3) {
                  arregloModificado.push(false);
           } else {
                  arregloModificado.push(this[ i ]);
           }
    }
    return arregloModificado;
};
  
var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayorQueTres();
console.log(nuevoArreglo);
class LatinoAmerica {
    constructor() {
        this.paises = [ ];
     };
};
  
LatinoAmerica.prototype.agregarPais = function (pais) {
        this.paises.push(pais);
};
 let continente = new LatinoAmerica();
 continente.agregarPais('México');
 console.log(continente.paises);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//En JavaScript, las clases son una forma de crear objetos complejos que pueden tener propiedades y métodos. Los objetos creados a partir de una clase se llaman instancias de la clase.
//Un prototipo en JavaScript es un objeto del que otros objetos heredan propiedades y métodos. En otras palabras, un prototipo es un objeto que sirve como modelo para otros objetos.
//En las clases de JavaScript, los prototipos se utilizan para definir las propiedades y métodos que deben estar disponibles en todas las instancias de la clase. En lugar de definir estas propiedades y métodos directamente en la clase, se definen en el prototipo de la clase.
//Por ejemplo, supongamos que queremos crear una clase llamada "Persona" que tenga propiedades como "nombre" y "edad". Podemos definir la clase de la siguiente manera:


class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}


//Ahora, si queremos agregar un método a todas las instancias de la clase "Persona", podemos hacerlo utilizando el prototipo de la clase. Por ejemplo, podríamos agregar un método llamado "saludar" que imprima un mensaje de saludo en la consola:


Persona.prototype.saludar = function() {
  console.log("Hola, mi nombre es " + this.nombre);
};



//Ahora, todas las instancias de la clase "Persona" tendrán acceso al método "saludar":


const persona1 = new Persona("Juan", 25);
persona1.saludar(); // imprimirá "Hola, mi nombre es Juan" en la consola


//En resumen, un prototipo en JavaScript es un objeto del que otros objetos heredan propiedades y métodos. En las clases de JavaScript, los prototipos se utilizan para definir las propiedades y métodos que deben estar disponibles en todas las instancias de la clase.




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Extender clases nos va a permitir tener una clase general que le heredará propiedades y métodos a otras clases. De esta forma, podremos generar distintas sub-entidades que puedan mantener sus propias características, pero que compartan algunas otras generales.

class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
}
 let mrtin = new Persona('Martin', 26);
 martin.saludar();

 //////////////////////////////////////////

 class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let martin = new Persona('Martín', 26);
 let programador = new Programador('María', 37, 4);
 martin.saludar();
 programador.codear();

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

