/*Ejercicio 1: Realizar el diagrama de flujo para las siguientes operaciones matemáticas: 
    Suma, Resta, División, Multiplicación y el módulo de un número, partiendo de dos números 
    ingresados por el usuario.*/



document.write("<H2> EJERCICIO 1</H2>")
// vínculo a la carpeta que contiene la imagen del proyecto
document.write('<img src = "assets/img/diagrama.png" width=600rem <br>')



/*Ejercicio 2:
    Realizar operaciones con dos números.
    Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos números, calcular lo siguiente:

                            ● Suma

                            ● Resta

                            ● División

                            ● Multiplicación

                            ● Módulo*/


document.write("<H2> EJERCICIO 2</H2>")

alert("Por favor lea las instrucciones")

do {
    var n1 = parseInt(prompt("Ingrese un número mayor de cero"))
    var n2 = parseInt(prompt("Ingrese otro número mayor de cero distinto al primero"))

// condición necesaria para realizar cualquiera de las operaciones, si se cumple, continúa Var opera.
    if (n1 > 0 && n2 > 0) {
        do {

            var opera = prompt(
                "Ingrese el número de la operación que desee \n 1. Suma. \n 2. Resta. \n3. Multiplicación. \n4. División. \n5. Módulo."
            );
// El switch opera detrmina la opración a realizar según la operación seleccionada en la var opera.
            switch (opera) {
                case "1":
                    suma = n1 + n2;
                    document.write("La suma de " + n1 + " y " + n2 + " es:" + suma);

                    break;

                case "2":
                    resta = n1 - n2;
                    document.write("La resta de " + n1 + " y " + n2 + " es:" + resta);

                    break;

                case "3":
                    multiplicacion = n1 * n2;
                    document.write("La multiplicación de " + n1 + " y " + n2 + " es:" + multiplicacion);

                    break;

                case "4":
                    division = n1 / n2;
                    document.write("La división de " + n1 + " y " + n2 + " es:" + division);

                    break;

                case "5":
                    modulo = n1 % n2;
                    document.write("El módulo de " + n1 + " y " + n2 + " es:" + modulo);

                    break;

            }
            // Este while volverá a mostrar la info hasta que el usuario ingrese información válida respecto al número de cada operación (del 1 al 5)
        } while (opera > 5 || opera < 1);
    }
    // Este while volverá a mostrar la info hasta que el usuario ingrese información válida respecto de los números iniciales, que sean mayores que cero.
} while (n1 <= 0 || n2 <= 0) {

}



/*Ejercicio 3:Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.
    Se debe considerar la siguiente información respecto a la equivalencia de las escalas de temperatura:
    ● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos es 0 °C + 273.15 = 273.15 K
    ● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F*/


document.write("<H2> EJERCICIO 3 </H2>")

var t = parseInt(prompt("Ingrese grados Cº"));

const k = Math.floor(273.15)
const f = 9 / 5

var kelvin = t + k
var farenh = (t + f) + 32

document.write(`Su temperatura equivalente en Kelvin es ${kelvin} grados y en Farenheit es ${farenh} grados`)

/* Ejercicio 4: Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. 
Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día.
Se debe considerar lo siguiente:
● 1 año tiene 365 días
● 1 semana tiene 7 días*/

var diasTotales = parseInt(prompt("Ingrese una cantidad de dias"))
// Los días que ingrese el usuario son la var diasTotales. Se dividen por 365 (un año), para determinar la cantidad de años y se agrega Math.floor para que dé sólo los enteros.
var años = Math.floor(diasTotales / 365)
// Para determinar las semanas (var semana) se saca el Módulo de la operación anterior y se divide por 7 (una semana). Nuevamente se añade Math.floor para trabajar solo con los enteros.
var semana = Math.floor((diasTotales % 365) / 7)
// Para determinar los días se saca el módulo de la operación anterior. Se utiliza Math.floor para trabajar solo con los enteros.
var dias = Math.floor((diasTotales % 365) % 7)

// Se interpola para entregar un mensaje de respuesta al usuario
document.write(`${diasTotales} dias, son: <br>${años} años, ${semana} semanas, ${dias} dias`);


/* Ejercicio 5: Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden a continuación.
● La suma de todos los números.
● El promedio de los 5 números ingresados.*/


// Se utilizan prompt para obtener la información (números) por parte del usuario y junto con ello se parseInt cada uno para transformarlos a número válido, y se guardan como variables 
var n1 = parseInt(prompt("Ingrese un número"))
var n2 = parseInt(prompt("Ingrese otro número"))
var n3 = parseInt(prompt("Ingrese un número más"))
var n4 = parseInt(prompt("Ingrese otro número por favor"))
var n5 = parseInt(prompt("Ingrese el último número"))

// Se crea la variable suma, que realiza la adición de las variables que se han obtenido con la info del usuario
var suma = n1 + n2 + n3 + n4 + n5;

// Se crea la variable prom, que realiza la función promedio de las variables que se han obtenido con la info del usuario
var prom = (n1 + n2 + n3 + n4 + n5) / 5

// Se interpola para entregar un mensaje de respuesta al usuario con los resultados de las operaciones realizadas
document.write(`La suma de los números es ${suma}. <br> El promedio de los números es ${prom}`);
