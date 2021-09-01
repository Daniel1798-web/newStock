

var divPapa = document.getElementById("divPapa");
var botonInicio = document.getElementById("inicio");
var escondido = document.getElementById("escondido")

botonInicio.addEventListener("mouseover" , showElements)

function showElements()
{

 escondido.className = "revelado";
 botonInicio.removeEventListener("mouseover", showElements)
     console.log("hello")
}