// Metodo daniel
function añadir() {
  //Verificamos que el input no este vacio

  if(entrada.value)
  {
    const id = contador;
    contador++;
    var li = document.createElement("li");
    li.className = "linew"
   
 
    //Diferenciamos las ID de los elementos
    li.innerHTML = `<p id="p${id}" class="nar">${entrada.value}<input type="checkbox" id="check${id}" class="check"></p>`;
    lista1.appendChild(li);
    var p = document.getElementById(`p${id}`);
    borrar.addEventListener("click", eliminar);
    var check = document.getElementById(`check${id}`);
 
    tablerito.className = "tableroListaUnocreado"
    

  
    entrada.value = '';


  }

   


  
    else if(entrada.value = " " )
  {

    alert("Escribe algo tio")
    entrada.value = ""
  }



   


  function eliminar() {
  if(check.checked)
  {

    console.log("checkeado")
    li.remove(p)
  
    //Eliminamos el eventListener
    borrar.removeEventListener('click', eliminar);
    
    

  }

 
  



}
};

function añadirCriticos() {
  //Verificamos que el input no este vacio
  

  if(entrada.value)
  {

    const id = contador;
    contador++;
    var li = document.createElement("li");
    li.className = "padre"
    borrar.addEventListener("click", eliminar);
   
    
 
    //Diferenciamos las ID de los elementos
    li.innerHTML = 
    `<p type='text' id="p${id}" class='nar'>${entrada.value}
    <input type="checkbox" id="check${id}" class="check" /></p>`;

    lista2.appendChild(li);
    var p = document.getElementById(`p${id}`);
    var check = document.getElementById(`check${id}`);

    entrada.value = '';
    
      tablerito2.className="tableroListaUnocreado";
    
  }
  
   

 else if(entrada.value = " " )
  {

    alert("Escribe algo tio")
    entrada.value = ""
  }


  



  function eliminar() {
    if(check.checked)
    {
      
      console.log("checkeado" + contador)
      li.remove(p)
      //Eliminamos el eventListener
      borrar.removeEventListener('click', eliminar);


      
     

    }


  };

 

};








//variables Lista1

var lista1 = document.getElementById("lista1");
var botonAñadir = document.getElementById("botonAñadir");
botonAñadir.addEventListener("click", añadir);


//variables Lista2
var lista2 = document.getElementById("lista2")
var botonCriticos = document.getElementById("fechaCorta")
botonCriticos.addEventListener("click", añadirCriticos)

//Variables de Entrada y Salida
var entrada = document.getElementById("inputTexto");
  
var contador = 0;

var borrar = document.getElementById('borrar');


var tablerito = document.getElementById("tablerito");
var tablerito2 = document.getElementById("tableritoDos")




//Metodo kayrox
// /**@type {Array<{ li: HTMLLIElement, check: HTMLInputElement }>} */
// const items = [];
// function añadir() {
//   if(entrada.value) {
//     const li = document.createElement('li');
//     const p = document.createElement('p');
//     p.innerText = entrada.value;
//     li.appendChild(p);
//     const check = document.createElement('input');
//     check.type = 'checkbox';
//     p.appendChild(check);
//     items.push({ li, check })
//     lista.appendChild(li);
//     //Igual a
//     //items.push({ li: li, check: check });
//     entrada.value = '';
//   }
// }

// function borrarItems() {
//   for(let item of items) {
//     if(item.check.checked) {
//       item.li.remove();
//       const index = items.lastIndexOf(item);
//       items.splice(index, 1);
//     }
//   }
// }

// borrar.addEventListener('click', borrarItems);