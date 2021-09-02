

var divPapa = document.getElementById("divPapa");
var botonInicio = document.getElementById("inicio");
var escondido = document.getElementById("escondido")

botonInicio.addEventListener("mouseover" , showElements)
botonInicio.addEventListener("mouseout", closeElements)

function showElements()
{

 escondido.className = "revelado";

     console.log("hello")
}

function closeElements()
{
    escondido.className = "hiden";
    console.log("bye")
}