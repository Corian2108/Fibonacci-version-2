//Autor: Jeffo
//Tema: Tabla de Fibonacci
var divDatos = document.getElementById("datos");
divDatos.style.display = "none";

document.getElementById("generar")
    .addEventListener("click", function () {
        // consigue los valores de los input
        var p = parseInt(document.getElementById("primerDigito").value);
        var s = parseInt(document.getElementById("segundoDigito").value);
        var m = parseInt(document.getElementById("maximo").value);

        // genera la serie de fibonacci
        fibonacci = new Solver(p, s, m);
        fibonacci.serie = [];
        fibonacci.generador();
        

        // muestra el div datos
        divDatos.style.display = "block";

        // muestra la serie en la tabla
        fibonacci.mostrar();

        //vaciar datos
        document.getElementById("primerDigito").value = "";
        document.getElementById("segundoDigito").value = "";
        document.getElementById("maximo").value = "";

    });