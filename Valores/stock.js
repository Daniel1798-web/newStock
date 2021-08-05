
function añadir()
{
   no
    var p = document.createElement("li");

    p.innerHTML ="<p id='p2'>" + entrada.value + "<input type='checkbox' id='check'>"+ "</p>" ; 
    lista.appendChild(p);
   
    console.log(array)
  

   
    var p2 = document.getElementById("p2");

   /*Array.from(botonesEliminar).forEach(botonEliminar =>{
    botonEliminar.onclick = eliminar;
    console.log("botoncitos")})
    check = false;*/

    borrar.addEventListener("click", eliminar);
   function eliminar()
   {
     
if(check.checked)
{
  p.remove(p2)
  console.log("checkeado")
}


    }
 console.log(botonesEliminar)
 var check = document.getElementById("check")
  


entrada.value='';
   

};

var lista = document.getElementById("ul");
var entrada = document.getElementById("inputTexto");
var botonAñadir = document.getElementById("botonAñadir");
botonAñadir.addEventListener("click", añadir);
var contador = 1;
var array = [];
botonesEliminar = null;
var borrar = document.getElementById('borrar');
var cosaslocas;
var otrascOSAS;

