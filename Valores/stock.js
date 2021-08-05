
function añadir()
{
    console.log("hola")
    array.push(entrada.value);
    var p = document.createElement("li");

    p.innerHTML ="<p id='p2'>" + entrada.value + " " +"<button id='borrar' class='eliminar'>" + "X" +"</button>" + "<input type='checkbox' id='check'>"+ "</p>" ; 
    lista.appendChild(p);
   
    console.log(array)
   var borrar = document.getElementById('borrar');
   borrar.addEventListener("click", eliminar);

   botonesEliminar = document.getElementsByClassName('eliminar');
    var p2 = document.getElementById("p2");

   Array.from(botonesEliminar).forEach(botonEliminar =>{
    botonEliminar.onclick = eliminar;
    console.log("botoncitos")})
check = false;
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
   check.addEventListener("click",eliminar)


entrada.value='';
   

};

var lista = document.getElementById("ul");
var entrada = document.getElementById("inputTexto");
var botonAñadir = document.getElementById("botonAñadir");
botonAñadir.addEventListener("click", añadir);
var contador = 1;
var array = [];
botonesEliminar = null;

