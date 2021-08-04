var lista = document.getElementById("ul");
var entrada = document.getElementById("inputTexto");
var botonAñadir = document.getElementById("botonAñadir");
botonAñadir.addEventListener("click", añadir);
var contador = 1;
var array = [];

function añadir()
{
    console.log("hola")
   
    var p = document.createElement("li");
    p.innerHTML ="<p>" + entrada.value + " " +"<button id='borrar'>" + "X" +"</button>" + "</p>" ; 
    lista.appendChild(p);
    array.push(entrada.value);
    console.log(array)
   var borrar = document.getElementById("borrar")
   borrar.addEventListener("click", eliminar)

  



   function eliminar()
   {
       array.pop()
       console.log("borrado")
    

   }


};

