// Metodo daniel
function añadir() {
  //Verificamos que el input no este vacio
  

  if(entrada.value)
  {
    const id = contador;
    contador++;
    var li = document.createElement("li");
    li.className = "padre"
 
    //Diferenciamos las ID de los elementos
    li.innerHTML = `<p id="p${id}" class="parrafo">${entrada.value}<input type="checkbox" id="check${id}"></p>`;
    lista.appendChild(li);
    var p = document.getElementById(`p${id}`);
    borrar.addEventListener("click", eliminar);

    function eliminar() {
      if (check.checked) {
        li.remove(p)
        console.log("checkeado")
        //Eliminamos el eventListener
        borrar.removeEventListener('click', eliminar);
      }
    }
    
    var check = document.getElementById(`check${id}`);
    entrada.value = '';
  }
   
  else if(entrada.value = " " )
  {
    alert("Añade un producto")
  }

};

var lista = document.getElementById("ul");
var entrada = document.getElementById("inputTexto");
var botonAñadir = document.getElementById("botonAñadir");
var botonFiambre = document.getElementById("fechaCorta")
botonAñadir.addEventListener("click", añadir);
var contador = 1;
var borrar = document.getElementById('borrar');

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