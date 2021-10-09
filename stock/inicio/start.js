

var divPapa = document.getElementById("divPapa");
var botonInicio = document.getElementById("inicio");
var escondido = document.getElementById("escondido")
var imagen2 = document.getElementById("imagen2")
var imagen3 = document.getElementById("imagen3")
var infoMessage  = document.getElementById("infoMessage");
imagen2.addEventListener("click", enlace)
imagen3.addEventListener("click", info)

function enlace()
{
    window.open("http://127.0.0.1:5500/stock/inicio/stock.html", "_blanck")
}

function info()
{
    
    let textInfo = document.createTextNode( "Hola¡  si tiene una duda comuniquese con nuestro servicio Tecnico");    
    infoMessage.appendChild(textInfo)
    console.log("hols")

}