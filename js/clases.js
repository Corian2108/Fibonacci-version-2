//Autor: Jeffo
//Tema: Tabla de Fibonacci

class Solver {
    constructor(p, s, m, mult) {
        //Atributos
        this.primero = p;
        this.segundo = s;
        this.maximo = m;
        this.multiploABuscar = mult;

        //Almacen
        this.serie = [];
        this.multiplos = [];

        //Metodos
        this.generador = generar;
        this.mostrar = mostrar;
        this.calculaMultiplo = calculaMultiplo;
    }
}

//funciones

function generar() {
    this.serie.push(this.primero);
    this.serie.push(this.segundo);
    console.log(this.serie);
    calcularSerie(this.serie, this.maximo);
}

function calcularSerie(serie, tope) {

    if (serie[serie.length - 2] + serie[serie.length - 1] < tope) {
        nuevo = serie[serie.length - 2] + serie[serie.length - 1]
        serie.push(nuevo);
        console.log(nuevo);
        return calcularSerie(serie, tope);
    }
}

var tr = document.createElement("tr");
var contadorColumna = 0;

function mostrar() {
    tr = document.createElement('tr');
    tablaDeDatos.appendChild(tr)
    contador(0);
}

function contador(inicio, tope) {
    tope = fibonacci.serie.length;
    if (inicio < tope) {
        insertarColumna(inicio);
        return contador(++inicio)

    }
}

function insertarColumna(item) {
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(fibonacci.serie[item]));
    tr.appendChild(td);
    contarColumna();
}

function contarColumna() {
    ++contadorColumna
    if (contadorColumna === 3) {
        tr = document.createElement('tr');
        tablaDeDatos.appendChild(tr)
        contadorColumna = 0;
    }
}

function calculaMultiplo(serie, multiplos) {
    //serie.forEach(esMultiplo(elemento))
    /*multiplos.push(elemento);*/
};

function esPar(elemento) {
    if (elemento % 2 === 0) {
        return true
    }
}