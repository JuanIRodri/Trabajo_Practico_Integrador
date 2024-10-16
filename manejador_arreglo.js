
function agregarElemento(arreglo) {
    arreglo.push(arreglo);
    
}
function mostarElemento(arreglo) {
    console.table(arreglo);
    
}

function editarElemento(id,arreglo) {
    
   for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == id) {


            
        }
   }

}


function borrarElemento(params) {
    
}
export {agregarElemento, mostarElemento, editarElemento, borrarElemento};