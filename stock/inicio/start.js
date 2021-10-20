

var divPapa = document.getElementById("divPapa");
var botonInicio = document.getElementById("inicio");
var escondido = document.getElementById("escondido")
var imagen1 = document.getElementById("imagen1")
var imagen2 = document.getElementById("imagen2")
var imagen3 = document.getElementById("imagen3")

imagen1.addEventListener("click", enlace)
imagen2.addEventListener("click", enlace2)
imagen3.addEventListener("click", info)

function enlace()
{
    window.open("http://127.0.0.1:5501/stock/inicio/stock.html","_blanck")
}

function info()
{
    alert("Hola¡, estas en problemas? comunicate al /*/*/*/*/*")
}

function enlace2()
{
    window.open("")
}
